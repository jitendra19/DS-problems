function anagram(str1, str2) {
  const temp = {};
  let returnVal = true;
  for (let i in str1) {
    if (temp[str1[i]]) temp[str1[i]]++;
    else temp[str1[i]] = 1;
  }
  for (let i in str2) {
    if (temp[str2[i]]) temp[str2[i]]--;
    else {
      returnVal = false;
      break;
    }
  }
  if (returnVal) {
    for (let i in temp) {
      if (temp[i] > 0) {
        returnVal = false;
        break;
      }
    }
  }
  return returnVal;
}
export default function testAnagram() {
  console.log(anagram('loop', 'pool') === true);
  console.log(anagram('loop1', 'pool') === false);
  console.log(anagram('loop', 'pool1') === false);
  console.log(anagram('loop', '') === false);
}

function anagramWithSort(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
export function testAnagramWithSort() {
  console.log(anagramWithSort('loop', 'pool') === true);
  console.log(anagramWithSort('loop1', 'pool') === false);
  console.log(anagramWithSort('loop', 'pool1') === false);
  console.log(anagramWithSort('loop', '') === false);
}
