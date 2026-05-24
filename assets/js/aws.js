import { Amplify } from "https://esm.sh/aws-amplify@6.15.6";
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
