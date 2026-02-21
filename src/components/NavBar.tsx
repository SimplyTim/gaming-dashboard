import { HStack, Image, Text} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode"
import logo_dark from '../assets/icon_website_dark_mode.webp'
import logo_light from '../assets/icon_website_light_mode.webp'
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar(){
    const logo = useColorModeValue(logo_light, logo_dark)
    return(
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize="60px"/>
            <Text>Gamers Dashboard</Text>
            <ColorModeSwitch/>
        </HStack>
    )
}

export default NavBar;