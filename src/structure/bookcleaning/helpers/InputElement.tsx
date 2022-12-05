import { Input, InputProps, forwardRef, Box, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { Control, Controller } from "react-hook-form"
import { useState } from "react";
import { Client } from "../../../utils/AppTypes";
import OrderLabel from "./OrderLabel";

interface InputElementProps  {
    control: Control<Client, object>
    message: string | undefined
    label: string
    name: keyof Client
}

const InputElement:React.FC<InputProps & InputElementProps> = forwardRef<InputProps & InputElementProps, "input">((props, ref) => {

    return (

        <FormControl isInvalid={props.message ? true : false} mb = '6'> 
            <OrderLabel>{props.label}</OrderLabel>
            <Controller
                control={props.control}
                name={props.name}
                render={({ field: { onChange, value}}) => 
                    (<Input 
                        ref={ref}
                        {...props}
                        letterSpacing={0.2}
                        // onChange={handleChange}
                        // value={value} 
                        h='14' 
                        zIndex='5' 
                        borderColor={`${!!value ? '#26a0f7' : 'lightgray'}`}
                        boxShadow='none'
                        // boxShadow={`0px 4px 10px ${!!value ? 'rgba(38, 160, 247, 0.2)' : 'rgba(200,200,200,0.3)'}`}
                    />)}
            />
            <Box h='3' mt='1'>
                <FormErrorMessage mt='0'>
                    {props.message}
                </FormErrorMessage>
            </Box>
        </FormControl>
    

    )
})

export default InputElement;

