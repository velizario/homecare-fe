import { Button,  Container, Flex, Spacer, Text} from '@chakra-ui/react'
import FreskaLogo from '../../utils/FreskaLogo';



const Header : React.FC = () => {
    return (
    <Container maxW='full' h='28' bg='gray.50' alignItems="center" display='flex'>
        <Flex gap='14' >
            {FreskaLogo}
            <Button variant='link' textTransform='uppercase' _hover={{ textDecoration: "none" }}>Services</Button>
            <Button variant='link' textTransform='uppercase' _hover={{ textDecoration: "none" }}>About Us</Button>
        </Flex>
        <Spacer></Spacer>
        <Button colorScheme='linkedin' rounded='100'>Order a cleaning</Button>
    </Container>
    )
}
export default Header;