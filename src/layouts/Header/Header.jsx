import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import http from "../../library/http";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue("red.500", "red.200");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const checkToken = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!token);
    setUsername(user ? JSON.parse(user).username : "");
  };

  useEffect(() => {
    checkToken();
    const handleAuthentication = () => {
      checkToken();
    };

    window.addEventListener("authenticated", handleAuthentication);
    return () => {
      window.removeEventListener("authenticated", handleAuthentication);
    };
  }, []);

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    const api = http({
      Authorization: `Bearer ${token}`,
    });
    api.post("/logout");
    localStorage.clear();
    window.dispatchEvent(new Event("authenticated"));
    checkToken();
    navigate("/login");
  };

  return (
    <Box>
      <Flex
        bg="blue.900"
        color={"white"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            bg={"blue.50"}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex
          p={4}
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          align="center"
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <Text
              as="b"
              fontSize={"2xl"}
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("white")}
            >
              Job Hub
            </Text>
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10} align="center">
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"center"}
          direction={"row"}
          spacing={3}
        >
          {isLoggedIn ? (
            <>
              <Stack justify="center" align="center">
                <FaUserAlt />
              </Stack>
              <Stack justify="center" align="center">
                <Text color="white" fontWeight="bold" mr={2}>
                  {username}
                </Text>
              </Stack>
              <Button bg={"red.300"} onClick={handleLogout} variant={"solid"}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"black"}
                bg={"blue.300"}
                href={"/login"}
                _hover={{
                  bg: "blue.50",
                }}
              >
                Login
              </Button>
              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"black"}
                bg={"blue.300"}
                href={"/register"}
                _hover={{
                  bg: "blue.50",
                }}
              >
                Register
              </Button>
            </>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  return (
    <Stack
      direction={"row"}
      spacing={4}
      color={"white"}
      justify="center"
      align="center"
    >
      <Flex>
        <ReactRouterLink to="/">Home</ReactRouterLink>
      </Flex>
      <Flex>
        <ReactRouterLink to="/about">About</ReactRouterLink>
      </Flex>
      <Flex>
        <ReactRouterLink to="/job">Find Job</ReactRouterLink>
      </Flex>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"blue.900"} p={4} spacing={4} display={{ md: "none" }}>
      <Stack color={"white"}>
        <ReactRouterLink to="/">Home</ReactRouterLink>
        <ReactRouterLink to="/about">About</ReactRouterLink>
        <ReactRouterLink to="/job">Find Job</ReactRouterLink>
      </Stack>

      <Button
        mt={5}
        mr={2}
        as={ReactRouterLink}
        to="#"
        size="sm"
        fontSize="sm"
        fontWeight={600}
        color={"black"}
        bg={"blue.100"}
        href={"/login"}
        _hover={{
          bg: "blue.50",
        }}
      >
        Login
      </Button>
      <Button
        mt={5}
        as={ReactRouterLink}
        to="#"
        size="sm"
        fontSize="sm"
        fontWeight={600}
        color="black"
        bg={"blue.100"}
        href={"signup"}
        _hover={{
          bg: "blue.50",
        }}
      >
        Sign Up
      </Button>
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Box py={2}>
        <ReactRouterLink to={href ?? "#"}>
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
        </ReactRouterLink>
      </Box>
    </Stack>
  );
};

export default Header;
