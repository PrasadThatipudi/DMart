import { items } from "./items.js";
import { testExecuter } from "../../assignments/test_framework/test.js";

const displayItems = (items) => console.table(items);

const readChoice = function () {
  console.log("1.display items 2.seach item");

  return prompt("Enter your choice here: ");
};

const main = function (items) {
  const choice = readChoice();

  if (choice === 1) return displayItems(items);
};

main(items);

// ----------------- Test Fragment -----------------
const testCases = [[]];

testExecuter(testCases);