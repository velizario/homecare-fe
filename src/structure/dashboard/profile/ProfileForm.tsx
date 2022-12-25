import { Box, Image, Button, Flex, Grid, Textarea, FormControl, FormErrorMessage, useToast, Text, textDecoration } from "@chakra-ui/react"
import OrderLabel from "../../bookcleaning/helpers/OrderLabel"
import { useEffect, useRef, useState } from "react"
import { UserBasicInfo, UserExtendedInfo} from "../../../utils/AppTypes"
import { useForm } from "react-hook-form";
import ButtonRoute from "../../../utils/ButtonRoute"
import userStore, { defaultUserExtendedInfo } from "../../../store/userStore"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import InputElement from "../../bookcleaning/helpers/InputElement"
import produce from 'immer'
import FileUpload from "./FileUpload";
import postFile from "../../../services/postFile"
import WatchState from "./WatchState";
import { Toaster } from "../../../utils/Toaster";


const formInputs: {label: string; storeArg: keyof UserBasicInfo; focusable: boolean, placeholder: string}[] = [
    {
        label: "Име:",
        placeholder: "Въведете име...",
        storeArg: "firstName",
        focusable: true
    },
    {
        label: "Фамилия:",
        placeholder: "Въведете фамилия...",
        storeArg: "lastName",
        focusable: false
    },
    {
        label: "Адрес:",
        placeholder: "Въведете адрес...",
        storeArg: "address",
        focusable: false
    },
    {
        label: "Телефон:",
        placeholder: "Въведете телефон...",
        storeArg: "phone",
        focusable: false
    },

]

type ProfileFormProps = {
    profileEditable: boolean;
    setProfileEditable: React.Dispatch<React.SetStateAction<boolean>>
}

const schema = yup.object({
    about: yup.string().required("Въведете информация за Вас"),
    firstName: yup.string().required("Въведете име"),
    lastName: yup.string().required("Въведете фамилия"),
    phone: yup.number().positive().integer().required("Въведете номер").typeError("Въведете номер"),
    address: yup.string().required("Въведете адрес"),
})

const ProfileForm:React.FC<ProfileFormProps> = ({ profileEditable, setProfileEditable }) => {
    const store = userStore()
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const toast = useToast();
    const { addToast } = Toaster();

    const { register, watch, handleSubmit, control, getValues, formState: {errors, isValid}} = useForm<UserExtendedInfo>({
        mode: "onChange",
        defaultValues: store.data || defaultUserExtendedInfo,
        resolver: yupResolver(schema)
    })

      useEffect(() => {
        // Subscribe to watch every registered field in the form and invoke a callback function userStore.setState to update the state
        const subscription = watch((data) => (userStore.setState(produce<typeof store>(state => {
            console.log(data);
            state.data = data
        })), false));
        return () => subscription.unsubscribe();
      }, []);

    const submitFormHandler = () => {
        setProfileEditable(false);
        addToast("profileUpdated")
        // postFile("property", "postToURL", "fileName") // TODO Enable below for posting BE. Define property, url and filename
    }

    const toasting = () => {
        return toast({
            position: 'bottom-left',
            title: 'Профилът е обновен.',
            description: "Промените са записани успешно.",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    }

    return (
        <Box bg="white" position="relative" p="14" w="2xl" boxShadow="md"  borderRadius="md">     

            <form id='edit-profile-form' onSubmit={handleSubmit(submitFormHandler)}>
                <Grid templateColumns={"1fr 4fr"} gap="4" mb="7" >
                        <Flex flexDirection="column" alignItems="flex-start" justifyContent="flex-start" width="full" pointerEvents={profileEditable ? "unset" : "none"} >
                            <label htmlFor="fileupload">
                                <Box cursor="pointer" border="1px solid gray.200">
                                    <FileUpload control={control} {...register("imageName")} label="fileupload"/>
                                    <Text mb="5px" fontSize="sm" fontWeight="medium" color="brandPrimary.500" _hover={{textDecoration: "underline"}} visibility={profileEditable ? "visible" : "hidden"}>Качете снимка</Text>
                                    <Image borderRadius="md" src='https://storage.ws.pho.to/s2/f607aa4c6a291a39cc8c654481fe72568435da6c_m.jpg' maxH="40" w="100%" objectFit='cover' objectPosition='50% 0%'></Image>
                                </Box>
                            </label>
                        </Flex>
                    <FormControl isInvalid={errors.about ? true : false}> 
                        <OrderLabel>Няколко думи за Вас:</OrderLabel>
                            <Textarea 
                                {...register("about")}
                                spellCheck={false}
                                resize="none" 
                                bg={profileEditable ? "white" : "#f6f7fb"} 
                                borderColor = {(profileEditable && getValues("about")) ? "#26a0f7" : "gray.200"}
                                cursor={profileEditable ? "initial" : "default !important"}  
                                pointerEvents={profileEditable ? "unset" : "none"} 
                                tabIndex={profileEditable ? 0 : -1} 
                                h="40" 
                            />
                            <Box h='3' mt='1'>
                                <FormErrorMessage mt='0'>
                                    {errors.about?.message}
                                </FormErrorMessage>
                            </Box>
                    </FormControl>
                </Grid>
                {formInputs.map(formInput => {
                    return (
                        <Box key={formInput.storeArg}>
                            <OrderLabel>{formInput.label}</OrderLabel>
                            <InputElement<UserExtendedInfo> 
                                borderColor={profileEditable ? undefined : 'gray.200'}
                                control={control} 
                                {...register(formInput.storeArg)}
                                // value={store.data && store.data[formInput.storeArg] || ""}
                                tabIndex={profileEditable ? 0 : -1}
                                borderRadius="md" 
                                bg={profileEditable ? "white" : "#f6f7fb"} 
                                cursor={profileEditable ? "initial" : "default !important"} 
                                pointerEvents={profileEditable ? "unset" : "none"} 
                                placeholder={formInput.placeholder}
                                defaultValue={store.data? store.data[formInput.storeArg] : ""}
                                />
                        </Box>
                    )
                })}
                <ButtonRoute type="submit" variant="outline" size="md" visibility={profileEditable ? "visible" : "hidden"}>Записване</ButtonRoute>
            </form>
        </Box>
    )
}

export default ProfileForm