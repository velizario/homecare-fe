import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMessageCircle, FiShoppingCart} from "react-icons/fi"

const panelButtons = [
    {
        id: "1",
        route: "orders",
        label: "Заявки",
        icon: FiShoppingCart
    },
    {
        id: "2",
        route: "messages",
        label: "Съобщения",
        icon: FiMessageCircle,
    },
    {
        id: "3",
        route: "profile",
        label: "Моят профил",
        icon: FiUser,
    },
]

const MenuPanel = () => {

    const [ activeButton, setActiveButton ] = useState<string>("3")
    const navigate = useNavigate()

    const handleMenuButtonClick = (id: string, route: string) => {
        setActiveButton(id);
        navigate(route)
    }

    return (
    <Box px='4' py="4" bg="linear-gradient(90deg, #fafbfc, white);" position='relative' boxShadow="md" >
        <Flex w="56" position="relative" marginLeft="auto" marginRight="0" flexDirection='column' alignItems='flex-start' >
            {panelButtons.map((button) => (
                <Flex key={button.id} alignItems="center" w="100%">
                    <Button 
                        isActive={activeButton === button.id}
                        key={button.id}
                        variant="panelButton"
                        data-id={button.id} 
                        // to={button.route}
                        onClick={() => handleMenuButtonClick(button.id, button.route)}>
                            <Icon as={button.icon} h="5" w="5" mr='4'/>
                            {button.label} 
                    </Button>
                </Flex>
            ))}
        </Flex>
    </Box>
    )
}

export default MenuPanel;