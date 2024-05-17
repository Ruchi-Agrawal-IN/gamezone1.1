import { Text } from "@chakra-ui/react";
import useGenres from "./useGenres";

const GenreList = () => {
  const { genres, error } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {genres.map((g) => (
          <li>{g.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
