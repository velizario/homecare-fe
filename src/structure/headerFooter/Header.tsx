import { Container, Flex, Spacer, Image, Icon, Box, Badge, Tooltip } from '@chakra-ui/react'
import freskalogo from '../../resources/freskalogo.svg';
import ButtonRoute from '../../utils/ButtonRoute';
import { MdNotifications } from "react-icons/md"
import styles from "./Header.module.css"

const Header : React.FC = () => {

    return (
    <Container px='8' maxW='full' h='24' bg="#fafbfc" boxShadow="sm" position="sticky" top='0' alignItems="center" display='flex' zIndex="100">
        <Flex gap='14' >
            <ButtonRoute to="/" variant='unstyled' ><Image src={freskalogo} alt="SVG as an image" h='6' cursor='pointer'></Image></ButtonRoute>
            <ButtonRoute to='/services' variant='ghost' textTransform='uppercase' >Services</ButtonRoute>
            <ButtonRoute to='/about' variant='ghost' textTransform='uppercase' >About Us</ButtonRoute>
            <ButtonRoute rounded='100' to='/ordercleaning'>Order a cleaning</ButtonRoute>
        </Flex>
        <Spacer></Spacer>
        <Tooltip  p='3' borderRadius='md' border="1px solid #eaebec" hasArrow arrowShadowColor='#eaebec' fontSize='sm' fontWeight='normal' color='gray.700' bg='#fafbfc' openDelay={1000} label='Имате непрочетени съобщения'>
            <Box>
                <ButtonRoute position="relative" variant="ghost" mr="2" px="3"  to='/dashboard/messages'>
                    <Icon className={styles.bell} as={MdNotifications} mt="0.5" h="8" w="8" color="gray.500" />
                    <Badge className={styles.notificationCircle} position="relative" top="-1" ml="-4" fontSize='2xs'  bg="rgba(230,40,40,1)" color="white" px="1"  boxShadow="lg" borderRadius="xl" h="5" minW="5" lineHeight="5" textAlign="center">
                        15
                    </Badge>
                </ButtonRoute>
            </Box>
        </Tooltip>
        <ButtonRoute variant="ghost" color="gray.500" to='/dashboard/profile'>Профил</ButtonRoute>
    </Container>
    )
}
export default Header;