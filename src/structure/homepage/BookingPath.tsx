import { Box, Button, Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import ButtonRoute from "../../utils/ButtonRoute";

const BookingPath : React.FC = () => {
    return (
        <Container maxW='70rem' mb='36' display='flex' flexDirection='column' alignItems='center'>
            <Heading textAlign='center' pb='10' textTransform='uppercase' fontSize='3xl' fontWeight='extrabold'>It’s as easy as 1-2-3</Heading>
            <Text textAlign='center' pb='12' fontSize='xl' fontWeight='medium'>We’ve taken great measures to build the easiest way to book a cleaning. Try it!</Text>
            <Grid templateColumns='repeat(3, 1fr)' gap={10} mb='10'>
                <GridItem w='100%' display='flex' flexDir='column' alignItems='center'>
                    <Box boxShadow='lg' borderRadius='50%' h='4rem' w='4rem' display='flex' justifyContent='center' alignItems='center' mb='8'>
                        <Text as='span' fontSize='xl' fontWeight='normal'>1</Text>
                    </Box>
                    <Text fontSize='large'>Tell us about your appartment</Text>
                </GridItem>
                <GridItem w='100%' display='flex' flexDir='column' alignItems='center'>
                    <Box boxShadow='lg' borderRadius='50%' h='4rem' w='4rem' display='flex' justifyContent='center' alignItems='center' mb='8'>
                        <Text as='span' fontSize='xl' fontWeight='normal'>2</Text>
                    </Box>
                    <Text fontSize='large'>Choose duration and extra.</Text>
                </GridItem>
                <GridItem w='100%' display='flex' flexDir='column' alignItems='center'>
                    <Box boxShadow='lg' borderRadius='50%' h='4rem' w='4rem' display='flex' justifyContent='center' alignItems='center' mb='8'>
                        <Text as='span' fontSize='xl' fontWeight='normal'>3</Text>
                    </Box>
                    <Text fontSize='large'>Fill in your info and payment details. Your cleaner arrives on your desired time and you can enjoy a shiny home!</Text>
                </GridItem>
            </Grid>
            <ButtonRoute rounded='100' width='52' h='10' mb='4'>Order a cleaning</ButtonRoute>
        </Container>
    )
}
export default BookingPath;