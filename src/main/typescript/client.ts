///<reference path="../../../typings/main.d.ts"/>
///<reference path="../../../node_modules/aws-sdk-typescript/output/typings/aws-lambda.d.ts"/>
///<reference path="../../../node_modules/aws-sdk-typescript/output/typings/aws-cognito-identity.d.ts"/>
///<reference path="./Nullweblog.d.ts"/>

import AWS = require("aws-sdk");

AWS.config.region = 'us-east-1';

if (process.env['COGNITO_POOL_ID']) {
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env['COGNITO_POOL_ID']
  });
}

var lambdaClient = new AWS.Lambda();

function createBlogPost(a: Nullweblog.CreatePostArgs, callback) {
  var args = <AWS.Lambda.InvocationRequest> {
    FunctionName: "nwl_create_post:DEV",
    Payload: JSON.stringify(a, null, 2)
  };

  lambdaClient.invoke(args, callback);
}

var newPost = <Nullweblog.CreatePostArgs>{
    title: 'Hello, World!'
};

createBlogPost(newPost, (err, data) => {
  console.log("err: ", err, ", data:", data);

  if (data) {
    var dataAsResult = <Nullweblog.CreatePostResult> JSON.parse(data.Payload);

    console.log('data (formatted): ', JSON.stringify(dataAsResult, null, 2));
  }
});
