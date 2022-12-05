import { Box, Container, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { BsCheckCircle } from "react-icons/bs"
import ButtonRoute from "../../utils/ButtonRoute";
import Footer from "../homepage/Footer";
import Header from "../homepage/Header";

const OrderPlaced:React.FC = () => {
    return (
        <>
            <Header/>
            <Container minH='xl'>
                <Flex alignItems='center' flexDirection='column' mx='auto'>
                    <Icon as={BsCheckCircle} w='10' h='10' mb='4' color='green.600' />
                    <Heading as='h2' fontSize='2xl' noOfLines={1} color='green.600' mb='10'>Благодарим Ви, заявката ви бе изпратена успешно.</Heading>
                    <Text mb='10'>Ще получите информация за статуса на заявката по мейл (и вайбър), както и във вашия профил.</Text>
                    <ButtonRoute to='/' variant='outline'>Връщане към главна страница</ButtonRoute>
                </Flex>
            </Container>
            <Footer/>
        </>
    )
}

export default OrderPlaced;
