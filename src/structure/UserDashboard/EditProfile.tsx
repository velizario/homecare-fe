import { Box, Image, Button, Flex, Grid, Textarea } from "@chakra-ui/react"
import OrderLabel from "../bookcleaning/helpers/OrderLabel"
import { useEffect, useRef } from "react"
import { UserBasicInfo, UserExtendedInfo} from "../../utils/AppTypes"
import { Controller, useForm } from "react-hook-form";
import ButtonRoute from "../../utils/ButtonRoute"
import userStore, { defaultUserExtendedInfo } from "../../store/userStore"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import InputElement from "../bookcleaning/helpers/InputElement"
import { useNavigate } from "react-router-dom"
import produce from 'immer'
import FileUpload from "./FileUpload";
import postFile from "../../services/postFile"
import ExposeState from "./ExposeState";


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

type EditProfileProps = {
    profileEditable: boolean;
}

const schema = yup.object({
    firstName: yup.string().required("Въведете име"),
    lastName: yup.string().required("Въведете фамилия"),
    phone: yup.number().positive().integer().required("Въведете номер").typeError("Въведете номер"),
    address: yup.string().required("Въведете адрес"),
    about: yup.string().required("Въведете информация за Вас")
})

const EditProfile:React.FC<EditProfileProps> = ({ profileEditable }) => {
    const store = userStore()
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const navigate = useNavigate()
    

    const { register, watch, handleSubmit, control, formState: {errors, isValid}} = useForm<UserExtendedInfo>({
        mode: "onChange",
        defaultValues: store.data || defaultUserExtendedInfo,
        resolver: yupResolver(schema)
    })


    useEffect(() => {
        // Subscribe to watch every registered field in the form and invoke a callback function userStore.setState to update the state

        const subscription = watch((data, { name }) => (name && userStore.setState(produce<typeof store>(state =>  {
            console.log("Form updated. Updating store...", data, name)
            if (state.data && name !== "imageName") {
                const newValue = data[name]
                newValue && (state.data[name] = newValue)
            }
            })), false));
        return () => subscription.unsubscribe();
      }, []);

      useEffect(() => {
        // Subscribe to watch every registered field in the form and invoke a callback function userStore.setState to update the state

        const subscription = watch((data, { name }) => (name && userStore.setState(produce<typeof store>(state => {state.data = data})), false));
        return () => subscription.unsubscribe();
      }, []);

      

    const submitFormHandler = () => {
        // define property, url and filename
        postFile("property", "postToURL", "fileName")
    }

    return (
    <Box>
        <Box bg="white" position="relative" p="14" w="2xl" boxShadow="0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03)" borderRadius="md">
            <ExposeState/>
            <form id='edit-profile-form' onSubmit={handleSubmit(() => navigate("/orderplaced"))}>
                <Grid templateColumns={"1fr 4fr"} gap="4" mb="7" >
                    <Flex flexDirection="column" alignItems="flex-start" justifyContent="center" width="full">
                        <Button mb="1" size="sm" variant="link" disabled={!profileEditable} cursor={profileEditable ? "pointer" : "unset !important"} >Качете снимка</Button>
                        <Image borderRadius="md" src='https://storage.ws.pho.to/s2/f607aa4c6a291a39cc8c654481fe72568435da6c_m.jpg' maxH="40" maxW="100%" objectFit='contain' objectPosition='50% 50%'></Image>
                    </Flex>
                    // TODO: integrate FileUpload in the form with Control
                    <FileUpload control={control} {...register("imageName")} />
                    <Box >
                        <OrderLabel>Няколко думи за Вас:</OrderLabel>
                        <Controller
                            control={control}
                            name="about"
                            render={({ field: { onChange, value}}) => (
                                <Textarea 
                                    resize="none" 
                                    ref={inputRef}  
                                    bg={profileEditable ? "white" : "#f6f7fb"} 
                                    cursor={profileEditable ? "initial" : "default !important"}  
                                    pointerEvents={profileEditable ? "unset" : "none"} 
                                    tabIndex={profileEditable ? 0 : -1} 
                                    h="40" 
                                    onChange={onChange}
                                    value={value?.toString()}/>

                                )}/>
                    </Box>
                </Grid>
                {formInputs.map(formInput => {
                    return (
                        <Box key={formInput.storeArg}>
                            <OrderLabel>{formInput.label}</OrderLabel>
                            <InputElement<UserExtendedInfo> 
                                control={control} 
                                {...register(formInput.storeArg)}
                                // value={store.data && store.data[formInput.storeArg] || ""}
                                tabIndex={profileEditable ? 0 : -1}
                                borderRadius="md" 
                                bg={profileEditable ? "white" : "#f6f7fb"} 
                                cursor={profileEditable ? "initial" : "default !important"} 
                                pointerEvents={profileEditable ? "unset" : "none"} 
                                placeholder={formInput.placeholder}
                                />
                        </Box>
                    )
                })}
                {profileEditable && <ButtonRoute type="submit" variant="outline" size="sm">Записване</ButtonRoute>}
            </form>
        </Box>
    </Box>
    )
}

export default EditProfile