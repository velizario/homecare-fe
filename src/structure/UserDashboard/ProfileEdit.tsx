import { Box, Input, Image, Button, Flex, Grid, Text, Textarea  } from "@chakra-ui/react"
import OrderLabel from "../bookcleaning/helpers/OrderLabel"
import bookCleaningStore from "../../store/bookCleaningStore"
import { useRef, useState } from "react"
import { User } from "../../utils/AppTypes"
import ProfileThumbnail from "../CleanerCard/ProfileThumbnail"
import { boolean } from "yup/lib/locale"
import ButtonRoute from "../../utils/ButtonRoute"

const formInputs: {label: string; storeArg: keyof User; focusable: boolean, placeholder: string}[] = [
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

type ProfileEditProps = {
    profileEditable: boolean
}

const ProfileEdit:React.FC<ProfileEditProps> = ({ profileEditable}) => {
    console.log(profileEditable)
    const store = bookCleaningStore()

    // const [profileEditable, setprofileEditable] = useState(false)

    const inputRef = useRef<HTMLTextAreaElement>(null)

    // const handleFormButtonClick = () => {
    //     if (!profileEditable) {
    //         setProfileEditable(true)
    //         inputRef.current?.focus()
    //     }
    //     else {
    //     }
    // }

    return (
    <Box>
        <Box bg="white" position="relative" p="14" w="2xl" boxShadow="0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03)" borderRadius="md">
            <form>
                <Grid templateColumns={"1fr 4fr"} gap="4" mb="7" >
                    <Flex flexDirection="column" alignItems="flex-start" justifyContent="center" width="full">
                        <Button mb="1" size="sm" variant="link" disabled={!profileEditable} cursor={profileEditable ? "pointer" : "unset !important"} >Качете снимка</Button>
                        <Image borderRadius="md" src='https://storage.ws.pho.to/s2/f607aa4c6a291a39cc8c654481fe72568435da6c_m.jpg' maxH="40" maxW="100%" objectFit='contain' objectPosition='50% 50%'></Image>
                    </Flex>
                    <Box >
                        <OrderLabel>Няколко думи за Вас:</OrderLabel>
                        <Textarea resize="none" ref={inputRef}  bg={profileEditable ? "white" : "#f6f7fb"} cursor={profileEditable ? "initial" : "default !important"}  disabled={!profileEditable} h="40">Марти е старшиМарти е старши UI/UX дизайнер, базиран в Ню Йорк. През последните няколко години той проектира цифрови продукти за банковата, хотелиерската, модната, здравната, фармацевтичната, автомобилната и софтуерната индустрии.Марти е старши UI/UX дизайнер, базиран в Ню Йорк. През последните няколко години той проектира цифрови продукти за банковата, хотелиерската, модната, здравната, фармацевтичната, автомобилната и софтуерната индустрии.Марти е старши UI/UX дизайнер, базиран в Ню Йорк. През последните няколко години той проектира цифрови продукти за банковата, хотелиерската, модната, здравната, фармацевтичната, автомобилната и софтуерната индустрии. UI/UX дизайнер, базиран в Ню Йорк. През последните няколко години той проектира цифрови продукти за банковата, хотелиерската, модната, здравната, фармацевтичната, автомобилната и софтуерната индустрии.</Textarea>    
                    </Box>
                </Grid>
                {formInputs.map(formInput => {
                    return (
                        <Box key={formInput.label}>
                            <OrderLabel>{formInput.label}</OrderLabel>
                            <Input size='xs' borderRadius="md" mb="7" value={store[formInput.storeArg]} bg={profileEditable ? "white" : "#f6f7fb"} disabled={!profileEditable} cursor={profileEditable ? "initial" : "default !important"} placeholder={formInput.placeholder}/>
                        </Box>
                    )
                })}
                {profileEditable && <ButtonRoute variant="outline" size="sm">Записване</ButtonRoute>}
                {/* <Button onClick={handleFormButtonClick} variant="outline" position="absolute" top="2" right="2">{profileEditable ? "Запиши" : "Редактирай"}</Button> */}
            </form>
        </Box>
    </Box>
    )
}

export default ProfileEdit