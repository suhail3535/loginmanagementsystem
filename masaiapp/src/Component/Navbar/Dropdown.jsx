import {
    Avatar,
    Box,
    Flex,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    VStack,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react";
import { FiBell, FiChevronDown, FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const userData = JSON.parse(localStorage.getItem("userData")) || [];

const MobileNav = ({ admin, onOpen, ...rest }) => {
    const toast = useToast();
    const navigate = useNavigate();

    const handleLogout = () => {
        setTimeout(() => {
            toast({
                title: "LogOut Successful",
                description: "You are redirected to the login page.",
                status: "success",
                position: "top",
                duration: 2500,
                isClosable: true,
            });
            navigate("/");
        }, 1000);
    };

    return (
        <Flex
            border="0px solid blue"
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue("white", "gray.900")}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent={{ base: "space-between", md: "flex-end" }}
            {...rest}>
            <HStack spacing={{ base: "0", md: "6" }}>
                <Flex alignItems={"center"}>
                    <Menu>
                        <MenuButton
                            py={2}
                            border={"0px solid yellow"}
                            transition="all 0.3s"
                            _focus={{ boxShadow: "none" }}>
                            <HStack>
                                <Avatar size={"sm"} />
                                <VStack
                                    display={{ base: "none", md: "flex" }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    border={"0px solid green"}
                                    ml="2">
                                    <Text fontSize="large" color="gray.600">
                                        {userData.email}
                                    </Text>
                                </VStack>
                                <Box display={{ base: "none", md: "flex" }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            fontSize={15}
                            fontWeight={800}
                            bg={useColorModeValue("white", "gray.900")}
                            borderColor={useColorModeValue(
                                "gray.200",
                                "gray.700"
                            )}>
                            <MenuItem>Profile</MenuItem>
                            <MenuDivider />
                            <MenuItem onClick={handleLogout}>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};
export default MobileNav;
