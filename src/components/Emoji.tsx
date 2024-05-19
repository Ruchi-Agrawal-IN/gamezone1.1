import bullsEye from "../assets/bulls-eye.webp";
import ThumbsUp from "../assets/thumbs-up.webp";
import Meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    5: { src: bullsEye, alt: "Exceptional", boxSize: "35px" },
    4: { src: ThumbsUp, alt: "Recommended", boxSize: "25px" },
    3: { src: Meh, alt: "meh", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
