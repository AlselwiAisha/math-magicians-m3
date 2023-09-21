import operate from '../logic/operate';

describe('operate testing', () => {
  test('Plus test', () => {
    expect(operate(9, 5, '+')).toBe('14');
  });

  test('Minus test', () => {
    expect(operate(9, 5, '-')).toBe('4');
  });

  test('Div test', () => {
    expect(operate(10, 5, '÷')).toBe('2');
  });

  test('Divide by 0 test', () => {
    expect(operate(9, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('Times test', () => {
    expect(operate(9, 5, 'x')).toBe('45');
  });

  test('Mod test', () => {
    expect(operate(9, 5, '%')).toBe('4');
  });

  test('Modulo, divide by 0', () => {
    expect(operate(9, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
