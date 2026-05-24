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

export function hasAwsConfig() {
  return !JSON.stringify(awsConfig).includes("YOUR_");
}
