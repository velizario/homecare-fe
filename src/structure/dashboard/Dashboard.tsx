import {  Container, Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Header from "../headerFooter/Header";
import Footer from "../headerFooter/Footer";
import MenuPanel from "./MenuPanel";
import Messages from "./messages/Messages";
import Orders from "./orders/Orders";
import Profile from "./profile/Profile";

const Dashboard = () => {
    return (
        <>
            <Header/>
            <Container maxW="100%" m="0"  bg="#fafbfc">
                <Flex flexDirection='row' w="6xl" margin="auto">
                    <MenuPanel/>
                    <Routes>
                        <Route index element={<Orders />} />
                        <Route path='profile/*' element={<Profile/>} />
                        <Route path='orders' element={<Orders/>} />
                        <Route path='messages' element={<Messages/>} />
                    </Routes> 
                </Flex>
            </Container>
            <Footer/>
        </>
    )
}

export default Dashboard;