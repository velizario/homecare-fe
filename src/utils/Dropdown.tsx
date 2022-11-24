import { Box, Text, keyframes } from "@chakra-ui/react";
import { ActionMeta, ChakraStylesConfig, Select, chakraComponents, GroupBase, SingleValue, MultiValue } from "chakra-react-select";
import React from "react";
import { SelectComponents } from "react-select/dist/declarations/src/components";
import { Hours } from "../structure/bookcleaning/CleaningRequirements";




type MyOption = {label: string, value: number}

type DropdownProps = {
    groupedOptions: {
        readonly label?: string;
        readonly options: readonly Hours[];
    }[] | Hours[];
    dropdownName: string;
    placeholderValue: string;
    height: string;
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
    defaultValue?: Hours;
    border?: string;
    boxShadow?: string;
    value?: SingleValue<Hours> | MultiValue<Hours>;
    onChange?: (newValue: Hours | null, actionMeta: ActionMeta<Hours>) => void;
}

type customComponentsProps = {
    children: React.ReactNode,
}

// const customComponents:Partial<SelectComponents<Hours, boolean, GroupBase<Hours>>> | undefined = {
//     Option: ({ children , ...props }) => (
//       <chakraComponents.Option {...props}>
//         {children} sdgf
//       </chakraComponents.Option>
//     ),
//   };


const Dropdown:React.FC<DropdownProps> = ( { groupedOptions, dropdownName, placeholderValue, height, variant='outline', defaultValue, border, boxShadow, value, onChange } ) => {

    const sunrise = keyframes`
    from {
        opacity: 0;
        transform: translateY(-1rem);
    }
    to {
        opacity: 1;
        transform: translateY(0rem);
    }`;

    const chakraStyles: ChakraStylesConfig<Hours, boolean, GroupBase<Hours>> = {
        container: (provided) => ({
            ...provided,
            cursor: 'pointer',
            
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
            fontSize: 'sm',
            fontWeight: "normal",
            whiteSpace: 'nowrap',
            

        }),
 
        control: (provided, state) => ({
            ...provided,
            fontWeight: 'normal', //font weight for selected option
            fontSize: 'md',
            color: 'black',
            height: `${height}`,
            border: `${border || '1px solid lightgray'} !important`,
            borderRadius: 'lg',
            boxShadow: `${boxShadow}`,
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
            justifyContent: 'center'
            
            // textShadow: '0 0 0 currentColor',
            // outline: state.onFocus ? 'none' : '',
         }),

        };
        
        console.log(value)

    return (
        <Box position='relative' px='0'>
            <Text height='0' visibility='hidden' px='3rem' fontSize='md' w='min-content'>{placeholderValue}</Text>
            <Select
                isMulti={false}
                defaultValue={defaultValue}
                variant={variant}
                chakraStyles={chakraStyles} 
                useBasicStyles
                name={dropdownName}
                options={groupedOptions}
                selectedOptionStyle="color"
                placeholder={placeholderValue}
                focusBorderColor="none"
                value={value}
                onChange={onChange}
            />
        </Box>
    )
}

export default Dropdown;