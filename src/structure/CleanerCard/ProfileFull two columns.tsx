import { Box, Grid, Image, Text, Button, Stack, Tag, GridItem, HStack, Icon, textDecoration, Container, Flex, Link } from "@chakra-ui/react";
import Ratings from "../../utils/Ratings";
import { BiBorderRight, BiLinkExternal } from 'react-icons/bi'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { AiOutlineLink, AiOutlineInstagram } from 'react-icons/ai'
import { GrFacebookOption } from 'react-icons/gr'
import { CiGlobe } from 'react-icons/ci'
import ButtonRoute from "../../utils/ButtonRoute";
// import wwwicon  from "../../resources/wwwicon.svg"


const ProfileFull:React.FC = () => {
    return (
        <Box minW='0' w="100%" px='6' py='2'>
            <Grid templateColumns={{base: 'repeat(2, 1fr)'}} templateRows={{base: '20rem auto-fill'}} gridTemplateAreas={{base: `'img bio' 'rate rate'`}} columnGap={4} rowGap='6' height='100%'>
                <GridItem gridArea='img' minH='0' h='100%' >
                    <Box overflow='hidden' h='md' borderRadius='md' >
                        <Image src='https://storage.ws.pho.to/s2/f607aa4c6a291a39cc8c654481fe72568435da6c_m.jpg'  w='100%' objectFit='cover' objectPosition='50% 0%' cursor='pointer'></Image>
                    </Box>
                </GridItem>
                <GridItem gridArea='bio'  display='flex' flexDirection='column' height='100%'>
                    <Box display='flex' flexDirection='column' height='100%' justifyContent='space-between'>
                        <Grid gap='4' gridAutoFlow='column'>
                            <GridItem textAlign='center'  paddingInline='8' borderRight='2px solid lightgray'>
                                <Text fontSize='2xl' color='gray.600' fontWeight='bold' mb='3'>5</Text>
                                <Text fontSize='xs' fontWeight='medium' color='gray.400'>Клиента</Text>
                            </GridItem>

                            <GridItem textAlign='center' color='gray.600'  paddingInline='8' borderRight='2px solid lightgray'>
                                <Text fontSize='2xl' fontWeight='bold' mb='3'>19</Text>
                                <Text fontSize='xs' fontWeight='medium' color='gray.400' >Посещения</Text>
                            </GridItem>

                            <GridItem textAlign='center' paddingInline='8'>
                                <Text fontSize='2xl' color='gray.600' fontWeight='bold' mb='3'>4.5</Text>
                                <Text fontSize='xs' fontWeight='medium' color='gray.400'>Оценка</Text>
                            </GridItem>
                        </Grid>

                        <Box mb='5' display='flex' alignItems='center' gap='2' alignSelf='center'>
                            <Text fontSize='xl' fontWeight='normal'>25 изпълнени услуги</Text>
                            <Box position='relative' >
                                <Ratings></Ratings>
                            </Box>
                        </Box>

                        <Text mb='10' fontSize='sm'>Martí is a senior UI/UX designer based in New York. For the past several years, he's been designing digital products for the banking, hospitality, fashion, healthcare, pharmaceutical, automotive, and software industries.</Text>
                        
                        <Box display='flex' rowGap='2' columnGap='2' flexWrap='wrap' >
                            <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Гладене</Tag>
                            <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Прозорци</Tag>
                            <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Абонаментна услуга</Tag>
                            <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Еднократно посещение</Tag>
                            <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Миене на печка</Tag>
                            <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Миене на хладилник</Tag>
                        </Box>


                    </Box>
                </GridItem>
                <GridItem gridArea='rate'>
                        <Text fontSize='md' fontWeight='medium' mb='10'>Велизар Максимов Стоянов</Text>

                        <Box display='flex' alignItems='center' mb='10'>
                            <HStack spacing='4' color='linkedin.800' >
                                    <Icon cursor='pointer' as={GrFacebookOption} h='5' w='5' _hover={{color: 'black'}}></Icon>
                                    <Icon cursor='pointer' as={CiGlobe} h='5' w='5' _hover={{color: 'black'}}></Icon>
                                    <Icon cursor='pointer' as={AiOutlineInstagram} h='5' w='5' _hover={{color: 'black'}}></Icon>
                            </HStack>
                            <ButtonRoute size='sm' borderRadius='md' colorScheme='linkedin' w='min-content'>Свържете се с мен</ButtonRoute>
                        </Box>

                    <Text fontSize='md' fontWeight='medium' mb='2'>Ревюта от клиенти</Text>
                    <Box borderTop='1px solid rgba(230,230,230)' py='10' >
                        <Box mb='2'>
                            <Box position='relative' left='-1' mb='1'>
                                <Ratings size='6'></Ratings>
                            </Box>
                            <Text fontSize='lg'>For me the best digital helper on fiverr. Super professionell and also very fast. Looking forward for the next website project!</Text>
                        </Box>
                        <Box display='flex' gap='4' alignItems='center'>
                            <Box overflow='hidden' w='3rem' h='3rem' borderRadius='full'>
                                <Image src='https://storage.ws.pho.to/s2/f607aa4c6a291a39cc8c654481fe72568435da6c_m.jpg' w='100%' h='100%' objectFit='cover' objectPosition='50% 0%' cursor='pointer'></Image>
                            </Box>
                            <Text fontSize='sm' color='gray.600' textDecor='underline' cursor='pointer' transition= 'all 0.2s ease-in-out' _hover={{color:'gray.400'}}>Marti Bruno</Text>
                            <Text fontSize='sm' color='gray.600'>4 days ago</Text>
                        </Box>   
                    </Box>
                    <Box borderTop='1px solid rgba(230,230,230)' py='10' >
                        <Box mb='2'>
                            <Box position='relative' left='-1' mb='1'>
                                <Ratings size='6'></Ratings>
                            </Box>
                            <Text fontSize='lg'>For me the best digital helper on fiverr. Super professionell and also very fast. Looking forward for the next website project!</Text>
                        </Box>
                        <Box display='flex' gap='4' alignItems='center'>
                            <Box overflow='hidden' w='3rem' h='3rem' borderRadius='full'>
                                <Image src='https://storage.ws.pho.to/s2/f607aa4c6a291a39cc8c654481fe72568435da6c_m.jpg' w='100%' h='100%' objectFit='cover' objectPosition='50% 0%' cursor='pointer'></Image>
                            </Box>
                            <Text fontSize='sm' color='gray.600' textDecor='underline' cursor='pointer' transition= 'all 0.2s ease-in-out' _hover={{color:'gray.400'}}>Marti Bruno</Text>
                            <Text fontSize='sm' color='gray.600'>4 days ago</Text>
                        </Box>   
                    </Box>
                    <Box borderTop='1px solid rgba(230,230,230)' py='10' >
                        <Box mb='2'>
                            <Box position='relative' left='-1' mb='1'>
                                <Ratings size='6'></Ratings>
                            </Box>
                            <Text fontSize='lg'>For me the best digital helper on fiverr. Super professionell and also very fast. Looking forward for the next website project!</Text>
                        </Box>
                        <Box display='flex' gap='4' alignItems='center'>
                            <Box overflow='hidden' w='3rem' h='3rem' borderRadius='full'>
                                <Image src='https://storage.ws.pho.to/s2/f607aa4c6a291a39cc8c654481fe72568435da6c_m.jpg' w='100%' h='100%' objectFit='cover' objectPosition='50% 0%' cursor='pointer'></Image>
                            </Box>
                            <Text fontSize='sm' color='gray.600' textDecor='underline' cursor='pointer' transition= 'all 0.2s ease-in-out' _hover={{color:'gray.400'}}>Marti Bruno</Text>
                            <Text fontSize='sm' color='gray.600'>4 days ago</Text>
                        </Box>   
                    </Box>
                   
                </GridItem>
            </Grid>
        </Box>
    );
}

export default ProfileFull;
