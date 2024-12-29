const search = (items, itemId) => items.find(({ itemId: id }) => id === itemId) || {};
export const cruds = { search };
