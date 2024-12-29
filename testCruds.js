import { testExecuter } from "../../assignments/test_framework/test.js";
import { items } from "./items.js";
import { cruds } from "./cruds.js";

const testCases = [
  [
    cruds.search,
    [
      [
        { ...items[0], itemId: "0123" },
        { ...items[1], itemId: "9023" },
      ],
      "0324",
    ],
    {},
  ],
  [
    cruds.search,
    [
      [
        { ...items[0], itemId: "0123" },
        { ...items[1], itemId: "9023" },
      ],
      "",
    ],
    {},
  ],
  [
    cruds.search,
    [
      [
        { ...items[0], itemId: "0123" },
        { ...items[1], itemId: "9023" },
      ],
      "0123",
    ],
    {
      itemId: "0123",
      itemType: "Smart Phone",
      description: "Redmi 12C",
      brand: "MI",
      price: 9000,
    },
  ],
  [
    cruds.sort,
    [[{ price: 2000 }, { price: 1000 }], "price"],
    [{ price: 1000 }, { price: 2000 }],
  ],
];

testExecuter(testCases);
