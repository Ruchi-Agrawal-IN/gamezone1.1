import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import { HStack } from "@chakra-ui/react";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleGenreSelection = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };
  const handlePlatformSelection = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };
  const handleSortSelection = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`, // mobile
          lg: `"nav nav" "aside main"`, //size>1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={3}>
            <GenreList
              onSelectGenre={(genre) => handleGenreSelection(genre)}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack paddingX={3} spacing={25} marginBottom={5}>
            <PlatformSelector
              sPlatform={gameQuery.platform}
              onPlatFormSelection={(pltfrm) => handlePlatformSelection(pltfrm)}
            />
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) => handleSortSelection(sortOrder)}
            />
          </HStack>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
