export const getEmptyRows = (amount = 10) => {
  const rows = [];
  for (let i = amount; i > 0; i -= 1) {
    rows.push({ value: '' });
  }
  return rows;
};

export const addEmptyRowsToAll = (columns, amount = 10) => (
  columns.map((column) => ({ ...column, rows: column.rows.concat(getEmptyRows(amount)) }))
);

export const createColumn = (title, type, amount) => ({
  type,
  title,
  rows: getEmptyRows(amount)
});

// eslint-disable-next-line prefer-spread
export const createArrayFromNum = (length) => Array.apply(null, { length }).map(Number.call, Number);
