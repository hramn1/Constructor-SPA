export const treeDom = [
  {
    id: 1,
    type: 'header',
    parent: null,
    children: [
      {
        id: 2,
        type: "h1",
        parent: 1,
        css: "height: 50px; background: red",
        children: []
      },
      {
        id: 4,
        type: "p",
        parent: 1,
        children: [
          {
            id: 5,
            type: "span",
            parent: 4,
            children: []
          },
        ]
      }
    ]
  },
  {
    id: 3,
    type: "p",
    parent: null,
    children: []
  }
]
