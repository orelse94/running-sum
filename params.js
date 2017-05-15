const testSuites = [
  {
    testName: 'first test',
    baseLine: { headers: [ 'Total OrganizationId' ],
      baseLine:
      { fullname: 'LocalHost/6.2.5',
        revisionId: '75f44821-29d5-4325-9d34-f98841825d7e' },
      metadata:
      [ { table: 'dbo.Assignees',
        column: 'OrganizationId',
        dim: '[dbo.Assignees.OrganizationId]',
        datatype: 'numeric',
        agg: 'sum',
        title: 'Total OrganizationId' } ],
      values: [ { data: 2698128, text: '2698128' } ] },
    datasource: '6.2.5',
    token: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiNTcyNzU2OTU2NjEyNzY0ZDhjYjUxNTM3IiwiYXBpU2VjcmV0IjoiMzY5NjNlM2UtN2Q3Zi1mNmUxLWI0YTMtNmI5YmNkMjAzMmQ4IiwiaWF0IjoxNDk0NTA3Mzg1fQ.ZXNh1mKUwZro-j4fXSnxKlpPkiXa7RdfB8TUE0R3UlM',
    jaql: {'table': 'dbo.Assignees','column': 'OrganizationId',
      'dim': '[dbo.Assignees.OrganizationId]',
      'datatype': 'numeric',
      'agg': 'sum',
      'title': 'Total OrganizationId',
    },
  },
  {
    testName: 'second test',
    baseLine: { headers: [ 'Total OrganizationId' ],
      baseLine:
      { fullname: 'LocalHost/6.2.5',
        revisionId: '75f44821-29d5-4325-9d34-f98841825d7e' },
      metadata:
      [ { table: 'dbo.Assignees',
        column: 'OrganizationId',
        dim: '[dbo.Assignees.OrganizationId]',
        datatype: 'numeric',
        agg: 'sum',
        title: 'Total OrganizationId' } ],
      values: [ { data: 2698128, text: '2698128' } ] },
    datasource: '6.2.5',
    token: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiNTcyNzU2OTU2NjEyNzY0ZDhjYjUxNTM3IiwiYXBpU2VjcmV0IjoiMzY5NjNlM2UtN2Q3Zi1mNmUxLWI0YTMtNmI5YmNkMjAzMmQ4IiwiaWF0IjoxNDk0NTA3Mzg1fQ.ZXNh1mKUwZro-j4fXSnxKlpPkiXa7RdfB8TUE0R3UlM',
    jaql: {'table': 'dbo.Assignees','column': 'OrganizationId',
      'dim': '[dbo.Assignees.OrganizationId]',
      'datatype': 'numeric',
      'agg': 'sum',
      'title': 'Total OrganizationId',
    },
  }];

const paramsArray = (() =>{
  return testSuites;
});

module.exports = {
  paramsArray,
};
