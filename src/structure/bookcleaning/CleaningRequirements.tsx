import { Box, Container, Heading, NumberInput, NumberInputField, Text, Image, Icon, Flex, Button, SlideFade } from "@chakra-ui/react";
import { MouseEventHandler, useState } from "react";
import { Radio, RadioGroup } from '@chakra-ui/react'
import "react-datepicker/dist/react-datepicker.css";
import { RiFridgeLine } from "react-icons/ri"
import { MdOutlineIron } from "react-icons/md"
import { FaCheckCircle } from "react-icons/fa"
import { BsChevronDown } from "react-icons/bs"
import { BiChevronDown } from "react-icons/bi"
import ovenIcon  from "../../resources/ovenIcon.svg"
import OrderItem from "../ordercleaning/OrderItem";
import { GoCalendar } from "react-icons/go";
import { WiTime3 } from "react-icons/wi";
import { VscListOrdered } from "react-icons/vsc";
import { DateBefore, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import startOfTomorrow from 'date-fns/startOfTomorrow'
import { format } from 'date-fns'
import { bg } from 'date-fns/locale'
import Dropdown from "../../utils/Dropdown";
import { ActionMeta, MultiValue, OptionBase, SingleValue } from "chakra-react-select";
import AddressForm from "./AddressForm";


type DatePickerButtonType = {
    value?: React.ReactNode
    onClick?: () => void;
    placeholderText?: string;
}


export interface Hours extends OptionBase {
    value: string;
    label: string;
}


const hours:Hours[] = [
    { value: "08:00", label: "08:00" },
    { value: "08:30", label: "08:30" },
    { value: "09:00", label: "09:00" },
    { value: "10:30", label: "10:30" },
  ];

  const groupedOptions =  [
    {label : "Преди обяд", options: hours}
  ]

const CleaningNeeds :React.FC = () => {
    const [schedule, setSchedule] = useState(0);
    const [services, setServices] = useState({standard: 1, fridge: 0, oven: 0, ironing: 0});
    const [selected, setSelected] = useState<Date>();
    const [selectedHour, setSelectedHour] = useState<SingleValue<Hours> | MultiValue<Hours>>();
    const [datePickerIsVisible, setDatePickerIsVisible] = useState(false);

    let tomorrow = startOfTomorrow();
    const beforeMatcher: DateBefore = { before: tomorrow};

    const toggleDatePicker = () => {
        setDatePickerIsVisible(currentValue => !currentValue);
    }

    const handleHourChange = (newValue: Hours | null, actionMeta: ActionMeta<Hours>) => {
        const adjustedValue = newValue as Hours;
        setSelectedHour({...adjustedValue, label: `${adjustedValue.label} часа`})
    }

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

    const locale = {
        code: 'en',
        
    }

    return (
        <Container maxW='lg' py='6' px='10' bg='white' display='flex' alignItems='center' flexDirection='column' borderRadius='2xl' boxShadow='rgba(200,200,200,0.3) 0px 4px 10px -0px'>
            <Flex mb='7' alignItems='center' justifyContent='center'>
                <Icon cursor='pointer' as={GoCalendar} h='7' w='7' mr='3'></Icon>
                <Heading fontSize='xl' fontWeight='medium' textAlign='center' >Поръчай почистване</Heading>
            </Flex>
            <Text fontSize='xs' mb='4' textTransform='uppercase' fontWeight='medium' alignSelf='flex-start'>Размер на дома / офиса</Text>
            <NumberInput w='full' mb='10'>
                <Box position='relative' w='full' display='flex' alignItems='center' justifyContent='center'>
                    <NumberInputField h='14' bg='transparent' zIndex='5' letterSpacing='widest' minH='100%'fontSize='xl' />
                    <Text color='gray.500' fontSize='lg' userSelect='none' position= 'absolute' right='3%'>m²</Text>
                </Box>
            </NumberInput>
            <Text fontSize='xs' textTransform='uppercase' mb='4' fontWeight='medium'  alignSelf='flex-start'>Колко често ще са посещенията?</Text>
            <OrderItem dataId='1' active={schedule===1} onClick={chooseSchedule} >
               <Text fontSize='md' fontWeight={schedule === 1 ? 'medium' : 'normal'}>Всяка седмица</Text>                 
               <Text fontSize='md' fontWeight={schedule === 1 ? 'medium' : 'normal'}>469 kr/h</Text>
            </OrderItem>
            <OrderItem dataId='2' active={schedule==2} onClick={chooseSchedule} >
               <Text fontSize='md' fontWeight={schedule === 2 ? 'medium' : 'normal'}>Всяка втора седмица</Text>                 
               <Text fontSize='md' fontWeight={schedule === 2 ? 'medium' : 'normal'}>469 kr/h</Text>
            </OrderItem>
            <OrderItem dataId='3' active={schedule===3} onClick={chooseSchedule} >
               <Text fontSize='md' fontWeight={schedule === 3 ? 'medium' : 'normal'}>Всяка четвърта седмица</Text>                 
               <Text fontSize='md' fontWeight={schedule === 3 ? 'medium' : 'normal'}>469 kr/h</Text>
            </OrderItem>

            <RadioGroup mt='4' mb='2' alignSelf='flex-start'  data-id='4' onChange={() => {setSchedule(4)}} value={schedule.toString()}>
                <Radio value="4">
                    <Text fontSize='md' fontWeight={schedule === 4 ? 'medium' : 'normal'}> Еднократно (559 kr/h)</Text>
                </Radio>
            </RadioGroup>
            <Box mt='10' w='full' display='flex' flexDir='column' alignItems='center'>
                <Text fontSize='xs' textTransform='uppercase' fontWeight='medium' mb='4' alignSelf='flex-start'>Каква услуга желаете?</Text>
                <OrderItem dataId='standard' active={true}>
                    <Box>
                        <Text fontSize='md' fontWeight='medium'>Стандартно почистване</Text>
                        <Text fontSize='sm' color='gray.400'>+30 min</Text>                 
                    </Box>
                    <Box position='relative' p='2.5' borderRadius='xl' bg='cyan.100' display='flex'>
                        <Icon as={VscListOrdered} h='12' w='12'></Icon>
                        <Icon position='absolute' right='-2' top='-1' visibility={services.standard === 1 ? 'visible' : 'hidden'} as={FaCheckCircle} h='6' w='6' bg='white' borderRadius='50%'></Icon>
                    </Box>
                </OrderItem>
                <OrderItem dataId='fridge' active={services.fridge === 1} onClick={chooseServices} >
                    <Box>
                        <Text fontSize='md' fontWeight={services.fridge === 1 ? 'medium' : 'normal'}>Почистване на хладилник</Text>
                        <Text fontSize='sm' color='gray.400'>+30 min</Text>                 
                    </Box>
                    <Box position='relative' p='2.5' borderRadius='xl' bg='cyan.100' display='flex'>
                        <Icon as={RiFridgeLine} h='12' w='12'></Icon>
                        <Icon position='absolute' right='-2' top='-1' visibility={services.fridge === 1 ? 'visible' : 'hidden'} as={FaCheckCircle} h='6' w='6' bg='white' borderRadius='50%'></Icon>
                    </Box>
                </OrderItem>

                <OrderItem dataId='oven' active={services.oven === 1} onClick={chooseServices} >
                    <Box>
                        <Text fontSize='md' fontWeight={services.oven === 1 ? 'medium' : 'normal'}>Почистване на печка</Text>
                        <Text fontSize='sm' color='gray.400'>+30 min</Text>                 
                    </Box>                
                    <Box position='relative' p='2.5' borderRadius='xl' bg='cyan.100' display='flex'>
                        <Image src={ovenIcon} alt="SVG as an image" h='12'></Image>
                        <Icon position='absolute' right='-2' top='-1' visibility={services.oven === 1 ? 'visible' : 'hidden'} as={FaCheckCircle} h='6' w='6' bg='white' borderRadius='50%'></Icon>
                    </Box>
                </OrderItem>

                <OrderItem dataId='ironing' active={services.ironing === 1} onClick={chooseServices} >
                    <Box>
                        <Text fontSize='md' fontWeight={services.ironing === 1 ? 'medium' : 'normal'}>Гладене</Text>
                        <Text fontSize='sm' color='gray.400'>+30 min</Text>                 
                    </Box>               
                    <Box position='relative' p='2.5' borderRadius='xl' bg='cyan.100' display='flex'>
                        <Icon as={MdOutlineIron} h='12' w='12'></Icon>
                        <Icon position='absolute' right='-2' top='-1' visibility={services.ironing === 1 ? 'visible' : 'hidden'} as={FaCheckCircle} h='6' w='6' bg='white' borderRadius='50%'></Icon>
                    </Box>
                </OrderItem>
            </Box>
            <Box mt='10' w='full' display='flex'  flexDir='column' >
                <Text fontSize='xs' textTransform='uppercase' fontWeight='medium'  mb='2'>Кога ще почистваме?</Text>
                
                <Flex justifyContent='space-between' gap='2' mb='3'>
                    <Box w='65%' position='relative' minW='min-content'>
                            <Text fontSize='xs' mb='1' ml='1'>Дата</Text>
                        <Flex onClick={toggleDatePicker} alignItems='center' justifyContent='center' h='14' px='2'  py='3' borderRadius='lg' border={`1px solid ${selected ? '#26a0f7' : 'lightgray'}`} boxShadow='rgba(200,200,200,0.3) 0px 4px 10px' cursor='pointer'>
                            <Flex w='100%' alignItems='center' color={`${selected ? "black" : "gray.600"}`} justifyContent='space-between' px='1' fontSize='sm'>
                                <Flex alignItems='center'>
                                    <Icon cursor='pointer' as={GoCalendar} h='5' w='5' mr='2'></Icon>
                                    {selected ? `${format(selected,'EEEE, d MMMM y', { locale: bg } )}` : "Изберете дата"}
                                </Flex>
                                <Icon color='gray.500'   cursor='pointer' as={BiChevronDown} h='5' w='5' ></Icon>
                            </Flex>
                        </Flex>
                        <Box position='absolute' visibility={datePickerIsVisible ? 'visible' : 'hidden'} zIndex='1' transform='translateY(5px)'>
                            <SlideFade in={datePickerIsVisible} offsetY='-10px'>
                                <Box border='1px solid rgb(220,220,220)' bg='white' p='4'  borderRadius='md' boxShadow='rgb(0 5 82 / 10%) 0px 4px 10px -0px' mt='1'>
                                    <DayPicker
                                    mode="single"
                                    selected={selected}
                                    onSelect={setSelected}
                                    onDayClick={toggleDatePicker}
                                    weekStartsOn={1}
                                    disabled={beforeMatcher}
                                    />
                                </Box>
                            </SlideFade>
                        </Box>
                    </Box>
                    <Box w='35%' minW='min-content' >
                        <Text  fontWeight='' mb='1' ml='1' fontSize='xs'>Час</Text>
                        <Dropdown value={selectedHour} onChange={handleHourChange}  boxShadow='rgba(200,200,200,0.3) 0px 4px 10px' border={`1px solid ${selectedHour ? '#26a0f7' : 'lightgray'}`} height='14' dropdownName='color' placeholderValue="Изберете час" groupedOptions={groupedOptions}/>
                    </Box>
                </Flex>
                <Text fontSize='xs' fontStyle='italic' >При периодични посещения, датата индикира първоначалното посещение и денят от седмицата</Text>
            </Box>
            <AddressForm/>
        </Container>
    )
}

export default CleaningNeeds;