// import { Box, BoxProps, FormControl, FormErrorMessage } from "@chakra-ui/react";
// import { Control, Controller, FieldValues, useFormState, FieldPath } from "react-hook-form";
// import { CleaningServices } from "../../utils/AppTypes";

// interface BoxSelectionSetProps<FormType extends FieldValues, StoreType extends string> extends BoxProps {
//     control: Control<FormType, object>
//     getPropertyState: (property: StoreType) => any
//     changeHandler: (value: StoreType) => void;
//     selectionVariations: {name: FieldPath<FormType>, id: number, selectable: boolean}[];
//     name: FieldPath<FormType>;
// }

// const BoxSelectionSet = <K extends FieldValues,>({ control, changeHandler, getPropertyState, name, selectionVariations, children, ...props }: BoxSelectionSetProps<K> ) => {
    
//     const { errors } = useFormState({control})

//     return (
//         <>
//                 <Controller 
//                 register={register}
//                 name={name}
//                 render={({field: {onChange }}) => (
//                     <FormControl isInvalid={errors[name] ? true : false}>
//                         {selectionVariations.map(variation => {
//                             return (
//                             <Box 
//                                 tabIndex={0} 
//                                 w='full' 
//                                 h='20' 
//                                 mb='3' 
//                                 p='5' 
//                                 bg={`${getPropertyState(variation.name) ? 'rgba(38,160,247,0.07)' : 'unset'}`} 
//                                 border={`1px solid ${getPropertyState(variation.name) ? '#26a0f7' : 'lightgray'}`} 
//                                 borderRadius='lg' 
//                                 display='flex' 
//                                 alignItems='center' 
//                                 justifyContent='space-between' 
//                                 letterSpacing={0.2} 
//                                 cursor={`${variation.selectable ? 'pointer' : "default"}`}
//                                 _hover={{bg:`${variation.selectable ? 'rgb(240, 241, 244)' : ""}`}} 
//                                 {...props}
                                
//                                 key={variation.name} 
//                                 data-id={variation.id} 
//                                 data-name={variation.name} 
//                                 onClick={variation.selectable ? () =>  {onChange(changeHandler(variation.name))} : undefined}>
//                                     {children}
//                             </Box>
//                             )
//                         })}
//                         <FormErrorMessage mt='0'>
//                             {errors[name]?.message?.toString()}
//                         </FormErrorMessage>
//                     </FormControl>
//                     )}
//                 />
//         </>
//     )
// }

// export default BoxSelectionSet;