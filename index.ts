// Import stylesheets
import './style.css';

import testParenthesis from './scripts/parenthesis';
import testAnagram, { testAnagramWithSort } from './scripts/anagram';
testParenthesis();

testAnagram();
testAnagramWithSort();

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
