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
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedSortOrder, setSelectedSortOrder] = useState("");
  const handleGenreSelection = (genre: Genre) => {
    setSelectedGenre(genre);
  };
  const handlePlatformSelection = (platform: Platform) => {
    setSelectedPlatform(platform);
  };
  const handleSortSelection = (sortOrder: string) => {
    setSelectedSortOrder(sortOrder);
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
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack paddingX={3} spacing={25} marginBottom={5}>
            <PlatformSelector
              sPlatform={selectedPlatform}
              onPlatFormSelection={(pltfrm) => handlePlatformSelection(pltfrm)}
            />
            <SortSelector
              selectedSortOrder={selectedSortOrder}
              onSelectSortOrder={(sortOrder) => handleSortSelection(sortOrder)}
            />
          </HStack>

          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
            selectedSortOrder={selectedSortOrder}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
