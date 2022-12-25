import { Box, Container, Heading,  Text, Icon, Flex, SlideFade, Checkbox, Tooltip, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Radio, RadioGroup } from '@chakra-ui/react'
import "react-datepicker/dist/react-datepicker.css";
import { FaCheckCircle } from "react-icons/fa"
import { GrCircleInformation } from "react-icons/gr"
import { BiChevronDown } from "react-icons/bi"
import OrderItem from "../ordercleaning/OrderItem";
import { GoCalendar } from "react-icons/go";
import { DateBefore, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import startOfTomorrow from 'date-fns/startOfTomorrow'
import { format } from 'date-fns'
import { bg } from 'date-fns/locale'
import Dropdown from "../../utils/Dropdown";
import { OptionBase } from "chakra-react-select";
import InputElement from "./helpers/InputElement";
import OrderHeading from "./helpers/OrderHeading";
import OrderLabel from "./helpers/OrderLabel";
import { Controller, useForm, UseFormWatch } from "react-hook-form";
import { BookingFormArgs, CleaningServicesKeys } from "../../utils/AppTypes";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import ButtonRoute from "../../utils/ButtonRoute";
import { cleaningVariations, visitRecurrences } from "../../store/staticData";
import bookCleaningStore, { formDefaults } from "../../store/bookCleaningStore";
import shallow from 'zustand/shallow'
import styles from './CleaningRequirements.module.css'
import { useNavigate } from "react-router-dom";
import BoxSelectionSet from "./BoxSelectionSet";

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

  const getHourObject = (findHour: string)=> {
   return hours.find(hour => hour.value === findHour)
  }

  const groupedOptions =  [
    {label : "Преди обяд", options: hours}
  ]

// form logic
  const schema = yup.object({
    cleaningArea: yup.number().required("Въведете площ").typeError("Въведете площ").max(500, "Въведохте твърде голяма площ").positive("Въведете коректна площ"),
    date: yup.date().required("Въведете дата"),
    hour: yup.string().required("Въведете час"),
    viberContactEnabled: yup.string(),
    firstName: yup.string().required("Въведете име"),
    lastName: yup.string().required("Въведете фамилия"),
    phone: yup.number().positive().integer().required("Въведете номер").typeError("Въведете номер"),
    address: yup.string().required("Въведете адрес"),
    frequency: yup.string().required("Въведете честота на посещенията"),
    cleaningServices: yup.object().shape({
        standard: yup.boolean(),
        fridge: yup.boolean(),
        oven: yup.boolean(),
        ironing: yup.boolean(),
    }).test(
        'at-least-one-property-is-true',
        "Изберете вид почистване",
        (value) => Object.values(value).includes(true),
    ),
    }).required()

const CleaningRequirements :React.FC = () => {

    // UserBasicInfoimmer for object copy or implement get in the state.... fuck
    const { services } = bookCleaningStore(state => ({services: state.cleaningServices}), shallow)
    const getService = bookCleaningStore (state => state.getService)
    const setFrequency = bookCleaningStore (state => state.setFrequency)
    const selectedFrequency = bookCleaningStore (state => state.frequency)
    const selectedDate = bookCleaningStore (state => state.date)
    const selectedServices = bookCleaningStore(state => state.cleaningServices)

    const [datePickerIsVisible, setDatePickerIsVisible] = useState(false);

    const navigate = useNavigate();

    let tomorrow = startOfTomorrow();
    const beforeMatcher: DateBefore = { before: tomorrow};

    const toggleDatePicker = () => {
        setDatePickerIsVisible(currentValue => !currentValue);
    }

    // Form logic
    const { register, watch, handleSubmit, control, formState: {errors, isValid}} = useForm<BookingFormArgs>({
        mode: 'onChange',
        defaultValues: formDefaults,
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        // Subscribe to watch every registered field in the form and invoke a callback function userStore.setState to update the state
        const subscription = watch((data, { name }) => (name && bookCleaningStore.setState((state) =>  {
            return {[name] : data[name as keyof BookingFormArgs]};
        }, false)));
        return () => subscription.unsubscribe();
      }, []);


    return (
        <Container maxW='xl' py='6' px='10' bg='white' display='flex' alignItems='center' flexDirection='column' borderRadius='2xl' boxShadow='rgba(200,200,200,0.3) 0px 4px 10px -0px'>
        <form onSubmit={handleSubmit(() => navigate("/orderplaced"))}>
            <>{console.log(errors)}</>
            <Flex mb='7' alignItems='center' justifyContent='center'>
                <Icon cursor='pointer' as={GoCalendar} h='7' w='7' mr='3'></Icon>
                <Heading fontSize='2xl' fontWeight='normal' textAlign='center' >Поръчай почистване</Heading>
            </Flex>
            <OrderHeading>Размер на дома / офиса</OrderHeading>
            <InputElement control={control} {...register("cleaningArea")}  placeholder='Въведете площ...' >
                <Text color='gray.500' fontSize='lg' userSelect='none' position= 'absolute' right='3%'>m²</Text>
            </InputElement>
            <OrderHeading mt='10'>Колко често ще са посещенията?</OrderHeading>
            <BoxSelectionSet<BookingFormArgs>
                // TODO use register instead of control. How about that!!!!
                register={register}
                getPropertyState = {getService}
                changeHandler= {(property, newValue: any) => setFrequency(name)}
                selectionVariation=: {name: "cleaningServices", id: number, selectable: boolean}[]
                name= "cleaningServices"
            />
            {/* <Controller control={control}
                name="frequency"
                render={({ field: { onChange, value } }) => (
                    <FormControl isInvalid={errors["frequency"] ? true : false}>
                        <RadioGroup className={styles.radioSelections} onChange={(e) => {console.log(e); onChange(e)}} value={value}>
                            {visitRecurrences.map(recurrence => {
                                return (
                                <Radio
                                    isFocusable={false} 
                                    key={recurrence.name} 
                                    value={recurrence.name}
                                    data-id={recurrence.id}>
                                        <OrderItem key={recurrence.name} data-id={recurrence.id} data-name={recurrence.name} active={selectedFrequency===recurrence.name} selectable={recurrence.selectable} onClick={recurrence.selectable ? () => setFrequency(recurrence.name) : undefined} >
                                            <Text fontSize='md' fontWeight={selectedFrequency === recurrence.name ? 'bold' : 'normal'}>{recurrence.label}</Text>                 
                                            <Text fontSize='md' fontWeight={selectedFrequency === recurrence.name ? 'bold' : 'normal'}>{recurrence.price}</Text>
                                        </OrderItem>
                                </Radio>)
                            })}
                        </RadioGroup>
                        <FormErrorMessage mt='0'>
                            {errors["frequency"]?.message}
                        </FormErrorMessage>
                    </FormControl>
                )}
            /> */}

            <OrderHeading mt='10'>Каква услуга желаете?</OrderHeading>
            <Controller 
                control={control}
                name="cleaningServices"
                render={({field: {onChange, value}}) => (
                    <FormControl isInvalid={errors["cleaningServices"] ? true : false}>
                        {cleaningVariations.map(cleaningType => {
                        return (
                        <OrderItem 
                            key={cleaningType.name} 
                            data-id={cleaningType.id} 
                            data-name={cleaningType.name} 
                            active={getService(cleaningType.name) || false} 
                            selectable={cleaningType.selectable} 
                            onClick={cleaningType.selectable ? () =>  {onChange({...selectedServices , [cleaningType.name] : !selectedServices[cleaningType.name]})} : undefined}>
                            <Box>
                                <Text fontSize='md' fontWeight={selectedServices[cleaningType.name] ? 'bold' : 'normal'}>{cleaningType.label}</Text>
                                <Text fontSize='sm' color='gray.400'>{cleaningType.time}</Text>                 
                            </Box>
                            <Box position='relative' p='2.5' borderRadius='xl' bg='cyan.100' display='flex'>
                                <Icon as={cleaningType.icon} h='12' w='12'></Icon>
                                <Icon position='absolute' right='-2' top='-1' visibility={getService(cleaningType.name) ? 'visible' : 'hidden'} as={FaCheckCircle} h='6' w='6' bg='white' borderRadius='50%'></Icon>
                            </Box>
                        </OrderItem>)}
                        )}
                        <FormErrorMessage mt='0'>
                            {errors["cleaningServices"]?.message}
                        </FormErrorMessage>
                    </FormControl>
                )}
            />
            <Flex alignItems="center" mt='10' mb="4" justifyContent="space-between">
                <OrderHeading p="0" m="0" textAlign="center">Кога ще почистваме?</OrderHeading>
                <ButtonRoute size="sm" variant="ghost">Искам повече опции</ButtonRoute>            
            </Flex>
                <Box w='full' display='flex'  flexDir='column'>
                    <Box position='relative' mb='6' w='100%' >
                        <OrderLabel>Дата:</OrderLabel>
                        <Flex onClick={toggleDatePicker} alignItems='center' justifyContent='center' h='14' px='2'  py='3' borderRadius='lg' border={`${errors["date"] ? "2px solid red" : selectedDate ? '1px solid #26a0f7' : '1px solid lightgray'}`} /* boxShadow='rgba(200,200,200,0.3) 0px 4px 10px' */ cursor='pointer'>
                            <Flex w='100%' alignItems='center' color={`${selectedDate ? "black" : "gray.600"}`} justifyContent='space-between' px='1' fontSize='sm'>
                                <Flex alignItems='center' fontSize='md' letterSpacing={0.2}>
                                    <Icon cursor='pointer' as={GoCalendar} h='5' w='5' mr='2'></Icon>
                                    {selectedDate ? `${format(selectedDate,'d MMMM y (EEEE)', { locale: bg } )}` : <Text fontSize='sm'>Изберете дата</Text>}
                                </Flex>
                                <Icon color='gray.500' cursor='pointer' as={BiChevronDown} h='5' w='5' ></Icon>
                            </Flex>
                        </Flex>
                        <Box position='absolute' visibility={datePickerIsVisible ? 'visible' : 'hidden'} zIndex='100' transform='translateY(5px)' >
                            <SlideFade in={datePickerIsVisible} offsetY='-10px' >
                                    <Controller
                                        control={control}
                                        name="date"
                                        render={({ field: { onChange, value } }) => (
                                            <Box border={errors["date"] ? "1px solid red" : '1px solid rgb(220,220,220)'} bg='white' p='4' borderRadius='md' boxShadow='rgb(0 5 82 / 10%) 0px 4px 10px -0px' mt='1'>
                                                <DayPicker
                                                mode="single"
                                                selected={value}
                                                onSelect={onChange}
                                                onDayClick={toggleDatePicker}
                                                weekStartsOn={1}
                                                disabled={beforeMatcher}
                                                />
                                            </Box>
                                        )}
                                    />
                            </SlideFade>
                        </Box>
                    </Box>
                    <Box letterSpacing={0.2} w='100%'  mb='2'>
                        <OrderLabel>Час:</OrderLabel>
                        <Controller
                            control={control}
                            name="hour"
                            render={({ field: { onChange, value } }) => (
                                <Dropdown  
                                    value={getHourObject(value)}
                                    onChange={(hour) => onChange(hour?.value)} 
                                    border={`${errors["hour"] ? "2px solid red" : value ? '1px solid #26a0f7' : '1px solid lightgray'}`} 
                                    height='14' 
                                    dropdownName='color' 
                                    placeholderValue="Изберете час" 
                                    groupedOptions={groupedOptions}
                                />
                            )}
                        />
                    </Box>
                <Flex my='0' w='full' cursor='context-menu'> 
                    <Tooltip hasArrow={true} placement='top' arrowSize={12} p='4'  borderRadius='md' border='1px solid lightgray' fontSize='sm' fontWeight='normal' color='gray.700' bg='white' label='При периодични посещения, избраният ден от седмицата и месеца определят графика на посещения спрямо избраната честота.'>
                        <Text  display='flex' alignItems='center' gap='1' fontSize='sm' fontStyle='italic' as='span'><Icon as={GrCircleInformation} h='4' w='4'></Icon>Как се формира графикът на посещения?</Text>
                    </Tooltip>
                </Flex>
            </Box>

            <OrderHeading mt='10'>При кого ще почистваме?</OrderHeading>
            <Box w='full' display='flex' flexDir='column'>
                <Flex gap='2'>
                    <InputElement<BookingFormArgs> control={control} {...register("firstName")} label="Име:" placeholder='Име...' ></InputElement>
                    <InputElement<BookingFormArgs> control={control} {...register("lastName")} label="Фамилия:" placeholder='Фамилия...' ></InputElement>
                </Flex>
                <InputElement<BookingFormArgs> control={control} {...register("address")} label="Адрес: (улица/блок, номер, вход, етаж, апартамент)" placeholder='Въведете адрес...' ></InputElement>
                <InputElement<BookingFormArgs> control={control} {...register("phone")} label="Телефонен номер:" placeholder='Въведете номер...' ></InputElement>
            </Box>
            
            {/* viberContact */}
            <Flex w='full' mb='10' mt='1'>
                <Controller 
                    control={control}
                    name='viberContactEnabled'
                    render={({ field: { onChange, value } }) => (
                    <Checkbox onChange={onChange} checked={value} size='md' whiteSpace='nowrap'><Text fontSize='sm' position='relative' left='-0.5'>Информирайте ме за статуса на заявката и по вайбър</Text></Checkbox>
                    )}
                />
            </Flex>
            <ButtonRoute type="submit" size='lg' mb='2' borderRadius='3xl' w='full' boxShadow='md'>Изпрати заявка</ButtonRoute>
            <FormControl isInvalid={!isValid}>
            <FormErrorMessage mt='0'>
                {Object.keys(errors).length > 0 && "Попълнете всички полета"}
            </FormErrorMessage>
            </FormControl>
            <Flex my='3' mt='0' w='full' cursor='context-menu'> 
                <Tooltip hasArrow={true} placement='top' arrowSize={12} p='4'  borderRadius='md' border='1px solid lightgray' fontSize='sm' fontWeight='normal' color='gray.700' bg='white' label='Доставчикът на услугата има един ден да се свърже с Вас за да потвърди или да уточните детайлите по услугата. Ако не получите отговор, заявката ще бъде анулирана и доставчикът ще получи негативна оценка. Ако не се стигне до изпълнение на услугата, имате право на оценка и коментар относно комуникацията с доставчика и основанието за отказване. Това се прави с цел да се осигури високо качество на услугата и бързи отговори на запитванията.'>
                    <Text  display='flex' alignItems='center' gap='1' fontSize='sm' fontStyle='italic' as='span'><Icon as={GrCircleInformation} h='4' w='4'></Icon>Как се обработват заявките?</Text>
                </Tooltip>
            </Flex>
        </form>
        </Container>
    )
}

export default CleaningRequirements;