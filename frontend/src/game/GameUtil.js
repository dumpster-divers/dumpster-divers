import canSource        from "../assets/can.png";
import strawSource      from "../assets/straw.png";
import appleSource      from "../assets/apple.png";
import milkBottleSource from "../assets/milk_bottle.png";
import newspaperSource  from "../assets/newspaper.png";
import waterBottle      from "../assets/water_bottle.png";

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