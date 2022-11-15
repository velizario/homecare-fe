import { Box, Grid, Image, Text, Button, Stack, Tag, GridItem, HStack, Icon, textDecoration, Container, Flex, Link } from "@chakra-ui/react";
import Ratings from "../../utils/Ratings";
import { TbMessageCircle,  } from 'react-icons/tb'
import { AiOutlineInstagram } from 'react-icons/ai'
import { GrFacebookOption } from 'react-icons/gr'
import { CiGlobe } from 'react-icons/ci'
import messageicon  from "../../resources/messageicon.svg"




const ProfileFull:React.FC = ( ) => {
    return (
        <Box p='4'>
            <Box overflow='hidden' h='md' borderRadius='md' mb='-16'>
                <Image src='https://storage.ws.pho.to/s2/f607aa4c6a291a39cc8c654481fe72568435da6c_m.jpg' w='100%' objectFit='cover' objectPosition='50% 0%' cursor='pointer'></Image>
            </Box>
            <Box position='relative' mx='4' mb='14' p='6' borderRadius='xl' boxShadow='lg' bg='white' border='1px solid lightgray'>
                <Flex justifyContent='space-between' mb='8' alignItems='center'>
                    <Text fontSize='xl' fontWeight='medium' >Велизар Максимов Стоянов</Text>
                    {/* <Image src={messageicon} alt="SVG as an image" h='10' cursor='pointer' p='1' borderRadius='lg' bg='blackAlpha.100' _hover={{boxShadow: 'md', transition: '0.2s ease all'}}></Image> */}
                    <Button size='md'  borderRadius='md' colorScheme='linkedin' w='min-content' boxShadow='md'>Пишете ми</Button>
                </Flex>

                <Grid gap='4' gridAutoFlow='column' mb='8'>
                    <GridItem textAlign='center'  paddingInline='8' borderRight='1px solid lightgray'>
                        <Text fontSize='xs' fontWeight='medium' color='gray.500' textTransform='uppercase' mb='1'>Клиенти</Text>
                        <Text fontSize='lg' color='gray.600' fontWeight='bold'>5</Text>
                    </GridItem>
                    <GridItem textAlign='center' paddingInline='8' borderRight='1px solid lightgray'>
                        <Text fontSize='xs' fontWeight='medium' color='gray.500' textTransform='uppercase' mb='1'>Посещения</Text>
                        <Text fontSize='lg' color='gray.600' fontWeight='bold'>19</Text>
                    </GridItem>
                    <GridItem textAlign='center' paddingInline='8'>
                        <Text fontSize='xs' fontWeight='medium' color='gray.500' textTransform='uppercase' mb='1'>Рейтинг</Text>
                        <Text fontSize='lg' color='gray.600' fontWeight='bold'>4,5</Text>
                    </GridItem>
                </Grid>

                <Text mb='6' fontSize='md'>Martí is a senior UI/UX designer based in New York. For the past several years, he's been designing digital products for the banking, hospitality, fashion, healthcare, pharmaceutical, automotive, and software industries.</Text>

                <Box display='flex' justifyContent='flex-start' mb='14'>
                    <HStack spacing='2' color='linkedin.700' >
                            <Icon cursor='pointer' as={GrFacebookOption}  h='9' w='9'  p='1.5' borderRadius='25%' bg='blackAlpha.50' _hover={{color: 'black'}}></Icon>
                            <Icon cursor='pointer' as={CiGlobe} h='9' w='9'  p='1.5' borderRadius='25%' bg='blackAlpha.50' _hover={{color: 'black'}}></Icon>
                            <Icon cursor='pointer' as={AiOutlineInstagram} h='9' w='9'  p='1.5' borderRadius='25%' bg='blackAlpha.50' _hover={{color: 'black'}}></Icon>
                    </HStack>
                </Box>
                {/* <Button size='md' w='52' minWidth='min-content' p='4' borderRadius='md' colorScheme='linkedin' boxShadow='md' mb='10'>Пишете ми</Button> */}

                
                <Box display='flex' rowGap='2' columnGap='2' flexWrap='wrap' mb='5'>
                    <Tag fontSize='2xs' whiteSpace='nowrap' bg='rgba(239, 229, 219, 0.8)' color='blackAlpha.900'>Абонаментна услуга</Tag>
                    <Tag fontSize='2xs' whiteSpace='nowrap' bg='blackAlpha.100' color='blackAlpha.500'>Еднократно посещение</Tag>
                </Box>
                
                <Box display='flex' rowGap='2' columnGap='2' flexWrap='wrap'>
                    <Tag fontSize='2xs' whiteSpace='nowrap' bg='rgba(239, 229, 219, 0.8)' color='blackAlpha.900'>Гладене</Tag>
                    <Tag fontSize='2xs' whiteSpace='nowrap' bg='rgba(239, 229, 219, 0.8)' color='blackAlpha.900'>Прозорци</Tag>
                    <Tag fontSize='2xs' whiteSpace='nowrap' bg='blackAlpha.100' color='blackAlpha.500'>Миене на печка</Tag>
                    <Tag fontSize='2xs' whiteSpace='nowrap' bg='rgba(239, 229, 219, 0.8)' color='blackAlpha.900'>Миене на хладилник</Tag>
                </Box>
            </Box>

            <Box>
                
                <Box mb='2' display='flex' alignItems='center' gap='2' alignSelf='center'>
                    <Text fontSize='lg' fontWeight='bold'>Ревюта от клиенти (2)</Text>
                    <Ratings size="6"></Ratings>
                </Box>

                <Box borderTop='1px solid rgba(230,230,230)' py='10' >
                    <Box mb='2'>
                        <Box position='relative' left='-1' mb='1'>
                            <Ratings size='6'></Ratings>
                        </Box>
                        <Text fontSize='md'>For me the best digital helper on fiverr. Super professionell and also very fast. Looking forward for the next website project!</Text>
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
                        <Text fontSize='md'>For me the best digital helper on fiverr. Super professionell and also very fast. Looking forward for the next website project!</Text>
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
                        <Text fontSize='md'>For me the best digital helper on fiverr. Super professionell and also very fast. Looking forward for the next website project!</Text>
                    </Box>
                    <Box display='flex' gap='4' alignItems='center'>
                        <Box overflow='hidden' w='3rem' h='3rem' borderRadius='full'>
                            <Image src='https://storage.ws.pho.to/s2/f607aa4c6a291a39cc8c654481fe72568435da6c_m.jpg' w='100%' h='100%' objectFit='cover' objectPosition='50% 0%' cursor='pointer'></Image>
                        </Box>
                        <Text fontSize='sm' color='gray.600' textDecor='underline' cursor='pointer' transition= 'all 0.2s ease-in-out' _hover={{color:'gray.400'}}>Marti Bruno</Text>
                        <Text fontSize='sm' color='gray.600'>4 days ago</Text>
                    </Box>   
                </Box>
                
            </Box>
        </Box>
    );
}

export default ProfileFull;
