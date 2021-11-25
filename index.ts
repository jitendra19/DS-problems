// Import stylesheets
import './style.css';

import testParenthesis from './scripts/parenthesis';
import testAnagram, { testAnagramWithSort } from './scripts/anagram';
import { testSortByCharacterthenByNumber } from './scripts/general';

testSortByCharacterthenByNumber();

testParenthesis();
testAnagram();
testAnagramWithSort();

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
