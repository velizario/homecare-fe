import { Box, Container, Flex, Heading, Image, NumberInput, Text } from "@chakra-ui/react";
import ButtonRoute from "../../utils/ButtonRoute";
import NumberInputElement from "../bookcleaning/helpers/NumberInputElement";

const Hero : React.FC = () => {

    return (
    <Container  h='46rem' maxW='full' mb='36' position='relative' p='0' backgroundImage='linear-gradient(to right, rgba(255,255,255,1),rgba(200,200,200,0.2),rgba(0,0,0,0))'>
        <Image src='/resources/hero.jpg' position='absolute' h='full' w='full' zIndex='-5' objectFit='cover' objectPosition='left 20%'></Image>
        <Container display='flex' h='100%' justifyContent='flex-start' alignItems='center'>
            <Box maxW='44rem'>
                <Heading as='h1' size='2xl' color='blue.900' fontWeight='black' textTransform='uppercase'>Щастливи служители =<br></br> Щастливи клиенти</Heading>
                <Text color='blue.900' fontSize='xl' pt='6' letterSpacing='tight' fontWeight='semibold'>Професионалните домашни помощници на Freska са обучени, наети и осигурени. С други думи, те имат реална работа! Проверете кога нашите доверени домашни помощници са налични във вашия район.</Text>
                <Flex mt='6' h='20' position='relative'>
                    <NumberInput bg='white' rounded='100' display='flex' w='33%' borderTopRightRadius='0' borderBottomRightRadius='0' >
                        <NumberInputElement bg='transparent' zIndex='5' letterSpacing='widest' minH='100%' placeholder="Площ" _placeholder={{fontSize: 'lg'}} fontSize='xl' rounded='100' borderTopRightRadius='0' borderBottomRightRadius='0' />
                        <Box position= 'absolute' alignSelf='center' verticalAlign='center' right='3%'>
                            <Text color='gray.500' fontSize='xl' userSelect='none'>m²</Text>
                        </Box>
                    </NumberInput>
                    <NumberInput bg='white' rounded='100' display='flex' w='66%' position='relative' left='1px' >
                        <NumberInputElement letterSpacing='widest' minH='100%' placeholder="Пощенски код" _placeholder={{fontSize: 'lg'}} fontSize='xl' rounded='100' borderTopLeftRadius='0' borderBottomLeftRadius='0'/>
                    </NumberInput>
                    <ButtonRoute position='absolute' right='4' top='2' bottom='2' h='auto' rounded='100' maxW='30%'>Намери помощница</ButtonRoute>       
                </Flex>  
                <Text color='blue.900' fontSize='sm' pt='6' letterSpacing='tight' fontWeight='medium'>✔️ Социално отговорно домашно почистване ✔️ Екологично съобразени ✔️ Необвързващи договорености ✔️ 100% гарантирано качество ✔️ Лесно резервиране на час онлайн</Text>
            </Box>
        </Container>
    </Container>
    )
}
export default Hero;