import bin_general_green_1 from "../assets/bin_general_green_1.png";
import bin_general_green_closed from "../assets/bin_general_green_closed.png";
import bin_recycle_orange_1 from "../assets/bin_recycle_orange_1.png";
import bin_recycle_orange_closed from "../assets/bin_recycle_orange_closed.png";
import diver_cert_card from "../assets/diver_cert_card.png";
import dumpster_diver from "../assets/dumpster_diver.png";
import HowToPlayGif from "../assets/howtoplay.gif";

import ItemTypes from "./Constants.js";

const TrashImages = Object.values(ItemTypes);

const OtherImages = [
  bin_general_green_1,
  bin_general_green_closed,
  bin_recycle_orange_1,
  bin_recycle_orange_closed,
  diver_cert_card,
  dumpster_diver,
  HowToPlayGif,
];

const Images = TrashImages.concat(OtherImages);

console.log(Images.length);

export default Images;
