const getTrash = () => {
  return TRASH[Math.floor(Math.random() * TRASH.length)]
}

const TRASH = [
  {
    name: "can",
    recyclable: true
  },
  {
    name: "straw",
    recyclable: false
  },
  {
    name: "apple",
    recyclable: false
  },
  {
    name: "milkBottle",
    recyclable: true
  },
  {
    name: "newspaper",
    recyclable: true
  },
  {
    name: "waterBottle",
    recyclable: true
  }
]

export {
  getTrash
}