import { Box, FormControl, FormErrorMessage, NumberInput, NumberInputField, NumberInputFieldProps, NumberInputProps } from "@chakra-ui/react";
import { Control, Controller, useFormState } from "react-hook-form"
import { useState } from "react";
import { FormArgs } from "../../../utils/AppTypes";
import OrderLabel from "./OrderLabel";

interface NumberInputElementProps extends NumberInputFieldProps  {
    control: Control<FormArgs, object>
    label?: string
    name: keyof FormArgs
    
}

const NumberInputElement:React.FC<NumberInputElementProps> = ({children,  placeholder, control, name, ...props}) => {

    const { errors } = useFormState({control})
    const errorMessage = errors[name]?.message

    return (
        <FormControl isInvalid={errorMessage ? true : false} mb = '6'> 
        <OrderLabel>{props.label}</OrderLabel>
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value}}) => 
            (
                <NumberInput>
                    <NumberInputField
                        placeholder={placeholder}
                        letterSpacing={0.2}
                        onChange={onChange} 
                        value={value?.toString()} 
                        borderColor={`${!!value ? '#26a0f7' : 'lightgray'}`}
                    />
                    {children}
                </NumberInput>
            )}
        />
        <Box h='3' mt='1'>
            <FormErrorMessage mt='0'>
                {errorMessage}
            </FormErrorMessage>
        </Box>
    </FormControl>



    )
}

export default NumberInputElement;