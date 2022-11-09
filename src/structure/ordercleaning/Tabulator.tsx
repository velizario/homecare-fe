import { Tabs, TabList, Tab, TabPanels, TabPanel, Container, Box, Image, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai"
import CleaningAgenda from "./CleaningAgenda";
import CleaningNeeds from "./CleaningNeeds";

const Tabulator :React.FC = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabsChange = (index: number)  => {
        setTabIndex(index);
    }

    return (
        <Container mt='8' maxW='4xl'>
            <Tabs index={tabIndex} onChange={handleTabsChange} variant='unstyled' w='100%'  display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Box w='100%' maxW='md' mb='10'>
                    <TabList display='flex' justifyContent='space-between' whiteSpace='nowrap' mb='5'>
                        <Tab w='33.3%' p='0' justifyContent='flex-start' color='gray.400' fontSize='xl' fontWeight='medium' _selected={{ color: 'currentColor' }}>
                            Service
                            <Icon ml='1.5' color='current-color' as={AiOutlineCheckCircle} visibility={(tabIndex === 0) ? "visible" : "hidden" }></Icon>
                        </Tab>
                        <Tab w='33.3%' p='0' color='gray.400' fontSize='xl' fontWeight='medium'  _selected={{ color: 'currentColor'}}>
                            Date & Time
                            <Icon ml='1.5' color='current-color' as={AiOutlineCheckCircle} visibility={(tabIndex === 1) ? "visible" : "hidden" }></Icon>
                        </Tab>
                        <Tab w='33.3%' p='0' justifyContent='flex-end' color='gray.400' fontSize='xl' fontWeight='medium'  _selected={{ color: 'currentColor'}}>
                            Payment
                            {/* <Icon ml='1.5'color='current-color' as={AiOutlineCheckCircle} visibility={(tabIndex === 2) ? "visible" : "hidden" }></Icon> */}
                        </Tab>
                    </TabList>
                    <Box h='1' w='100%' bg='gray.200'>
                        <Box h='100%' w={`${100/3*(tabIndex+1)}%`} bg='black' transition='0.3s ease all'></Box>
                    </Box>
                </Box>
                <TabPanels>
                    <TabPanel>
                        <CleaningNeeds></CleaningNeeds>
                    </TabPanel>
                    <TabPanel>
                        <CleaningAgenda></CleaningAgenda>
                    </TabPanel>
                    <TabPanel>
                    <p>Three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}

export default Tabulator ;
