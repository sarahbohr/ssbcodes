import AWS fom 'aws-sdk'

export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient()

  return dynamoDb[action](params).promise()
}