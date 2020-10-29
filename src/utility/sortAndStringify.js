/**
 * @param sortable {object}
 * @return {string}
 */
function sortAndStringify(sortable) {
  if (!sortable) {
    return Math.random().toString()
  }

  const ordered = {};

  Object.keys(sortable).sort().forEach(key => {
    ordered[key] = sortable[key];
  });

  return JSON.stringify(ordered);
}

export default sortAndStringify;
