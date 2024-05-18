import noImage from "../assets/no-image-placeholder-6f3882e0.webp";
const getCroppedImageUrl = (url: string) => {
  if (url === null) return noImage;
  const target = "media/";
  const mediaIdx = url.indexOf(target) + target.length;

  const fPartUrl = url.slice(0, mediaIdx);
  const lPartUrl = url.slice(mediaIdx);
  const finalURL = fPartUrl + "crop/600/400/" + lPartUrl;
  return finalURL;
};
export default getCroppedImageUrl;
