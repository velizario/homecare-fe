import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ButtonRoute from "../../utils/ButtonRoute";
import EditProfile from "./EditProfile";
import ProfileView from "./ProfileView";


const ProfileMain = () => {

    const [profileEditable, setProfileEditable] = useState(false)

        return (
    <Box  w="70%" minH="100vh"  p="10" bg="#fafbfc" position="relative" zIndex='1'>
        <Flex flexDirection='row' justifyContent="space-between" w="2xl" mb="4">
        {profileEditable && <ButtonRoute variant="outline" size="sm" type="submit" form='edit-profile-form'>Записване</ButtonRoute>}
        {!profileEditable && <ButtonRoute variant="outline" size="sm" onClick={()=> setProfileEditable(true)}>Редактиране</ButtonRoute>}
            <ButtonRoute variant="link" size="sm" mr="4" to="view">Преглед</ButtonRoute>
        </Flex>
        <Routes>
            <Route index element={<EditProfile profileEditable={profileEditable}/>}/>
            <Route path="view" element={<ProfileView/>}/>
        </Routes>
    </Box>
    )
}

export default ProfileMain;