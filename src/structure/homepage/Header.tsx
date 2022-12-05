import { Button,  Container, Flex, Spacer, Image } from '@chakra-ui/react'
import freskalogo from '../../resources/freskalogo.svg';
import ButtonRoute from '../../utils/ButtonRoute';



const Header : React.FC = () => {

    return (
    <Container px='8' maxW='full' h='24' bg='gray.50' alignItems="center" display='flex'>
        <Flex gap='14' >
            <ButtonRoute to="/" variant='unstyled' ><Image src={freskalogo} alt="SVG as an image" h='6' cursor='pointer'></Image></ButtonRoute>
            <ButtonRoute to='/services' variant='link' textTransform='uppercase' _hover={{ textDecoration: "none" }}>Services</ButtonRoute>
            <ButtonRoute to='/about' variant='link' textTransform='uppercase' _hover={{ textDecoration: "none" }}>About Us</ButtonRoute>
        </Flex>
        <Spacer></Spacer>
        <ButtonRoute rounded='100' to='/ordercleaning'>Order a cleaning</ButtonRoute>
    </Container>
    )
}
export default Header;