import { Box, Button, Container, Flex, Heading, NumberInput, NumberInputField, Text } from "@chakra-ui/react";

const Hero : React.FC = () => {
    return (
    <Container bg='blue.100' h='90vh' maxW='full'>
        <Box w='50%' pl='10' py='16'>
            <Heading as='h1' size='2xl' color='blue.900' fontWeight='black' textTransform='uppercase'>Happy cleaners = happy customers</Heading>
            <Text color='blue.900' fontSize='xl' pt='6' letterSpacing='tight' fontWeight='semibold'>Freska's professional cleaners are trained, employed and insured. In other words, they have real jobs! Check when our amazing cleaners are available in your area.</Text>
            <Flex mt='6' h='20' position='relative'>
                <NumberInput bg='white' rounded='100' display='flex' w='33%' >
                    <NumberInputField letterSpacing='widest' minH='100%' placeholder="Home size" fontSize='xl' rounded='100' borderTopRightRadius='0' borderBottomRightRadius='0'/>
                </NumberInput>
                <NumberInput bg='white' rounded='100' display='flex' w='66%'>
                    <NumberInputField letterSpacing='widest' minH='100%' placeholder="Postcode" fontSize='xl' rounded='100' borderTopLeftRadius='0' borderBottomLeftRadius='0'/>
                </NumberInput>
                <Button colorScheme='linkedin' position='absolute' right='4' top='2' bottom='2' w='12rem' h='auto'  rounded='100' >Finder, keepers!</Button>       
            </Flex>     
            <Text color='blue.900' fontSize='sm' pt='6' letterSpacing='tight' fontWeight='medium'>✔️ Socially responsible home cleaning ✔️ Eco-lighthouse certified ✔️ No binding contract ✔️ 100% satisfaction guarantee ✔️ Easy and safe to book online</Text>
        </Box>
    </Container>
    )
}
export default Hero;