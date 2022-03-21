# Serverless CRUD

Serverless service which provides a basic CRUD .

## Installation

Make sure that you use Serverless v1.

1. Run `serverless install --url https://github.com/fredycumpa/serverless-lambda.git` to install the service in your current working directory
2. Next up cd into the service with `cd serverless-lambda`
3. Run `npm install`
3. Configure sls to use our AWS Credentials `sls config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY --profile YOUR_AWS_PROFILE`
4. Deploy with `sls deploy -v --aws-profile YOUR_AWS_PROFILE`

## How to use

Simply perform requests against the exposed endpoints:

### Create

```bash
curl -X POST https://XXXX.execute-api.region.amazonaws.com/dev/products --data '{ "name" : "product }'
```

### Read all


```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/products
```

### Read one

```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/products/<id>
```

### Update

```bash
curl -X PUT https://XXXX.execute-api.region.amazonaws.com/dev/products/<id> --data '{ "name" : "producto 2" }'
```

### DELETE

```bash
curl -X DELETE https://XXXX.execute-api.region.amazonaws.com/dev/products/<id>
```

## AWS services used

- Lambda
- API Gateway
- DynamoDB
