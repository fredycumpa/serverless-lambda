# Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

### Locally

In order to test the hello function locally, run the following command:

- `npx sls invoke local -f hello --path src/functions/hello/mock.json` if you're using NPM
- `yarn sls invoke local -f hello --path src/functions/hello/mock.json` if you're using Yarn

Check the [sls invoke local command documentation](https://www.serverless.com/framework/docs/providers/aws/cli-reference/invoke-local/) for more information.

### plugin

Added the plugin serverless-iam-roles-per-function to specify the resources that every function has access to (since we don’t want to give access to every resource we have.

```
npm install — save-dev serverless-iam-roles-per-function
```


### Deploy

Configure sls to use our AWS Credentials.

```
sls config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY --profile YOUR_AWS_PROFILE
```

Deploy to AWS.

```
sls deploy -v --aws-profile YOUR_AWS_PROFILE
```