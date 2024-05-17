import { Text } from "@chakra-ui/react";
import useGenres from "./useGenres";

const GenreList = () => {
  const { data, error } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {data.map((g) => (
          <li>{g.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
