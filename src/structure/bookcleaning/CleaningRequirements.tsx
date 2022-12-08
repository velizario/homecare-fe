import { Box, Container, Heading,  Text, Image, Icon, Flex, SlideFade, Checkbox, Tooltip } from "@chakra-ui/react";
import { MouseEventHandler, useEffect, useState } from "react";
import { Radio, RadioGroup } from '@chakra-ui/react'
import "react-datepicker/dist/react-datepicker.css";
import { RiFridgeLine } from "react-icons/ri"
import { MdOutlineIron } from "react-icons/md"
import { FaCheckCircle } from "react-icons/fa"
import { GrCircleInformation } from "react-icons/gr"
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
import InputElement from "./helpers/InputElement";
import OrderHeading from "./helpers/OrderHeading";
import OrderLabel from "./helpers/OrderLabel";
import { useForm } from "react-hook-form";
import { CleaningServices, Client } from "../../utils/AppTypes";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import userStore from "../../store/userStore";
import ButtonRoute from "../../utils/ButtonRoute";
import { cleaningVariations, visitRecurrences } from "../../store/staticData";


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

// form logic
  const schema = yup.object({
    area: yup.number().required("Въведете площ").typeError("Въведете площ").max(500, "Въведохте твърде голяма площ").positive("Въведете коректна площ"),
    firstName: yup.string().required("Въведете име"),
    lastName: yup.string().required("Въведете фамилия"),
    phone: yup.number().positive().integer().required("Въведете номер").typeError("Въведете номер"),
    address: yup.string().required("Въведете адрес"),
    }).required()

const clientDefault = {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
}

const CleaningNeeds :React.FC = () => {
    const [schedule, setSchedule] = useState(0);
    const [services, setServices] = useState<{[key in CleaningServices]: number}>({standard: 1, fridge: 0, oven: 0, ironing: 0});
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

    // Not working!!!
    const chooseServices:MouseEventHandler<HTMLDivElement> = (event) => {
        const serviceName = event.currentTarget.dataset.name as CleaningServices;
        setServices(services => {
            return {...services, [serviceName] : 1 - services[serviceName]}
        });
    }

    


    // Form logic

    const { register, watch, handleSubmit, control} = useForm<Client>({
        mode: 'onChange',
        defaultValues: clientDefault,
        resolver: yupResolver(schema)
    });
 
    useEffect(() => {
        // Subscribe to watch every registered field in the form and invoke a callback function userStore.setState to update the state
        const subscription = watch((value, { name }) => userStore.setState(state => ({client: {...state.client, [name!] : value[name!]}}), false ));
        return () => subscription.unsubscribe();
      }, []);
  

    return (
        <Container maxW='lg' py='6' px='10' bg='white' display='flex' alignItems='center' flexDirection='column' borderRadius='2xl' boxShadow='rgba(200,200,200,0.3) 0px 4px 10px -0px'>
            <Flex mb='7' alignItems='center' justifyContent='center'>
                <Icon cursor='pointer' as={GoCalendar} h='7' w='7' mr='3'></Icon>
                <Heading fontSize='2xl' fontWeight='normal' textAlign='center' >Поръчай почистване</Heading>
            </Flex>
            <OrderHeading>Размер на дома / офиса</OrderHeading>
            <InputElement control={control} {...register("area")} placeholder='Въведете площ...' >
                <Text color='gray.500' fontSize='lg' userSelect='none' position= 'absolute' right='3%'>m²</Text>
            </InputElement>
            <OrderHeading>Колко често ще са посещенията?</OrderHeading>
            {visitRecurrences.map(recurrence => {
                return recurrence.name === "onetime" ? (
                    <RadioGroup mt='4' mb='2' alignSelf='flex-start'  data-id={recurrence.id} onChange={() => {setSchedule(recurrence.id)}} value={schedule.toString()}>
                        <Radio value="4">
                            <Text fontSize='md' fontWeight={schedule === 4 ? 'medium' : 'normal'}> {recurrence.label} ({recurrence.price})</Text>
                        </Radio>
                    </RadioGroup>
                ) : (
                    <OrderItem key={recurrence.id} data-id={recurrence.id} data-name={recurrence.name} active={schedule===recurrence.id} onClick={chooseSchedule} >
                        <Text fontSize='md' fontWeight={schedule === recurrence.id ? 'medium' : 'normal'}>{recurrence.label}</Text>                 
                        <Text fontSize='md' fontWeight={schedule === recurrence.id ? 'medium' : 'normal'}>{recurrence.price}</Text>
                    </OrderItem>
                )
            })}
            <OrderHeading mt='10'>Каква услуга желаете?</OrderHeading>
            {cleaningVariations.map(cleaningType => 
                (<OrderItem key={cleaningType.id} data-id={cleaningType.id} data-name={cleaningType.name} active={services[cleaningType.name] === cleaningType.id} onClick={chooseServices}>
                    <Box>
                        <Text fontSize='md' fontWeight='medium'>{cleaningType.label}</Text>
                        <Text fontSize='sm' color='gray.400'>{cleaningType.time}</Text>                 
                    </Box>
                    <Box position='relative' p='2.5' borderRadius='xl' bg='cyan.100' display='flex'>
                        <Icon as={VscListOrdered} h='12' w='12'></Icon>
                        <Icon position='absolute' right='-2' top='-1' visibility={services.standard === cleaningType.id ? 'visible' : 'hidden'} as={FaCheckCircle} h='6' w='6' bg='white' borderRadius='50%'></Icon>
                    </Box>
                </OrderItem>)
            )}
                {/* <OrderItem data-id='fridge' active={services.fridge === 1} onClick={chooseServices} >
                    <Box>
                        <Text fontSize='md' fontWeight={services.fridge === 1 ? 'medium' : 'normal'}>Почистване на хладилник</Text>
                        <Text fontSize='sm' color='gray.400'>+30 min</Text>                 
                    </Box>
                    <Box position='relative' p='2.5' borderRadius='xl' bg='cyan.100' display='flex'>
                        <Icon as={RiFridgeLine} h='12' w='12'></Icon>
                        <Icon position='absolute' right='-2' top='-1' visibility={services.fridge === 1 ? 'visible' : 'hidden'} as={FaCheckCircle} h='6' w='6' bg='white' borderRadius='50%'></Icon>
                    </Box>
                </OrderItem>

                <OrderItem data-id='oven' active={services.oven === 1} onClick={chooseServices} >
                    <Box>
                        <Text fontSize='md' fontWeight={services.oven === 1 ? 'medium' : 'normal'}>Почистване на печка</Text>
                        <Text fontSize='sm' color='gray.400'>+30 min</Text>                 
                    </Box>                
                    <Box position='relative' p='2.5' borderRadius='xl' bg='cyan.100' display='flex'>
                        <Image src={ovenIcon} alt="SVG as an image" h='12'></Image>
                        <Icon position='absolute' right='-2' top='-1' visibility={services.oven === 1 ? 'visible' : 'hidden'} as={FaCheckCircle} h='6' w='6' bg='white' borderRadius='50%'></Icon>
                    </Box>
                </OrderItem>

                <OrderItem data-id='ironing' active={services.ironing === 1} onClick={chooseServices} >
                    <Box>
                        <Text fontSize='md' fontWeight={services.ironing === 1 ? 'medium' : 'normal'}>Гладене</Text>
                        <Text fontSize='sm' color='gray.400'>+30 min</Text>                 
                    </Box>               
                    <Box position='relative' p='2.5' borderRadius='xl' bg='cyan.100' display='flex'>
                        <Icon as={MdOutlineIron} h='12' w='12'></Icon>
                        <Icon position='absolute' right='-2' top='-1' visibility={services.ironing === 1 ? 'visible' : 'hidden'} as={FaCheckCircle} h='6' w='6' bg='white' borderRadius='50%'></Icon>
                    </Box>
                </OrderItem> */}


            <Box mt='10' w='full' display='flex'  flexDir='column' >
                <OrderHeading>Кога ще почистваме?</OrderHeading>                
                    <Box position='relative' mb='6' w='100%' >
                        <OrderLabel>Дата:</OrderLabel>
                        <Flex onClick={toggleDatePicker} alignItems='center' justifyContent='center' h='14' px='2'  py='3' borderRadius='lg' border={`1px solid ${selected ? '#26a0f7' : 'lightgray'}`} /* boxShadow='rgba(200,200,200,0.3) 0px 4px 10px' */ cursor='pointer'>
                            <Flex w='100%' alignItems='center' color={`${selected ? "black" : "gray.600"}`} justifyContent='space-between' px='1' fontSize='sm'>
                                <Flex alignItems='center' fontSize='md' letterSpacing={0.2}>
                                    <Icon cursor='pointer' as={GoCalendar} h='5' w='5' mr='2'></Icon>
                                    {selected ? `${format(selected,'EEEE, d MMMM y', { locale: bg } )}` : <Text fontSize='sm'>Изберете дата</Text>}
                                </Flex>
                                <Icon color='gray.500' cursor='pointer' as={BiChevronDown} h='5' w='5' ></Icon>
                            </Flex>
                        </Flex>
                        <Box position='absolute' visibility={datePickerIsVisible ? 'visible' : 'hidden'} zIndex='100' transform='translateY(5px)' >
                            <SlideFade in={datePickerIsVisible} offsetY='-10px' >
                                <Box border='1px solid rgb(220,220,220)' bg='white' p='4' borderRadius='md' boxShadow='rgb(0 5 82 / 10%) 0px 4px 10px -0px' mt='1'>
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
                    <Box letterSpacing={0.2} w='100%'  mb='2'>
                        <OrderLabel>Час:</OrderLabel>
                        <Dropdown  value={selectedHour} onChange={handleHourChange} /* boxShadow='rgba(200,200,200,0.3) 0px 4px 10px' */ border={`1px solid ${selectedHour ? '#26a0f7' : 'lightgray'}`} height='14' dropdownName='color' placeholderValue="Изберете час" groupedOptions={groupedOptions}/>
                    </Box>
                <Flex my='0' w='full' cursor='context-menu'> 
                    <Tooltip hasArrow={true} placement='top' arrowSize={12} p='4'  borderRadius='md' border='1px solid lightgray' fontSize='sm' fontWeight='normal' color='gray.700' bg='white' label='При периодични посещения, избраният ден от седмицата и месеца определят графика на посещения спрямо избраната честота.'>
                        <Text  display='flex' alignItems='center' gap='1' fontSize='sm' fontStyle='italic' as='span'><Icon as={GrCircleInformation} h='4' w='4'></Icon>Как се формира графикът на посещения?</Text>
                    </Tooltip>
                </Flex>
            </Box>
            <Box mt='10' w='full' display='flex' flexDir='column'>
                <OrderHeading>При кого ще почистваме?</OrderHeading>
                <Flex gap='2'>
                    <InputElement control={control} {...register("firstName")} label="Име:" placeholder='Име...' ></InputElement>
                    <InputElement control={control} {...register("lastName")} label="Фамилия:" placeholder='Фамилия...' ></InputElement>
                </Flex>
                <InputElement control={control} {...register("address")} label="Адрес: (улица/блок, номер, вход, етаж, апартамент)" placeholder='Въведете адрес...' ></InputElement>
                <InputElement control={control} {...register("phone")} label="Телефонен номер:" placeholder='Въведете номер...' ></InputElement>
            </Box>
            <Flex w='full' mb='10' mt='1'>
                <Checkbox size='md' whiteSpace='nowrap'><Text fontSize='sm' position='relative' left='-0.5'>Информирайте ме за статуса на заявката и по вайбър</Text></Checkbox>
            </Flex>
            <ButtonRoute to='/orderplaced' size='lg' mb='2' borderRadius='3xl' w='full' boxShadow='md'>Изпрати заявка</ButtonRoute>
            <Flex my='3' mt='0' w='full' cursor='context-menu'> 
                <Tooltip hasArrow={true} placement='top' arrowSize={12} p='4'  borderRadius='md' border='1px solid lightgray' fontSize='sm' fontWeight='normal' color='gray.700' bg='white' label='Доставчикът на услугата има един ден да се свърже с Вас за да потвърди или да уточните детайлите по услугата. Ако не получите отговор, заявката ще бъде анулирана и доставчикът ще получи негативна оценка. Ако не се стигне до изпълнение на услугата, имате право на оценка и коментар относно комуникацията с доставчика и основанието за отказване. Това се прави с цел да се осигури високо качество на услугата и бързи отговори на запитванията.'>
                    <Text  display='flex' alignItems='center' gap='1' fontSize='sm' fontStyle='italic' as='span'><Icon as={GrCircleInformation} h='4' w='4'></Icon>Как се обработват заявките?</Text>
                </Tooltip>
            </Flex>
        </Container>
    )
}

export default CleaningNeeds;