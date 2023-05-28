
import { useState } from "react";
import { CiLock } from "react-icons/ci";
import style from "./LoginTicket.module.css";

import {
    Flex,
    Box,

    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import Navcomponent from "./Navcomponent";

const Login = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
     if (email !== "" && password !== "") {
            const userData = { email };
            localStorage.setItem("userData", JSON.stringify(userData));
            localStorage.setItem("isAuth", JSON.stringify(true));

            toast({
                title: "Login Successful",
                description: "",
                status: "success",
                position: "top",
                duration: 2500,
                isClosable: true,
            });
            setTimeout(() => {
                navigate("/createticket");
                window.location.reload();
            }, 2000);
        } else {
            toast({
                title: "Details Missing",
                description: "Please fill in your details",
                status: "warning",
                duration: 2500,
                isClosable: true,
                position: "bottom-right",
            });
        }
    };

    return (
        <div>
            <Navcomponent />
            <Flex
                id={style.main_div}
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("#f3f4f6")}>
                <Stack
                    id={style.input_div}
                    spacing={8}
                    mx={"auto"}
                    maxW={"lg"}
                    py={12}
                    px={4}>
                    <div id={style.logo_div}>
                        <CiLock
                            style={{
                                fontSize: "2em",
                                marginRight: 5,
                                color: "white",
                                margin: "auto",
                            }}
                        />
                    </div>
                    <h4>Sign in</h4>
                    <Box
                        rounded={"lg"}
                        bg={useColorModeValue("white", "gray.700")}
                        boxShadow={""}
                        p={4}>
                        <Stack spacing={4}>
                            <form>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    id={style.inputbox}
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <FormLabel>Password</FormLabel>
                                <Input
                                    id={style.inputbox}
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />

                                <Stack spacing={10}>
                                    <Stack
                                        direction={{
                                            base: "column",
                                            sm: "row",
                                        }}
                                        align={"start"}
                                        justify={"space-between"}>
                                        <Checkbox>Remember me</Checkbox>
                                    </Stack>
                                    <div id={style.link_button}>
                                        <Button
                                            onClick={handleLogin}
                                            id={style.button}>
                                            LOG IN
                                        </Button>
                                    </div>
                                </Stack>
                            </form>
                        </Stack>
                        <h6>Please use LMS credentials to SignIn</h6>
                    </Box>
                </Stack>
            </Flex>
        </div>
    );
};
export default Login;
