let obj = {
  Key1: "key1 value",
  Key2: {
    childKey1: "child 1",
    childKey2: "child 2",
  },
};

// Create a new object with the renamed key
const updatedObj = {
  ...obj,
  Key2: {
    ...obj.Key2,
    childKey2: "rayudu",
  },
};

console.log(updatedObj);

const getData = async () => {
  const res = await axios.get(URL);
  const result = res.data;
  console.log(result);
};
getData();
