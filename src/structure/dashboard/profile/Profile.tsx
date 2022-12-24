import { Box, Fade, Flex, ScaleFade, SlideFade } from "@chakra-ui/react";
import { useState, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ButtonRoute from "../../../utils/ButtonRoute";
import ProfileForm from "./ProfileForm";


const Profile = () => {

    const [profileEditable, setProfileEditable] = useState(false);
    const firstRender = useRef(true)

    // useLayoutEffect(() => {
    //     if (firstRender.current) {
    //         console.log("first render")
    //         firstRender.current = false;
    //         return;
    //     }

    //     console.log(fadingIn)

    //     setFadingIn(true)
    //     const setFader = setTimeout(() => {
    //         setFadingIn(false)
    //     }, 500);

    //     // return (clearTimeout(setFader));

    // },[profileEditable])

    return (
        <Box w='100%' minH="100vh" px="10" bg="#fafbfc" position="relative" zIndex='1'>
            <SlideFade in={true} offsetY='-5px' transition={{ enter: { duration: 0.3 } }}>
                <Flex flexDirection='row' justifyContent="space-between" w="2xl" mb="4">
                {profileEditable && <ButtonRoute variant="outline" size="md" type="submit" form='edit-profile-form'>Записване</ButtonRoute>}
                {!profileEditable && <ButtonRoute variant="outline" size="md" onClick={()=> setProfileEditable(true)}>Редактиране</ButtonRoute>}
                    <ButtonRoute variant="link" size="sm">
                        <Link to="/profile" target="_blank" rel="noopener noreferrer">Преглед на моята визитка</Link>
                    </ButtonRoute>
                </Flex>
                <ProfileForm profileEditable={profileEditable} setProfileEditable={setProfileEditable}/>
            </SlideFade>
        </Box>
    )
}

export default Profile;