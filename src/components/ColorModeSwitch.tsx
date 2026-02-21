import { Icon, Switch } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
import { useColorMode } from "@/components/ui/color-mode"

function ColorModeSwitch(){
    const { toggleColorMode, colorMode } = useColorMode()
    return (
        <Switch.Root 
            colorPalette="blue" 
            size="lg"
            checked={colorMode === "light"}
            onCheckedChange={toggleColorMode}
        >
        <Switch.HiddenInput />
            {/* @ts-ignore */}
            <Switch.Control>
                 {/* @ts-ignore */}
                <Switch.Thumb>
                    <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
                        <Icon as={FaSun} color="yellow.400" />
                    </Switch.Indicator>
                </Switch.Thumb>
            </Switch.Control>
        </Switch.Root>
    )
}

export default ColorModeSwitch;