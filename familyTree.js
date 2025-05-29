const familyTree = {
  name: "Grandparent",
  children: [
    {
      name: "Parent 1",
      children: [
        {
          name: "Child 1",
          children: [],
        },
        {
          name: "Child 2",
          children: [],
        },
      ],
    },
    {
      name: "Parent 2",
      children: [
        {
          name: "Child 3",
          children: [
            {
              name: "Child 3-1",
              children: [],
            },
            {
              name: "Child 3-2",
              children: [
                {
                  name: "Child 3-2-1",
                  children: [],
                },
                {
                  name: "Child 3-2-2",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: "Child 4",
          children: [],
        },
      ],
    },
  ],
};

function displayNames(tree) {
  console.log(tree.name); // Display the name of the current person

  // Recursively display the names of children
  //   console.log(tree.children);
  const array = tree.children;
  if (array.length > 0) {
    for (const word of array) {
      displayNames(word);
    }
  }
}

// Call the function to display names starting from the grandparent
displayNames(familyTree);
