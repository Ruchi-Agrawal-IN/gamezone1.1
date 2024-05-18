import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
interface Props {
  onPlatFormSelection: (platform: Platform) => void;
  sPlatform: Platform | null;
}
const PlatformSelector = ({ sPlatform, onPlatFormSelection }: Props) => {
  const { data } = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {sPlatform !== null ? sPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((ptfm) => (
          <MenuItem key={ptfm.id} onClick={() => onPlatFormSelection(ptfm)}>
            {ptfm.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
