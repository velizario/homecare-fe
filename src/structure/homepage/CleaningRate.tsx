import { Container, Image, Box, Text } from "@chakra-ui/react"

const CleaningRate :React.FC = () => {
    return (
      <Container maxW='full' p='0' mb='36' h='40rem' position='relative' display='flex' alignItems='center' justifyContent='center' gap='3%'>
        <Image src="/resources/cleaninggirl.jpg" position='absolute' alt="" height='full' w='full' objectFit='cover' objectPosition='left 30%' zIndex='-1'/>
        <Box  bg='white' w='21rem'  h='21rem' p='12' rounded='2rem' textAlign='center' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Text fontSize='xl' pb='6'>Cleanings Completed</Text>
            <Text fontSize='5xl'  pb='6'fontWeight='extrabold'>1,000,000</Text>
            <Text color='gray.500'>and counting!</Text>
        </Box>
        <Box  bg='white' w='21rem' h='21rem' p='12' rounded='2rem' textAlign='center' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Text fontSize='xl' pb='6'>The average rating of cleanings</Text>
            <Text fontSize='5xl' pb='6' fontWeight='extrabold'>4.7 /5</Text>
            <Text color='gray.500'>Our homecleaners are professionals, reliable and loved by our customers.</Text>
        </Box>

      </Container>
    )
}

export default CleaningRate;