import { Box, Checkbox, Container, FormControl, FormLabel, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react"
import { ChakraStylesConfig, Select } from "chakra-react-select";
import Dropdown, { PickerOptions } from "../../utils/Dropdown";

export const schedule = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const dayHours = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", 
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"
]



export const colorOptions:PickerOptions = [
    { value: "blue", label: "Blue", color: "#0052CC" },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630" },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" }
  ];

export const flavorOptions = [
{ value: "vanilla", label: "Vanilla", rating: "safe" },
{ value: "chocolate", label: "Chocolate", rating: "good" },
{ value: "strawberry", label: "Strawberry", rating: "wild" },
{ value: "salted-caramel", label: "Salted Caramel", rating: "crazy" }
];

export const groupedOptions = [
    {
      label: "Младост 1",
      options: colorOptions
    },
    {
      label: "Дружба",
      options: flavorOptions
    }
  ];

const chakraStyles: ChakraStylesConfig = {
dropdownIndicator: (provided, state) => ({
    ...provided,
    height: '14',
}),
};

const CleaningAgenda:React.FC = () => {
    return (<>
        <Container mb='8' maxW='2xl' py='12' px='24' bg='white' display='flex' alignItems='center' flexDirection='column' borderRadius='2xl' boxShadow='rgb(0 5 82 / 8%) 0px 7px 14px 0px'>
          <Heading mb='4' fontSize='3xl' fontWeight='bold' textAlign='center'>Where will we come to clean?</Heading>
          <Text w='full' textAlign='center' fontSize='sm' mb='8'>No commitments until agreed with cleaner!</Text>
              <FormControl w='full'>
                  <FormLabel>
                      <Text textAlign='center' fontSize='xs' textTransform='uppercase' mb='4' fontWeight='bold' letterSpacing='0.05rem'>Your neighbourhood</Text>
                  </FormLabel>
                  <Dropdown height='14' groupedOptions={groupedOptions} dropdownName='color' placeholderValue="Select your color"/>
              </FormControl>
        </Container>
        
        <Container maxW='2xl' py='12' px='24' bg='white' display='flex' alignItems='center' flexDirection='column' borderRadius='2xl' boxShadow='rgb(0 5 82 / 8%) 0px 7px 14px 0px'>
          <Heading mb='8' fontSize='3xl' fontWeight='bold' textAlign='center'>When can we clean?</Heading>
          <Text textAlign='center' fontSize='xs' textTransform='uppercase' mb='4' fontWeight='bold' letterSpacing='0.05rem'>Choose your preferable <Text as='span' textDecoration='underline' >start times</Text></Text>
          <Text w='full' mb='8' textAlign='center' fontSize='sm'>Multiple options can be selected.</Text>
          <Box display='flex' flexDirection='column' alignSelf='flex-start'>
            <Text mb='2' fontSize='sm' fontWeight='bold'>Use quick selections <Text as='span' fontWeight='normal'>(resets active selections)</Text>:</Text>
            <Checkbox mb='2' fontWeight=""><Text fontSize='sm'>Weekdays morning (Mon-Fri 08:00-12:00)</Text></Checkbox>
            <Checkbox mb='2' fontWeight=""><Text fontSize='sm'>Weekdays afternoon (Mon-Fri 12:30-18:00)</Text></Checkbox>
            <Checkbox mb='2' fontWeight=""><Text fontSize='sm'>Weekends morning (Sat-Sun 08:00-12:00)</Text></Checkbox>
            <Checkbox mb='8' fontWeight=""><Text fontSize='sm'>Weekends afternoon (Sat-Sun 12:30-18:00)</Text></Checkbox>
          </Box>
            {schedule.map(day => {
              return (
                <Box w='full' mb='6'>
                  <Box display='flex' justifyContent='space-between' borderBottom='2px solid black' mb='2'>
                    <Text fontSize='sm' textTransform='uppercase'  fontWeight='bold' letterSpacing='0.05rem'>{day}</Text>
                    <Box display='flex' gap='4'>
                      <Checkbox size='sm' whiteSpace='nowrap'><Text fontSize='sm' position='relative' top='-0.5' left='-1'>whole day</Text></Checkbox>
                      <Checkbox size='sm' whiteSpace='nowrap'><Text fontSize='sm' position='relative' top='-0.5' left='-1'>morning</Text></Checkbox>
                      <Checkbox size='sm' whiteSpace='nowrap'><Text fontSize='sm' position='relative' top='-0.5' left='-1'>afternoon</Text></Checkbox>
                    </Box>
                  </Box>
                  {/* <Box w='full' display='flex' justifyContent='flex-start' flexWrap='wrap' gap='3'> */}
                  <Grid templateColumns='repeat(6, 1fr)' gap={3} mb='3'>
                    {dayHours.map(hour => {
                      return (
                        <GridItem w='100%' h='10' cursor='pointer' _hover={{bg:'rgba(33, 37, 43, 0.04)'}} border='1px solid lightgray' borderRadius='md' boxShadow='0 4px 12px 0 rgb(0 0 0 / 8%)' display='flex' alignItems='center' justifyContent='center'>
                          <Text fontSize='md'>{hour}</Text>
                        </GridItem>
                      )
                    })}
                  </Grid>
                </Box>
              )
            })
            }
          {/* <Box w='full' mb='6'>
            <Text textAlign='left' w='full' borderBottom='2px solid black' fontSize='sm' textTransform='uppercase' mb='2' fontWeight='bold' letterSpacing='0.05rem'>Mon 2.11</Text>
            <Box w='full' display='flex' justifyContent='flex-start' gap='2'>
              <Box h='12' cursor='pointer' _hover={{bg:'rgba(33, 37, 43, 0.04)'}} w='16' border='1px solid lightgray' borderRadius='md' boxShadow='0 7px 14px 0 rgb(0 0 0 / 8%)' display='flex' alignItems='center' justifyContent='center'>
                <Text fontSize='lg'>08:00</Text>
              </Box>
              <Box h='12' cursor='pointer' _hover={{bg:'rgba(33, 37, 43, 0.04)'}} w='16' border='2px solid black' borderRadius='md' boxShadow='0 7px 14px 0 rgb(0 0 0 / 8%)' display='flex' alignItems='center' justifyContent='center'>
                <Text fontSize='lg' fontWeight='bolder'>08:00</Text>
              </Box>
            </Box>
          </Box> */}
        </Container>
        </>
    )
}

export default CleaningAgenda;