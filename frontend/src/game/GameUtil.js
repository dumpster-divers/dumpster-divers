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
  }
]

export {
  getTrash
}