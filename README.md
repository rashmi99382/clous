# Simple AWS User Media Website

Static starter website for a secure AWS-hosted media dashboard.

Pages included:

- `index.html`
- `login.html`
- `signup.html`
- `forgot-password.html`
- `dashboard.html`

## AWS services

- AWS Amplify Hosting for the static website
- Amazon Cognito for signup, login, email verification, logout, and forgot password
- Amazon S3 for private picture and video files
- DynamoDB for upload records and profile text

## Configure AWS

Edit `assets/js/aws-config.js`:

```js
export const awsConfig = {
  region: "us-east-1",
  cognito: {
    userPoolId: "YOUR_COGNITO_USER_POOL_ID",
    userPoolClientId: "YOUR_COGNITO_APP_CLIENT_ID",
    identityPoolId: "YOUR_COGNITO_IDENTITY_POOL_ID"
  },
  s3: {
    bucket: "YOUR_PRIVATE_MEDIA_BUCKET_NAME"
  },
  dynamodb: {
    tableName: "UserMediaUploads"
  }
};
```

## DynamoDB table shape

Create a table named `UserMediaUploads`:

- Partition key: `userId` as string
- Sort key: `createdAt` as string

The dashboard writes records like:

```json
{
  "userId": "abc123",
  "createdAt": "2026-05-24T00:00:00.000Z",
  "name": "Rashmi",
  "title": "My first video",
  "description": "Short description",
  "picturePath": "users/abc123/pictures/file.jpg",
  "videoPath": "users/abc123/videos/file.mp4"
}
```

## S3 structure

Uploads use this private path structure:

```text
users/
  cognito-identity-id-123/
    pictures/
      timestamp-profile.jpg
    videos/
      timestamp-video.mp4
```

## Security notes

- Do not store passwords in DynamoDB.
- Do not put AWS secret keys in this website.
- Let Cognito authenticate users and issue temporary scoped credentials.
- Give authenticated Cognito identities access only to their own `users/${cognito-identity-id}/` or equivalent user folder.

## Local preview

Because the site uses browser ES modules, run it from a local static server:

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Amplify Hosting

Upload or connect this folder to Amplify Hosting. The static files can be deployed as-is. After deployment, your live URL will look like:

```text
https://main.d2ibjl439cyfnq.amplifyapp.com
```
