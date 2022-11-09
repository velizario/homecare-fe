import { Box, Container, Heading, Text, Image, Button } from "@chakra-ui/react"


const KeyMessages:React.FC = () => {
    return (
    <Container maxW='full' p='0' overflow='hidden' mb='36'>
        <Box w='full' display='flex' alignItems='center' justifyContent='flex-end' height='36rem'>
            <Box w='50%' pl='10' pr='14' fontSize='lg' maxWidth='42.5rem'>
                <Heading pb='6' textTransform='uppercase' fontSize='3xl' fontWeight='extrabold'>We invest in people</Heading>
                <Text pb='6'>By choosing Freska, you make your cleaner's happiness as important as your own - and we love you for that!</Text>
                <Text pb='6'>
                    <Text as='span' fontWeight='bold'>
                        Did you know that 70% of our hourly price goes towards paying our cleaners?
                        </Text>
                    <Text as='span'> This includes the hourly pay, travel time, sick leave, holiday pay, tax contributions and insurance of our wonderful cleaners.</Text>
                </Text>
                <Text>
                    <Text as='span' fontWeight='bold'>
                        Why is 20% of our hourly price spent on administration? 
                    </Text>
                    <Text as='span'> For our cleaners, this covers expenses like supplies, work attire and books for Norwegian course. The remaining covers insurance, office spaces, salaries and goods like holiday pay, sick leave and pension for office employees. Thirdparty costs such as our membership at Virke and Eco-lighthouse certification is also included in this cost.</Text>
                </Text>
            </Box>
            <Box w='50%' h='full'>
                <Image src="/resources/kitchensmiling.jpg" alt="" height='full' w='full' objectFit='cover' objectPosition='right 50%'/>
            </Box>
        </Box>

        <Box w='full' display='flex' alignItems='center' justifyContent='flex-start' height='36rem'>
            <Box w='50%' h='full'>
                <Image src="/resources/stoveclean.jpg" alt="" height='full' w='full' objectFit='cover' objectPosition='right 60%'/>
            </Box>
            <Box w='50%' pl='14' pr='10' fontSize='lg' maxWidth='45rem'>
                <Heading pb='6' textTransform='uppercase' fontSize='3xl' fontWeight='extrabold'>HELP US CLEAN UP THE CLEANING INDUSTRY!</Heading>
                <Text pb='6'>Cleaners have a crucial job in our society, but are too often neglected. To thank the cleaners is a start, but now it’s time for us to pull together and make sure cleaners’ rights are taken care of!</Text>
                <Button variant='link' color='black' textDecoration='underline' fontSize='large' textUnderlineOffset='0.35rem' _hover={{ color: "gray.500" }}>Find out how you can help, here.</Button>
            </Box>

        </Box>
    </Container>
    )
}

export default KeyMessages;