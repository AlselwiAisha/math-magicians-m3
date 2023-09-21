import calculate from '../logic/calculate';

const objParamAc = [
  {
    identifier: 'AC',
    returnObj: {
      total: null,
      next: null,
      operation: null,
    },
  },
  {
    identifier: '=',
    returnObj: {},
  },
  {
    identifier: '0',
    returnObj: {
      next: '0',
      total: null,
    },
  },
  {
    identifier: '+/-',
    returnObj: {
    },
  },
  {
    identifier: '.',
    returnObj: {
      0: '.',
      next: '0.',
    },
  },
  {
    identifier: '+',
    returnObj: {
      operation: '+',
    },
  },
  {
    identifier: '7',
    returnObj: {
      next: '7',
      total: null,
    },
  },
];

for (let i = 0; i < objParamAc.length; i += 1) {
  test('calculate function returns object based on parameter', () => {
    expect(calculate(
      objParamAc[i].identifier, objParamAc[i].identifier,
    )).toEqual(objParamAc[i].returnObj);
  });
}
