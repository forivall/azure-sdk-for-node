// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles?api-version=2016-04-02')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'b1778165-1bed-41c6-a865-194ac22fda31',
  'x-ms-client-request-id': '04aef816-1e7e-4d20-8875-7b0b1e7c81d2',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '2464add8-c7d0-4c4c-bcab-ed0658a1aa68',
  'x-ms-routing-request-id': 'WESTUS:20160511T223637Z:2464add8-c7d0-4c4c-bcab-ed0658a1aa68',
  date: 'Wed, 11 May 2016 22:36:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles?api-version=2016-04-02')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'b1778165-1bed-41c6-a865-194ac22fda31',
  'x-ms-client-request-id': '04aef816-1e7e-4d20-8875-7b0b1e7c81d2',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '2464add8-c7d0-4c4c-bcab-ed0658a1aa68',
  'x-ms-routing-request-id': 'WESTUS:20160511T223637Z:2464add8-c7d0-4c4c-bcab-ed0658a1aa68',
  date: 'Wed, 11 May 2016 22:36:37 GMT',
  connection: 'close' });
 return result; }]];