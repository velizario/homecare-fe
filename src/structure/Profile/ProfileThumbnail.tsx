import React, { RefObject } from "react";
import { Box, Grid, Image, Text, Button, Tag, GridItem, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure, Input, Textarea, Link, TagLabel, Icon, Flex, HStack, Badge, Tooltip, TagLeftIcon } from "@chakra-ui/react";
import { RiArrowLeftSLine } from 'react-icons/ri'
import Ratings from "../../utils/Ratings";
import ProfileFull from "./ProfileFull";
import { GoCalendar } from 'react-icons/go'
import { GiStarFormation, GiWisdom } from 'react-icons/gi'
import { MdOutlineQuickreply, MdQuickreply } from 'react-icons/md'
import ButtonRoute from "../../utils/ButtonRoute";


const ProfileThumbnail:React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef() as RefObject<HTMLDivElement>

    return (
        <Box minW='0' w="100%" h='2xs' p='6' borderRadius='md' border='1px solid rgba(230,230,230,0.7)'  _hover={{boxShadow:'0 0px 15px 0 rgba(80,80,80,.1)', transition: '0.2s all ease'}}>
            <Drawer size='lg' isOpen={isOpen} placement='right' onClose={onClose} initialFocusRef={firstField}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton position='relative' left='3' top='3' as={RiArrowLeftSLine} cursor='pointer'></DrawerCloseButton>
                    <DrawerBody>
                        <Box tabIndex={0} ref={firstField}></Box>
                        <ProfileFull ></ProfileFull>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            <Grid templateColumns={'2fr 6fr 1fr'} rowGap='4' columnGap='5' height='100%'>
                <GridItem colSpan={1} minH='0' h='100%' >
                    <Box overflow='hidden' maxH='100%' borderRadius='md'>
                        <Image src='https://storage.ws.pho.to/s2/f607aa4c6a291a39cc8c654481fe72568435da6c_m.jpg' w='100%' objectFit='cover' objectPosition='50% 0%' cursor='pointer'></Image>
                    </Box>
                </GridItem>
                <GridItem colSpan={1} display='flex' flexDirection='column' alignItems='flex-start'>
                    <ButtonRoute variant='link' onClick={onOpen} fontSize='lg' fontWeight='medium' mb='0.5'>Marti Bruno</ButtonRoute>
                    <Box display='flex' alignItems='center' justifyContent='flex-start' mb='6'>
                        <Text mr='1'  fontSize='sm' fontWeight='medium' color='gray.600' >4,1</Text>
                        <Ratings size='5'></Ratings>
                        <Text ml='1' onClick={onOpen} fontSize='sm' fontWeight='medium' cursor='pointer' color='linkedin.600' className='rating'>(
                            <Text as='span'  sx={{'.rating:hover &': {textDecoration:'underline'}}}>45</Text>
                            )</Text>
                    </Box>
                    <Text fontSize='sm'>Martí is a senior UI/UX designer based in New York. For the past several years, he's been designing digital products for the banking, hospitality, fashion, healthcare, pharmaceutical, automotive, and software industries.</Text>
                    <HStack gap='4' marginTop='auto'>
                    <Tooltip hasArrow={true} placement='top' p='2' bg='rgba(255,255,255,1)' borderRadius='md' fontSize='smaller' label='Високо оценен профил'>
                            <Text as='span'><Icon as={GiStarFormation} h='6' w='6' p='0.5' color='brandSecondary.400' borderRadius='50%'></Icon></Text>
                        </Tooltip>
                        <Tooltip hasArrow={true} placement='top' p='2' bg='rgba(255,255,255,1)' borderRadius='md' fontSize='smaller' label='Повече от година опит'>
                            <Text as='span'><Icon as={GiWisdom} h='6' w='6' p='0.5' color='brandSecondary.400' borderRadius='50%'></Icon></Text>
                        </Tooltip>
                        <Tooltip hasArrow={true} placement='top' p='2' color='gray.300' bg='rgba(255,255,255,1)' borderRadius='md' fontSize='smaller' label='Отговаря бързо'>
                            <Text as='span'><Icon as={MdQuickreply} h='6' w='6' p='0.5' borderRadius='50%'  color='gray.300'></Icon></Text>
                        </Tooltip>
                    </HStack>
                </GridItem>
                <GridItem display='flex' flexDirection='column' alignItems='center'>
                    <ButtonRoute to='/bookcleaning' size='sm' variant='solid' borderRadius='md' onClick={onOpen} mb='4' justifyContent='space-between' w='100%'>
                        <Icon cursor='pointer' as={GoCalendar} h='4' w='4' mr='3'></Icon>
                        Запази час
                    </ButtonRoute>
                    <ButtonRoute variant='outline' size='sm' borderRadius='md' onClick={onOpen} w='100%'>Задай въпрос</ButtonRoute>
                    
                </GridItem>
            </Grid>
        </Box>
    );
}

export default ProfileThumbnail;