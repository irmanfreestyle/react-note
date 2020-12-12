const menus = [
  {
    title: 'All Notes',
    icon: 'note',
    to: '/all'
  },
  {
    title: 'Pinned',
    icon: 'local_offer',
    to: '/pinned'
  },
  {
    title: 'Setting',
    icon: 'settings',
    to: '/setting'
  }
];

const notes = [
  {
    title: 'My First Note',
    content: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
    createdAt: 0,
    labels: ['javascript', 'tips & trick'],
    pinned: false
  },
  {
    title: 'My Second Note',
    content: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
    createdAt: 0,
    labels: ['holiday', 'tips & trick'],
    pinned: false
  },
  {
    title: 'My Third Note',
    content: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
    createdAt: 0,
    labels: ['projects', 'tips & trick'],
    pinned: false
  },
  {
    title: 'My New Note',
    content: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
    createdAt: 0,
    labels: ['projects', 'Cooking'],
    pinned: false
  }
]

export {menus, notes}