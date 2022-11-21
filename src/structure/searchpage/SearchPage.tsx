import { Container, Box, FormControl, Text, Grid, GridItem, HStack, Tag, TagCloseButton, TagLabel, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure, Divider } from "@chakra-ui/react";
import React from "react";
import Dropdown from "../../utils/Dropdown";
import { PickerOptions } from "../../utils/Dropdown";
import Footer from "../homepage/Footer";
import Header from "../homepage/Header";
import ProfileFull from "../Profile/ProfileFull";
import ProfileCard from "../Profile/ProfileThumbnail";
import { RiArrowLeftSLine } from 'react-icons/ri'

export const colorOptions:PickerOptions = [
    { value: "blue", label: "Blue", color: "#0052CC" },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630" },
    { value: "orange", label: "асдф сдф ас асд ас дф Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" }
  ];

export const filterOptions:PickerOptions = [
    { value: "Подразбиране", label: "Подразбиране" },
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
                        <Text w='min-content' whiteSpace='nowrap' color='gray.600'>Сортирай по:</Text>
                        <Dropdown variant='unstyled' height='6' dropdownName='color' placeholderValue="Подразбиране" groupedOptions={filterOptions} defaultValue={[{ value: "Подразбиране", label: "Подразбиране" }]}/>
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
                <Grid templateColumns='repeat(3,1fr)' gap='10'>  
                    <GridItem colSpan={2} display='flex' flexDirection='column' rowGap={5} mb='10'>
                        <ProfileCard/>
                        {/* <Divider borderColor='gray.300' /> */}
                        <ProfileCard/>
                        {/* <Divider borderColor='gray.300' /> */}
                        <ProfileCard/>
                        {/* <Divider borderColor='gray.300' /> */}
                        <ProfileCard/>
                        {/* <Divider borderColor='gray.300' /> */}
                        <ProfileCard/>
                        {/* <Divider borderColor='gray.300' /> */}
                        <ProfileCard/>
                    </GridItem>
                    <GridItem>right part of the screen</GridItem>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    )
}

export default SearchPage;