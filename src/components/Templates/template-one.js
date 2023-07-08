export const treeDom = [
  {
    id: 1,
    type: `header`,
    parent: null,
    style: {padding: `20px`, backgroundColor: `azure`},
    children: [
      {
        id: 2,
        type: `h1`,
        parent: 1,
        style: {padding: `20px`, backgroundColor: `azure`},
        children: [],
      },
      {
        id: 4,
        type: `p`,
        parent: 1,
        children: [
          {
            id: 5,
            type: `span`,
            parent: 4,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    type: `p`,
    parent: null,
    children: [],
  },
];
