import { Container, Box, Text, keyframes } from "@chakra-ui/react";
import { ChakraStylesConfig, Select } from "chakra-react-select";


export type PickerOptions = {
        value: string;
        label: string;
        [key: string]: string;
}[];

type DropdownProps = {
    groupedOptions: {
        label: string;
        options: {
            value: string;
            label: string;
            [key: string]: string;
        }[] ;
    }[] | PickerOptions;
    dropdownName: string;
    placeholderValue: string;
    height: string;
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
    defaultValue?: PickerOptions;
}

const Dropdown:React.FC<DropdownProps> = ( { groupedOptions, dropdownName, placeholderValue, height, variant='outline', defaultValue } ) => {

    const sunrise = keyframes`
    from {
        opacity: 0;
        transform: translateY(-1rem);
    }
    to {
        opacity: 1;
        transform: translateY(0rem);
    }`;

    const chakraStyles: ChakraStylesConfig = {
        container: (provided) => ({
            ...provided,
            cursor: 'pointer',
            height: {height},
            
        }),
    
        dropdownIndicator: (prev, { selectProps }) => ({
            ...prev,
            color: 'gray.500',
            "> svg": {
              transform: `rotate(${selectProps.menuIsOpen ? -180 : 0}deg)`,
              transition: '0.25s ease all'
            },


          }),

        placeholder: (provided, state) => ({
            ...provided,
            color: 'gray.600',
            fontSize: 'md',
            fontWeight: "normal",
            whiteSpace: 'nowrap',

        }),
 
        control: (provided, state) => ({
            ...provided,
            fontWeight: 'bold',
            color: 'gray.600'
        }),

        menuList : (provided, state) => ({
            ...provided,
            borderRadius: 'md',
            opacity: 0,
            border: '1px solid rgb(220,220,220)',
            boxShadow: '0 12px 18px rgba(0,0,0,.14)',
            animation: `0.1s linear forwards ${sunrise}`,
            animationDelay: '0.15s',
            p: '0',
            m: '0',
            minWidth: 'min-content',
        }),

        option : (provided, state) => ({
            ...provided,
            whiteSpace: 'nowrap',
         }),

        input : (provided, state) => ({
            ...provided,
            color: 'transparent',
            // textShadow: '0 0 0 currentColor',
            // outline: state.onFocus ? 'none' : '',
         }),

        };
        
    return (
        <Box position='relative' px='0'>
            <Text height='0' visibility='hidden' px='2.6rem' fontSize='lg' w='min-content'>{placeholderValue}</Text>
            <Select 
            defaultValue={defaultValue}
            variant={variant}
            chakraStyles={chakraStyles} 
            useBasicStyles
            name={dropdownName}
            options={groupedOptions}
            selectedOptionStyle="color"
            placeholder={placeholderValue}
            />
        </Box>
    )
}

export default Dropdown;