function parenthesis(input) {
  if (input === '' || input === null) return true;
  else {
    const stack = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === '[' || input[i] === '(') {
        stack.push(input[i]);
      } else {
        if (input[i] === ']') {
          if (stack[stack.length - 1] !== '[') return false;
          else stack.splice(stack.length - 1, 1);
        } else {
          if (stack[stack.length - 1] !== '(') return false;
          else stack.splice(stack.length - 1, 1);
        }
      }
    }
    return stack.length === 0;
  }
}

export default function testParenthesis() {
  console.log(parenthesis('[]'));
  console.log(parenthesis('[()]'));
  console.log(parenthesis('[([)]'));
  console.log(parenthesis('[([])]'));
}
