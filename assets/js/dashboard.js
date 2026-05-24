import { fetchAuthSession, getCurrentUser, signOut } from "aws-amplify/auth";
import { getUrl, uploadData } from "aws-amplify/storage";
import {
  DynamoDBClient,
  PutItemCommand,
  QueryCommand
} from "@aws-sdk/client-dynamodb";
import { awsConfig, hasAwsConfig } from "./aws.js";

const message = document.getElementById("dashboard-message");
const list = document.getElementById("content-list");
let currentUser;
let currentIdentityId;

function setMessage(text, type = "") {
  if (!message) {
    return;
  }
  message.textContent = text;
  message.className = `form-message ${type}`.trim();
}

function value(id) {
  return document.getElementById(id)?.value.trim() ?? "";
}

function setObjectPreview(inputId, previewId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  input?.addEventListener("change", () => {
    const file = input.files?.[0];
    if (!file || !preview) {
      return;
    }
    preview.src = URL.createObjectURL(file);
  });
}

function updateTextPreview() {
  document.getElementById("preview-title").textContent = value("media-title") || "Your title will appear here";
  document.getElementById("preview-description").textContent =
    value("media-description") || "Your description will appear here.";
}

function createDynamoClient(credentials) {
  return new DynamoDBClient({
    region: awsConfig.region,
    credentials
  });
}

function mediaKey(userId, folder, file) {
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  return `users/${userId}/${folder}/${Date.now()}-${safeName}`;
}

async function uploadPrivateFile(key, file) {
  const result = await uploadData({
    path: key,
    data: file,
    options: {
      contentType: file.type
    }
  }).result;
  return result.path;
}

async function signedUrl(path) {
  const result = await getUrl({
    path,
    options: {
      expiresIn: 1800
    }
  });
  return result.url.toString();
}

async function saveRecord(record) {
  const session = await fetchAuthSession();
  const client = createDynamoClient(session.credentials);
  await client.send(new PutItemCommand({
    TableName: awsConfig.dynamodb.tableName,
    Item: {
      userId: { S: record.userId },
      createdAt: { S: record.createdAt },
      name: { S: record.name },
      title: { S: record.title },
      description: { S: record.description },
      picturePath: { S: record.picturePath },
      videoPath: { S: record.videoPath }
    }
  }));
}

async function loadRecords() {
  if (!currentUser || !hasAwsConfig()) {
    return;
  }

  const session = await fetchAuthSession();
  const client = createDynamoClient(session.credentials);
  const result = await client.send(new QueryCommand({
    TableName: awsConfig.dynamodb.tableName,
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": { S: currentUser.userId }
    },
    ScanIndexForward: false
  }));

  const cards = await Promise.all((result.Items ?? []).map(async (item) => {
    const pictureUrl = await signedUrl(item.picturePath.S);
    const videoUrl = await signedUrl(item.videoPath.S);
    return `
      <article class="content-card">
        <img src="${pictureUrl}" alt="${item.title.S} picture">
        <video src="${videoUrl}" controls></video>
        <div>
          <h3>${item.title.S}</h3>
          <p>${item.description.S}</p>
          <time datetime="${item.createdAt.S}">${new Date(item.createdAt.S).toLocaleString()}</time>
        </div>
      </article>
    `;
  }));

  list.innerHTML = cards.length ? cards.join("") : "<p class=\"form-message\">No uploads yet.</p>";
}

async function protectDashboard() {
  if (!hasAwsConfig()) {
    setMessage("Add your AWS values in assets/js/aws-config.js to enable login, upload, and dashboard records.", "error");
    list.innerHTML = "<p class=\"form-message\">AWS configuration is still using placeholders.</p>";
    return;
  }

  try {
    currentUser = await getCurrentUser();
    const session = await fetchAuthSession();
    currentIdentityId = session.identityId;
    document.getElementById("user-email").textContent = currentUser.signInDetails?.loginId ?? currentUser.username;
    await loadRecords();
  } catch {
    window.location.href = "login.html";
  }
}

document.getElementById("logout-button")?.addEventListener("click", async () => {
  await signOut();
  window.location.href = "login.html";
});

document.getElementById("media-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!hasAwsConfig()) {
    setMessage("Add AWS configuration before saving data.", "error");
    return;
  }

  const picture = document.getElementById("picture-file").files?.[0];
  const video = document.getElementById("video-file").files?.[0];
  if (!picture || !video) {
    setMessage("Choose both a picture and a video.", "error");
    return;
  }

  setMessage("Uploading files to S3...");
  try {
    const storageOwnerId = currentIdentityId ?? currentUser.userId;
    const picturePath = await uploadPrivateFile(mediaKey(storageOwnerId, "pictures", picture), picture);
    const videoPath = await uploadPrivateFile(mediaKey(storageOwnerId, "videos", video), video);
    await saveRecord({
      userId: currentUser.userId,
      createdAt: new Date().toISOString(),
      name: value("display-name"),
      title: value("media-title"),
      description: value("media-description"),
      picturePath,
      videoPath
    });
    setMessage("Saved to S3 and DynamoDB.", "success");
    await loadRecords();
  } catch (error) {
    setMessage(error.message ?? "Upload failed.", "error");
  }
});

setObjectPreview("picture-file", "image-preview");
setObjectPreview("video-file", "video-preview");
document.getElementById("media-title")?.addEventListener("input", updateTextPreview);
document.getElementById("media-description")?.addEventListener("input", updateTextPreview);
protectDashboard();
