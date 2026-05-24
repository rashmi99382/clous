import { Amplify } from "aws-amplify";
import { awsConfig, hasAwsConfig } from "./aws-config.js";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: awsConfig.cognito.userPoolId,
      userPoolClientId: awsConfig.cognito.userPoolClientId,
      identityPoolId: awsConfig.cognito.identityPoolId,
      loginWith: {
        email: true
      }
    }
  },
  Storage: {
    S3: {
      bucket: awsConfig.s3.bucket,
      region: awsConfig.region
    }
  }
});

export { awsConfig, hasAwsConfig };
