export function testSortByCharacterthenByNumber() {
  // const a = [
  //   ['abc', '123'],
  //   ['abc', '90'],
  //   ['ab', '9'],
  //   ['ab', '11'],
  // ];
  const a = ['abc123', 'abc90', 'ab9', 'ab11'];
  const temp = [];
  for (let i in a) {
    temp.push(a[i].match(/[a-z]+|[^a-z]+/gi));
  }
  temp
    .sort((i1: any, i2: any) => {
      return i1[0] - i2[0];
    })
    .sort((i1, i2) => {
      return parseInt(i1[1]) - parseInt(i2[1]);
    });
  console.log(temp);
}
