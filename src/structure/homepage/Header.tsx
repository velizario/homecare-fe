import { Button,  Container, Flex, Spacer, Image } from '@chakra-ui/react'
import freskalogo from '../../resources/freskalogo.svg';
import ButtonRoute from '../../utils/ButtonRoute';



const Header : React.FC = () => {

    return (
    <Container px='8' maxW='full' h='24' bg="#fafbfc" boxShadow="0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03)" alignItems="center" display='flex' position="relative" zIndex="100">
        <Flex gap='14' >
            <ButtonRoute to="/" variant='unstyled' ><Image src={freskalogo} alt="SVG as an image" h='6' cursor='pointer'></Image></ButtonRoute>
            <ButtonRoute to='/services' variant='link' textTransform='uppercase' _hover={{ textDecoration: "none" }}>Services</ButtonRoute>
            <ButtonRoute to='/about' variant='link' textTransform='uppercase' _hover={{ textDecoration: "none" }}>About Us</ButtonRoute>
        </Flex>
        <Spacer></Spacer>
        <ButtonRoute variant="link" mr="2" rounded='100' to='/dashboard/profile'>Профил</ButtonRoute>
        <ButtonRoute rounded='100' to='/ordercleaning'>Order a cleaning</ButtonRoute>
    </Container>
    )
}
export default Header;