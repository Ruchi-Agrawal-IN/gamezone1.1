const getCroppedImageUrl = (url: string) => {
  if (url === null) return "";
  const target = "media/";
  const mediaIdx = url.indexOf(target) + target.length;

  const fPartUrl = url.slice(0, mediaIdx);
  const lPartUrl = url.slice(mediaIdx);
  const finalURL = fPartUrl + "crop/600/400/" + lPartUrl;
  return finalURL;
};
export default getCroppedImageUrl;
