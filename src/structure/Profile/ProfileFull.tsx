import { Box, Grid, Image, Text, Button, Stack, Tag, GridItem, HStack, Icon, textDecoration, Container, Flex, Link } from "@chakra-ui/react";
import Ratings from "../../utils/Ratings";
import { BiLinkExternal } from 'react-icons/bi'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { AiOutlineLink, AiOutlineInstagram } from 'react-icons/ai'
import { GrFacebookOption } from 'react-icons/gr'
import { CiGlobe } from 'react-icons/ci'
// import wwwicon  from "../../resources/wwwicon.svg"


const ProfileFull:React.FC = () => {
    return (
        <Container>
        <Box minW='0' w="100%" p='6' border='1px solid lightgray' borderRadius='sm' >
            <Grid templateColumns='repeat(3, 1fr)' templateRows={'20rem 10rem auto-fill'} columnGap={4} rowGap='6' height='100%'>
                <GridItem colSpan={1} rowSpan={2} minH='0' h='100%' >
                    <Box overflow='hidden' h='md' borderRadius='md' >
                        <Image src='https://storage.ws.pho.to/s2/f607aa4c6a291a39cc8c654481fe72568435da6c_m.jpg'  w='100%' objectFit='cover' objectPosition='50% 0%' cursor='pointer'></Image>
                    </Box>
                </GridItem>
                <GridItem colSpan={2} rowSpan={2} display='flex' flexDirection='column' height='100%'>
                    <Box display='flex' flexDirection='column' height='100%'>
                        <Box display='flex' justifyContent='space-between' >
                            <Text fontSize='lg' fontWeight='medium' color='#1f57c3' cursor='pointer' _hover={{textDecoration:'underline'}}>Marti Bruno</Text>
                            <Flex flexDirection='row' alignItems='center' justifyContent='flex-end' gap='8'>
                                <HStack spacing='4' color='gray.600'>
                                    <Icon cursor='pointer' as={GrFacebookOption} h='5' w='5' _hover={{color: 'black'}}></Icon>
                                    <Icon cursor='pointer' as={CiGlobe} h='5' w='5' _hover={{color: 'black'}}></Icon>
                                    <Icon cursor='pointer' as={AiOutlineInstagram} h='5' w='5' _hover={{color: 'black'}}></Icon>
                                </HStack>
                                <Button size='sm' borderRadius='2xl' colorScheme='linkedin' marginRight='0' marginLeft='auto'>Пиши на Marti</Button>
                            </Flex>
                        </Box>
                        <Text fontSize='sm' mb='10'>Член от януари 2022</Text>
                        <Text mb='10' fontSize='sm'>Martí is a senior UI/UX designer based in New York. For the past several years, he's been designing digital products for the banking, hospitality, fashion, healthcare, pharmaceutical, automotive, and software industries.</Text>
                        <Box display='flex' rowGap='2' columnGap='2' flexWrap='wrap'>
                            <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Гладене</Tag>
                            <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Прозорци</Tag>
                            <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Абонаментна услуга</Tag>
                            <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Еднократно посещение</Tag>
                            <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Миене на печка</Tag>
                            <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Миене на хладилник</Tag>
                        </Box>

                    </Box>
                </GridItem>
                <GridItem colSpan={1} p='6' borderRadius='md' border='1px solid lightgray' color='gray.600'>
                    <Box mb='3' display='flex' gap='2' justifyContent='space-between'>
                        <Text fontSize='sm' fontWeight='medium'>Средно време на отговор:</Text>
                        <Text fontSize='sm' fontWeight='bold' color='gray.800'>2 дни</Text>
                    </Box>
                    <Box mb='3' display='flex' gap='2' justifyContent='space-between'>
                        <Text fontSize='sm' fontWeight='medium'>Последна услуга:</Text>
                        <Text fontSize='sm' fontWeight='bold' color='gray.800'>19/02/2022</Text>
                    </Box>
                </GridItem>
                <GridItem colSpan={2}>
                    <Box mb='4' display='flex' alignItems='center' gap='2' mt='5'>
                        <Text fontSize='xl' fontWeight='bold'>25 изпълнени услуги</Text>
                        <Ratings></Ratings>
                    </Box>
                    <Grid borderTop='1px solid lightgray' py='10' templateColumns={'4rem auto'} columnGap={4} rowGap='4'>
                        <GridItem colSpan={1} overflow='hidden' w='4rem' h='4rem' borderRadius='full'>
                            <Image src='https://storage.ws.pho.to/s2/f607aa4c6a291a39cc8c654481fe72568435da6c_m.jpg' w='100%' h='100%' objectFit='cover' objectPosition='50% 0%' cursor='pointer'></Image>
                        </GridItem>
                        <GridItem rowSpan="auto">
                            <Text fontSize='md' fontWeight='medium' mt='5' mb='6'>Marti Bruno</Text>
                            <Box position='relative' left='-1'>
                                <Ratings size='5'></Ratings>
                            </Box>
                            <Text>For me the best digital helper on fiverr. Super professionell and also very fast. Looking forward for the next website project!</Text>
                        </GridItem>
                    </Grid>
                    <Grid borderTop='1px solid lightgray' py='10' templateColumns={'4rem auto'} columnGap={4} rowGap='4'>
                        <GridItem colSpan={1} overflow='hidden' w='4rem' h='4rem' borderRadius='full'>
                            <Image src='https://storage.ws.pho.to/s2/f607aa4c6a291a39cc8c654481fe72568435da6c_m.jpg' w='100%' h='100%' objectFit='cover' objectPosition='50% 0%' cursor='pointer'></Image>
                        </GridItem>
                        <GridItem rowSpan="auto"  display='flex' flexDirection='column' alignItems='flex-start'>
                            <Text fontSize='md' fontWeight='medium' mt='5' mb='6'>Marti Bruno</Text>
                            <Box position='relative' left='-1'>
                                <Ratings size='5'></Ratings>
                            </Box>
                            <Text>For me the best digital helper on fiverr. Super professionell and also very fast. Looking forward for the next website project!</Text>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </Box>
        </Container>
    );
}

export default ProfileFull;
