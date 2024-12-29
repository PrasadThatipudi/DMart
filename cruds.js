const search = (items, itemId) =>
  items.find(({ itemId: id }) => id === itemId) || {};

const sort = (items, key) =>
  items.toSorted(({ [key]: k1 }, { [key]: k2 }) => k1 - k2);

export const cruds = { search, sort };
