import usePlatforms from "../hooks/usePlatforms";

const PlatformList = () => {
  const { data } = usePlatforms();
  return (
    <ul>
      {data.map((d) => (
        <li>{d.name}</li>
      ))}
    </ul>
  );
};

export default PlatformList;
