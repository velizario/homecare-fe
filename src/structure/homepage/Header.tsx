import { Button,  Container, Flex, Spacer, Image } from '@chakra-ui/react'
import freskalogo from '../../resources/freskalogo.svg';



const Header : React.FC = () => {
    return (
    <Container px='8' maxW='full' h='24' bg='gray.50' alignItems="center" display='flex'>
        <Flex gap='14' >
            <Image src={freskalogo} alt="SVG as an image" h='6' cursor='pointer'></Image>
            <Button variant='link' textTransform='uppercase' _hover={{ textDecoration: "none" }}>Services</Button>
            <Button variant='link' textTransform='uppercase' _hover={{ textDecoration: "none" }}>About Us</Button>
        </Flex>
        <Spacer></Spacer>
        <Button colorScheme='linkedin' rounded='100'>Order a cleaning</Button>
    </Container>
    )
}
export default Header;