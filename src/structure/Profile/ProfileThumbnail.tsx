import { Box, Grid, Image, Text, Button, Stack, Tag, GridItem, HStack, Icon, textDecoration } from "@chakra-ui/react";
import { RiStarSLine, RiStarSFill, RiStarHalfSLine } from 'react-icons/ri'
import Ratings from "../../utils/Ratings";

const ProfileThumbnail:React.FC = () => {
    return (
        <Box minW='0' w="100%" h='xs' p='6' border='1px solid lightgray' borderRadius='sm' background='rgba(240, 241, 244, 0.7)' _hover={{boxShadow:'0 7px 15px 0 rgba(0,0,0,.1)', transition: '0.1s all ease'}}>
            <Grid templateColumns='repeat(3, 1fr)' templateRows={'4fr 1fr'} columnGap={4} rowGap='4' height='100%'>
                <GridItem colSpan={1} minH='0' h='100%' >
                    <Box overflow='hidden' maxH='100%' borderRadius='md'>
                        <Image src='https://storage.ws.pho.to/s2/f607aa4c6a291a39cc8c654481fe72568435da6c_m.jpg'  w='100%' objectFit='cover' objectPosition='50% 0%' cursor='pointer'></Image>
                    </Box>
                </GridItem>
                <GridItem colSpan={2}>
                    <Box display='flex' justifyContent='space-between'>
                        <Box>
                            <Text fontSize='lg' fontWeight='medium' mb='1' color='#1f57c3' cursor='pointer' _hover={{textDecoration:'underline'}}>Marti Bruno</Text>
                            <Text fontSize='sm' mb='6'>Член от януари 2022</Text>
                        </Box>
                        <Button size='sm' borderRadius='2xl' colorScheme='linkedin'>Пиши на Marti</Button>
                    </Box>
                    <Text mb='6' fontSize='sm'>Martí is a senior UI/UX designer based in New York. For the past several years, he's been designing digital products for the banking, hospitality, fashion, healthcare, pharmaceutical, automotive, and software industries.</Text>
                </GridItem>
                <GridItem>
                    <Ratings></Ratings>
                    <Text textAlign='center' fontSize='sm' fontWeight='medium' position='relative' color='#1f57c3' cursor='pointer' _hover={{textDecoration:'underline'}}>25 изпълнени услуги</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Box display='flex' rowGap='2' columnGap='2' flexWrap='wrap' justifyContent='flex-start'>
                        <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Гладене</Tag>
                        <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Прозорци</Tag>
                        <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Абонаментна услуга</Tag>
                        <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Еднократно посещение</Tag>
                        <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Миене на печка</Tag>
                        <Tag fontSize='2xs' whiteSpace='nowrap' colorScheme='blackAlpha'>Миене на хладилник</Tag>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default ProfileThumbnail;