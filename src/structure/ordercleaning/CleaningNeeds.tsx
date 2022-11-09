import { Box, Container, Heading, NumberInput, NumberInputField, Text, Image, Icon } from "@chakra-ui/react";
import { MouseEventHandler, useState } from "react";
import { Radio, RadioGroup } from '@chakra-ui/react'
import OrderItem from "./OrderItem";
import { RiFridgeLine } from "react-icons/ri"
import { MdOutlineIron } from "react-icons/md"
import { FaCheckCircle } from "react-icons/fa"
import ovenIcon  from "../../resources/ovenIcon.svg"


const CleaningNeeds :React.FC = () => {
    const [schedule, setSchedule] = useState(0);
    const [services, setServices] = useState({fridge: 0, oven: 0, ironing: 0});

    const chooseSchedule:MouseEventHandler<HTMLDivElement> = (event) => {
        console.log('schedule set to', event.currentTarget)
        setSchedule(Number(event.currentTarget.dataset.id));
    }

    const chooseServices:MouseEventHandler<HTMLDivElement> = (event) => {
        const serviceName = event.currentTarget.dataset.id as 'oven' | 'ironing' | 'fridge';
        setServices(services => {
            return {...services, [serviceName] : 1 - services[serviceName]}
        });
    }

    return (
        
        <Container maxW='2xl' py='12' px='24' bg='white' display='flex' alignItems='center' flexDirection='column' borderRadius='2xl' boxShadow='rgb(0 5 82 / 8%) 0px 7px 14px 0px'>
            <Heading mb='8' fontSize='3xl' fontWeight='bold' textAlign='center'>Tell us about your cleaning needs</Heading>
            <Text fontSize='xs' textTransform='uppercase' mb='4' fontWeight='bold' letterSpacing='0.05rem'>Apartment size</Text>
            <NumberInput w='full' mb='10'>
                <Box position='relative' w='full' display='flex' alignItems='center' justifyContent='center'>
                    <NumberInputField h='14' bg='transparent' zIndex='5' letterSpacing='widest' minH='100%'fontSize='xl' />
                    <Text color='gray.500' fontSize='lg' userSelect='none' position= 'absolute' right='3%'>m²</Text>
                </Box>
            </NumberInput>
            <Text fontSize='xs' textTransform='uppercase' mb='3' fontWeight='bold' letterSpacing='0.05rem'>How often should we clean?</Text>
            <Text mb='6'>With Freska you will get a regular cleaner!</Text>
            <OrderItem dataId='1' active={schedule===1} onClick={chooseSchedule} >
               <Text fontSize='lg' fontWeight={schedule === 1 ? 'bolder' : 'normal'}>Every week</Text>                 
               <Text fontSize='lg' fontWeight='bolder'>469 kr/h</Text>
            </OrderItem>
            <OrderItem dataId='2' active={schedule==2} onClick={chooseSchedule} >
               <Text fontSize='lg' fontWeight={schedule === 2 ? 'bolder' : 'normal'}>Every second week</Text>                 
               <Text fontSize='lg' fontWeight='bolder'>469 kr/h</Text>
            </OrderItem>
            <OrderItem dataId='3' active={schedule===3} onClick={chooseSchedule} >
               <Text fontSize='lg' fontWeight={schedule === 3 ? 'bolder' : 'normal'}>Every fourth week</Text>                 
               <Text fontSize='lg' fontWeight='bolder'>469 kr/h</Text>
            </OrderItem>

            <Box>
                <RadioGroup my='4' alignSelf='flex-start'  data-id='4' onChange={() => {setSchedule(4)}} value={schedule.toString()}>
                    <Radio value="4">
                        <Text fontSize='lg'> One time only (559 kr/h)</Text>
                    </Radio>
                </RadioGroup>
                <Text fontSize='md'>We recommend recurring cleaning. With recurring cleaning we can book you the same cleaner every time.</Text>
            </Box>
            <Box mt='10' w='full' display='flex' flexDir='column' alignItems='center'>
                <Text fontSize='xs' textTransform='uppercase' fontWeight='bolder' mb='6'>Additional services</Text>
                <OrderItem dataId='fridge' active={services.fridge === 1} onClick={chooseServices} >
                    <Box>
                        <Text fontSize='lg' fontWeight={services.fridge === 1 ? 'bolder' : 'normal'}>Fridge</Text>
                        <Text fontSize='sm' color='gray.400'>+30 min</Text>                 
                    </Box>
                    <Box position='relative' p='2.5' borderRadius='xl' bg='cyan.100' display='flex'>
                        <Icon as={RiFridgeLine} h='12' w='12'></Icon>
                        <Icon position='absolute' right='-2' top='-2' visibility={services.fridge === 1 ? 'visible' : 'hidden'} as={FaCheckCircle} h='6' w='6' bg='white' borderRadius='50%'></Icon>
                    </Box>
                </OrderItem>

                <OrderItem dataId='oven' active={services.oven === 1} onClick={chooseServices} >
                    <Box>
                        <Text fontSize='lg' fontWeight={services.oven === 1 ? 'bolder' : 'normal'}>Oven</Text>
                        <Text fontSize='sm' color='gray.400'>+30 min</Text>                 
                    </Box>                
                    <Box position='relative' p='2.5' borderRadius='xl' bg='cyan.100' display='flex'>
                        <Image src={ovenIcon} alt="SVG as an image" h='12'></Image>
                        <Icon position='absolute' right='-2' top='-2' visibility={services.oven === 1 ? 'visible' : 'hidden'} as={FaCheckCircle} h='6' w='6' bg='white' borderRadius='50%'></Icon>
                    </Box>
                </OrderItem>

                <OrderItem dataId='ironing' active={services.ironing === 1} onClick={chooseServices} >
                    <Box>
                        <Text fontSize='lg' fontWeight={services.ironing === 1 ? 'bolder' : 'normal'}>Ironing</Text>
                        <Text fontSize='sm' color='gray.400'>+30 min</Text>                 
                    </Box>               
                    <Box position='relative' p='2.5' borderRadius='xl' bg='cyan.100' display='flex'>
                        <Icon as={MdOutlineIron} h='12' w='12'></Icon>
                        <Icon position='absolute' right='-2' top='-2' visibility={services.ironing === 1 ? 'visible' : 'hidden'} as={FaCheckCircle} h='6' w='6' bg='white' borderRadius='50%'></Icon>
                    </Box>
                </OrderItem>
            </Box>
        </Container>
    )
}

export default CleaningNeeds;