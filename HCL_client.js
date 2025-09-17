const data = {
  user: {
    name: 'Alice',
    address: { city: 'Wonderland', zip: 12345 },
    tags: ['admin', 'editor', 42]
  },
  active: true,
  notes: ['hello', { msg: 'world' }]
};
 
function extractAllStrings(input) {
  const result = [];
  function traverse(val) {
    if (typeof val === 'string') {
      result.push(val);
    } else if (Array.isArray(val)) {
      for (const item of val) traverse(item);
    } else if (val && typeof val === 'object') {
      for (const key in val) traverse(val[key]);
    }
  }
  traverse(input);
  return result;
}
console.log(extractAllStrings(data));