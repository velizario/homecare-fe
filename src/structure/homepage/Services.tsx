import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Heading, Text } from "@chakra-ui/react";

const Services : React.FC = () => {
    return (
    <Container w='100%' maxW='4xl' mb='60'>
        <Heading textAlign='center' pb='10' textTransform='uppercase' fontSize='3xl' fontWeight='extrabold'>Included in the home cleaning</Heading>
        <Text textAlign='center' py='10' fontSize='2xl' fontWeight='medium'>Socially responsible and sustainable home cleaning? Yes please! 💙 Our wonderful cleaners are ready to complete the following tasks in your home.</Text>
        <Container maxW='3xl'>
            <Accordion  allowMultiple>
                <AccordionItem borderStyle='none' >
                    <AccordionButton borderStyle='none'>
                        <Box flex='1' textAlign='left'>
                            <Text fontWeight='normal' fontSize='2xl'> 
                                In general / all spaces
                            </Text>
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton >
                    <AccordionPanel fontSize='xl'  pl='12'>
                            <ul> 
                                <li>
                                    We now include disinfection of important contact surfaces in the home
                                </li>
                                <li>
                                    Dusting all level surfaces (where the cleaner reaches, less than 180cm in height)
                                </li>          
                                <li>
                                    Vacuuming floors and carpets
                                </li>
                                <li>
                                    Damp mopping floors (if floor material suitable for damp mopping)
                                </li>
                                <li>
                                    Stain removal from door frames, door handles and light switches
                                </li>
                                <li>
                                    Wiping mirrors and other glass surfaces (excluding windows)
                                </li>
                                <li>
                                    Disposing of trash (if the customer advises where / arranges access to the waste disposal area)
                                </li>
                            </ul>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            <Text fontWeight='normal' fontSize='2xl'> 
                                Kitchen
                            </Text>
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel fontSize='xl' pl='12'>
                            <ul> 
                                <li>
                                    Dusting all level surfaces (where the cleaner reaches, less than 180cm in height)                            </li>
                                <li>
                                    Cleaning the sink, cooker and extractor hood surface
                                </li>          
                                <li>
                                    Removing stains on the outside of the microwave oven, refrigerator and dishwasher
                                </li>
                                <li>
                                    Wiping other kitchen appliances (e.g. coffee maker, toaster, blender)
                                </li>
                                <li>
                                    Vacuuming floors and carpets
                                </li>
                                <li>
                                    Damp mopping floors (if floor material suitable for damp mopping)
                                </li>
                                <li>
                                    Wiping mirrors and other glass surfaces (window cleaning can be booked separately)
                                </li>
                            </ul>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            <Text fontWeight='normal' fontSize='2xl'> 
                                Bathroom
                            </Text>
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel fontSize='xl' pl='12'>
                            <ul> 
                                <li>
                                    We now include disinfection of important contact surfaces in the home
                                </li>
                                <li>
                                    Dusting all level surfaces (where the cleaner reaches, less than 180cm in height)
                                </li>          
                                <li>
                                    Vacuuming floors and carpets
                                </li>
                                <li>
                                    Damp mopping floors (if floor material suitable for damp mopping)
                                </li>
                                <li>
                                    Stain removal from door frames, door handles and light switches
                                </li>
                                <li>
                                    Wiping mirrors and other glass surfaces (excluding windows)
                                </li>
                                <li>
                                    Disposing of trash (if the customer advises where / arranges access to the waste disposal area)
                                </li>
                            </ul>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem >
                    <AccordionButton >
                        <Box flex='1' textAlign='left' >
                            <Text fontWeight='normal' fontSize='2xl'> 
                                Bedroom
                            </Text>
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel fontSize='xl' pl='12'>
                            <ul> 
                                <li>
                                    We now include disinfection of important contact surfaces in the home
                                </li>
                                <li>
                                    Dusting all level surfaces (where the cleaner reaches, less than 180cm in height)
                                </li>          
                                <li>
                                    Vacuuming floors and carpets
                                </li>
                                <li>
                                    Damp mopping floors (if floor material suitable for damp mopping)
                                </li>
                                <li>
                                    Stain removal from door frames, door handles and light switches
                                </li>
                                <li>
                                    Wiping mirrors and other glass surfaces (excluding windows)
                                </li>
                                <li>
                                    Disposing of trash (if the customer advises where / arranges access to the waste disposal area)
                                </li>
                            </ul>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            <Text fontWeight='normal' fontSize='2xl'> 
                                Separately ordered services
                            </Text>
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel fontSize='xl' pl='12'>
                            <ul> 
                                <li>
                                    We now include disinfection of important contact surfaces in the home
                                </li>
                                <li>
                                    Dusting all level surfaces (where the cleaner reaches, less than 180cm in height)
                                </li>          
                                <li>
                                    Vacuuming floors and carpets
                                </li>
                                <li>
                                    Damp mopping floors (if floor material suitable for damp mopping)
                                </li>
                                <li>
                                    Stain removal from door frames, door handles and light switches
                                </li>
                                <li>
                                    Wiping mirrors and other glass surfaces (excluding windows)
                                </li>
                                <li>
                                    Disposing of trash (if the customer advises where / arranges access to the waste disposal area)
                                </li>
                            </ul>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            <Text fontWeight='normal' fontSize='2xl'> 
                                Tasks that are not included
                            </Text>
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel fontSize='xl' pl='12'>
                            <ul> 
                                <li>
                                We now include disinfection of important contact surfaces in the home
                                </li>
                                <li>
                                    Dusting all level surfaces (where the cleaner reaches, less than 180cm in height)
                                </li>          
                                <li>
                                    Vacuuming floors and carpets
                                </li>
                                <li>
                                    Damp mopping floors (if floor material suitable for damp mopping)
                                </li>
                                <li>
                                    Stain removal from door frames, door handles and light switches
                                </li>
                                <li>
                                    Wiping mirrors and other glass surfaces (excluding windows)
                                </li>
                                <li>
                                    Disposing of trash (if the customer advises where / arranges access to the waste disposal area)
                                </li>
                            </ul>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>   
        </Container>
    </Container>
    )
}
export default Services;