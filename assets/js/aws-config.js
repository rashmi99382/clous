export const awsConfig = {
  region: "us-east-1",
  cognito: {
    userPoolId: "us-east-1_omZOQ6mUZ",
    userPoolClientId: "4ib53qp3cgnl05mvdimvhnri3m",
    identityPoolId: "us-east-1:0046d43b-5761-4edb-abba-ef35be2669b3"
  },
  s3: {
    bucket: "clous-user-media"
  },
  dynamodb: {
    tableName: "UserMediaUploads"
  }
};

export function hasAwsConfig() {
  return !JSON.stringify(awsConfig).includes("YOUR_");
}
