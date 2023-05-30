import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { CiCircleRemove, CiEdit, CiCircleChevDown } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const TicketCard = ({ id, category, title, description }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/model");

    };
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{category}</td>
                <td>{description}</td>
                <td>
                    <Menu>
                        <MenuButton
                            backgroundColor="white"
                            _hover={{
                                backgroundColor: "cyan.400",
                            }}
                            _active={{
                                backgroundColor: "white",
                            }}
                            as={Button}
                            rightIcon={<CiCircleChevDown />}>
                            Action
                        </MenuButton>
                        <MenuList backgroundColor="white">
                            <MenuItem
                                _hover={{
                                    backgroundColor: "white",
                                }}
                                icon={<CiEdit />}
                                onClick={handleClick}>
                                Resolve
                            </MenuItem>
                            <MenuItem
                                _hover={{
                                    backgroundColor: "white",
                                }}
                                icon={<CiCircleRemove />}>
                                Reject
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </td>
            </tr>
        </>
    );
};

export default TicketCard;
