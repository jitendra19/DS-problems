// Import stylesheets
import "./style.css";

import testParenthesis from "./scripts/parenthesis";
import testAnagram, { testAnagramWithSort } from "./scripts/anagram";
import { testSortByCharacterthenByNumber } from "./scripts/general";
import testThirdMax from "./scripts/thirdmax";

testSortByCharacterthenByNumber();
testParenthesis();
testAnagram();
testAnagramWithSort();
testThirdMax();

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
