import { Input, InputProps, forwardRef, Box, FormControl, FormErrorMessage} from "@chakra-ui/react";
import { Control, Controller, useFormState, FieldValues, FieldPath } from "react-hook-form"
import OrderLabel from "./OrderLabel";

interface InputElementProps<T extends FieldValues> extends InputProps  {
    control: Control<T, object>;
    label?: string;
    name: FieldPath<T>;
}
const InputElementInner= <K extends FieldValues,>(
        {children, control, onChange, name, ...props}: InputElementProps<K>, 
        ref:React.ForwardedRef<HTMLInputElement >
    ) => {

    const { errors } = useFormState({control})
    const errorMessage = errors[name]?.message as string
 
    return (

        <FormControl isInvalid={errorMessage ? true : false} mb = '6'> 
            <OrderLabel>{props.label}</OrderLabel>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value}}) => 
                (
                <Box position="relative" display='flex' alignItems='center'>
                    <Input 
                        ref={ref}
                        {...props}
                        letterSpacing={0.2}
                        onChange={onChange}
                        value={value?.toString()}
                        h='14' 
                        zIndex='5' 
                        borderColor={`${!!value ? '#26a0f7' : 'lightgray'}`}
                        boxShadow='none'
                    >
                    </Input>
                    {children}
                </Box>
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

const InputElement = forwardRef(InputElementInner) as <T extends FieldValues>(
    props: InputElementProps<T> & { ref?: React.ForwardedRef<HTMLInputElement> }
  ) => ReturnType<typeof InputElementInner>;

export default InputElement;

