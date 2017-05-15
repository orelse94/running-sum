// jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
var runJaql = require('./postJaql');
const paramsArray = require('./params');
const request = require('request');

paramsArray.paramsArray().forEach((testParams)=>{
  test(`test ${testParams.testName}`,()=>{
    const baseUrl = 'http://localhost:8081';
    const jaql = testParams.jaql;
    const datasource = testParams.datasource;
    const token = testParams.token;
    const baseLine = testParams.baseLine;
    options = {
      uri: `${baseUrl}/api/elasticubes/${datasource}/jaql`,
      headers: { 'Authorization': token},
      method: 'POST',
      json: jaql,
    };

    runJaql.jaqlRunner(options).then((body)=>{
      expect(body).toMatch(baseLine);
    });
  });
})
