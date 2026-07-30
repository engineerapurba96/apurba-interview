const data = {
  a: 1,

  b: {
    c: 2,

    d: {
      e: 1,

      f: 3,
    },
  },

  g: 2,

  h: 4,
};
// If you want to remove duplicate values from a nested object, keeping the first occurrence and removing later duplicates:
//expected output
// {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       f: 3
//     }
//   },
//   h: 4
// }



const seen = new Set();

function removeDuplicates(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      removeDuplicates(obj[key]);
    } else {
      if (seen.has(obj[key])) {
        delete obj[key];
      } else {
        seen.add(obj[key]);
      }
    }
  }
}
const data = {
  a: 1,

  b: {
    c: 2,

    d: {
      e: 1,

      f: 3,
    },
  },

  g: 2,

  h: 4,
};
removeDuplicates(data);

console.log(data);