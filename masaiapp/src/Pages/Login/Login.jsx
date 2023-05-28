import { useState } from "react";
import style from "./Login.module.css";
import {
    Flex,
    Box,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const Login = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email === "admin@gmail.com" && password === "admin123") {
            const userData = { email };
            localStorage.setItem("userData", JSON.stringify(userData));
            localStorage.setItem("isAuth", JSON.stringify(true));

            toast({
                title: "Login Successful",
                description: "You are redirected to the admin page.",
                status: "success",
                position: "top",
                duration: 2500,
                isClosable: true,
            });
            setTimeout(() => {
                navigate("/admin");
                window.location.reload();
            }, 2000);
        } else if (email !== "" && password !== "") {
            const userData = { email };
            localStorage.setItem("userData", JSON.stringify(userData));
            localStorage.setItem("isAuth", JSON.stringify(true));

            toast({
                title: "Login Successful",
                description: "You are redirected to the home page.",
                status: "success",
                position: "top",
                duration: 2500,
                isClosable: true,
            });
            setTimeout(() => {
                navigate("/home");
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
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("#f3f4f6")}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={4}>
                <div align={"center"} id={style.logo_div}>
                    <img src="./logo.jpg" alt="" />
                </div>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={4}>
                    <Stack spacing={4}>
                        <form>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: "column", sm: "row" }}
                                    align={"start"}
                                    justify={"space-between"}>
                                    <Checkbox>Remember me</Checkbox>
                                </Stack>
                                <div id={style.link_button}>
                                    <Link color={"rgb(81,95,116)"}>
                                        Forgot your password?
                                    </Link>
                                    <Button
                                        onClick={handleLogin}
                                        id={style.button}>
                                        LOG IN
                                    </Button>
                                </div>
                            </Stack>
                        </form>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};
export default Login;
