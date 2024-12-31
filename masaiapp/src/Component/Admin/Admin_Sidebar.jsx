import React, { useEffect, useState } from "react";
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Image,
    useToast,
} from "@chakra-ui/react";
import { VStack, Icon, Drawer, DrawerContent, Text } from "@chakra-ui/react";
import { FiHome, FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { RiTicket2Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import ManageTickets from "./ManageTickets";
import AddLectures from "./AddLectures";
import { useDispatch, useSelector } from "react-redux";


import ManageDashbord from "./ManageDashbord";
import AddSchedule from "./AddSchedule";
import { useNavigate } from "react-router-dom";
import TodaySchedule from "./TodaySchedule";
import AllLectures from "./AllLectures";

const LinkItems = [
    {
        name: "Dashboard",
        compName: "Dashboard",
        heading: "Dashboard",
        icon: FiHome,
    },
    {
        name: "Add  Schedule",
        compName: "AddSchedule",
        heading: "Add Schedule",
        icon: IoIosAddCircleOutline,
    },
    {
        name: "Today's Schedule",
        compName: "TodaySchedule",
        heading: "Today's Schedule",
        icon: IoIosAddCircleOutline,
    },
    {
        name: "Add Lectures",
        compName: "AddLectures",
        heading: "Add Lectures ",
        icon: IoIosAddCircleOutline,
    },
    {
        name: "All Lectures",
        compName: "AllLectures",
        heading: "All Lectures",
        icon: IoIosAddCircleOutline,
    },
    {
        name: "Manage Tickets",
        compName: "ManageTickets",
        heading: "Manage Tickets",
        icon: RiTicket2Line,
    },
];

let userData = JSON.parse(localStorage.getItem("userData")) || [];
let isAuth = JSON.parse(localStorage.getItem("isAuth")) || true;
function SidebarWithHeader({ children }) {
    const navigate = useNavigate();
    const toast = useToast();
    const dispatch = useDispatch();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [comp, setComp] = useState("Dashboard");
    const [admin, setAdmin] = useState({});

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

    const componentChange = (compName = comp) => {
        if (compName === "Dashboard") return <ManageDashbord />;
        else if (compName === "AddSchedule") return <AddSchedule />;
        else if (compName === "TodaySchedule") return <TodaySchedule />;
        else if (compName === "AddLectures") return <AddLectures />;
        else if (compName === "AllLectures") return <AllLectures />;
        else if (compName === "ManageTickets") return <ManageTickets />;
    };

    useEffect(() => {
        componentChange(comp);
    }, [comp]);

    const SidebarContent = ({ onClose, ...rest }) => {
        return (
            <Box
                border="0px solid red"
                backgroundColor={"white"}
                transition="3s ease"

                borderRight="1px dotted #ccc"

                w={{ base: "full", md: 60 }}
                pos="fixed"
                h="full"
                {...rest}>
                <Flex
                    h="20"
                    alignItems={"center"}
                    justifyContent="center"
                    mb="3vh">
                    <Image width={"40"} src="" />
                </Flex>
                {LinkItems.map((link) => (
                    <NavItem
                        onClick={() => setComp(link.compName)}
                        key={link.name}
                        icon={link.icon}>
                        {link.name}
                    </NavItem>
                ))}
            </Box>
        );
    };

    return (
        <Box>
            <Box
                minH="100vh"
                border="0px solid red"


            >
                <SidebarContent
                    onClose={() => onClose}
                    display={{ base: "none", md: "block" }}
                />
                <Drawer
                    autoFocus={false}
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    returnFocusOnClose={false}
                    onOverlayClick={onClose}
                    size="full">
                    <DrawerContent>
                        <SidebarContent onClose={onClose} />
                    </DrawerContent>
                </Drawer>

                <MobileNav
                    admin={admin}
                    handleLogout={handleLogout}
                    onOpen={onOpen}
                />
                <Flex
                    className="main-content"
                    justifyContent={"center"}
                    ml="100">
                    {componentChange()}
                </Flex>
                <Box ml={{ base: 0, md: 60 }} p="4">
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

const NavItem = ({ icon, children, ...rest }) => {
    return (
        <Link
            href="#"
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                border=".5px solid #ccc"
                marginBottom="2px"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: "cyan.400",
                    color: "white",
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{ color: "white" }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

const MobileNav = ({ admin, handleLogout, onOpen, ...rest }) => {
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
            <IconButton
                display={{ base: "flex", md: "none" }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <HStack spacing={{ base: "0", md: "6" }}>
                <IconButton
                    size="lg"
                    variant="ghost"
                    aria-label="open menu"
                    icon={<FiBell />}
                />
                <Flex alignItems={"center"}>
                    <Menu>
                        <MenuButton
                            py={2}
                            border="0px solid yellow"
                            transition="all 0.3s"
                            _focus={{ boxShadow: "none" }}>
                            <HStack>
                                <Avatar
                                    size={"sm"}

                                />
                                <VStack
                                    display={{ base: "none", md: "flex" }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2">
                                    <Text fontSize="large" color="gray.600">
                                        {isAuth == true ? userData.email : ""}

                                    </Text>
                                </VStack>
                                <Box display={{ base: "none", md: "flex" }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
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

export default SidebarWithHeader;
