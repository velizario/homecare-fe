import { Container, Box, FormControl, Text, Grid, GridItem, HStack, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import Dropdown from "../../utils/Dropdown";
import { PickerOptions } from "../../utils/Dropdown";
import Footer from "../homepage/Footer";
import Header from "../homepage/Header";
import ProfileCard from "../Profile/ProfileThumbnail";

export const colorOptions:PickerOptions = [
    { value: "blue", label: "Blue", color: "#0052CC" },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630" },
    { value: "orange", label: "асдф сдф ас асд ас дф Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" }
  ];

export const filterOptions:PickerOptions = [
    { value: "По подразбиране", label: "По подразбиране" },
    { value: "Препоръчани", label: "Препоръчани" },
    { value: "Високо оценени", label: "Високо оценени" }
  ];

const SearchPage:React.FC = () => {
    return (
        <>
            <Header></Header>
            <Container>
                <Box display='flex' justifyContent='space-between' mb='4'>
                    <FormControl w='full' display='flex' gap='4' justifyContent='flex-start'>
                        <Dropdown height='6' dropdownName='color' placeholderValue="Вид посещение" groupedOptions={colorOptions}/>
                        <Dropdown height='6' dropdownName='color' placeholderValue="График" groupedOptions={colorOptions}/>
                        <Dropdown height='6' dropdownName='color' placeholderValue="Район" groupedOptions={colorOptions}/>
                        <Dropdown height='6' dropdownName='color' placeholderValue="Бюджет" groupedOptions={colorOptions}/>
                        <Dropdown height='6' dropdownName='color' placeholderValue="Оценка" groupedOptions={colorOptions}/>
                    </FormControl>
                    <Box display='flex' gap='2' alignItems='center'>
                        <Text w='min-content' whiteSpace='nowrap'>Сортирай по</Text>
                        <Dropdown variant='unstyled' height='6' dropdownName='color' placeholderValue="По подразбиране" groupedOptions={filterOptions} defaultValue={[{ value: "По подразбиране", label: "По подразбиране" }]}/>
                    </Box>
                </Box>
                <Box mb='10'>
                    <HStack spacing={4} verticalAlign='center'>
                            <Tag 
                            size='md' 
                            key='tag1'
                            borderRadius='full'
                            variant='solid'
                            bg='gray.100'
                            color='gray.500'
                            py='1'
                            px='3'
                            >
                            <TagLabel position='relative' top='-0.07rem' cursor='pointer'>Витоша</TagLabel>
                            <TagCloseButton/>
                            </Tag>
                            <Tag 
                            size='md' 
                            key='tag1'
                            borderRadius='full'
                            variant='solid'
                            bg='gray.100'
                            color='gray.500'
                            py='1'
                            px='3'
                            >
                            <TagLabel position='relative' top='-0.07rem' cursor='pointer'>20-25 лв/ч</TagLabel>
                            <TagCloseButton/>
                            </Tag>
                            
        
                    </HStack>
                </Box>
                <Grid templateColumns='repeat(2, 1fr)' gap={10} mb='10'>
                    <GridItem><ProfileCard/></GridItem>
                    <GridItem><ProfileCard/></GridItem>
                    <GridItem><ProfileCard/></GridItem>
                    <GridItem><ProfileCard/></GridItem>
                    <GridItem><ProfileCard/></GridItem>
                    <GridItem><ProfileCard/></GridItem>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    )
}

export default SearchPage;