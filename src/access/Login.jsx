import React, { useState } from "react";
import {
  Button,
  Link,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Box,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import http from "../library/http";

const Login = () => {
  const api = http();
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  async function submit(e) {
    e.preventDefault();

    try {
      const body = {
        username,
        password,
      };

      const user = await api.post("/login", body);
      console.log(user);
      localStorage.setItem("token", user.data.token);
      localStorage.setItem("user", JSON.stringify(user.data.user));

      window.dispatchEvent(new Event("storage"));
      navigate("/");
    } catch (e) {
      console.log(e.response.data.message);

      toast({
        title: "Error",
        description: "Login failed. Please check your credentials.",
        status: "error",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"xl"}>
        <Box rounded={"lg"} bg={"gray.50"} boxShadow={"lg"} p={5}>
          <Stack
            bg={"gray.50"}
            p={10}
            borderRadius={8}
            spacing={4}
            w={"full"}
            maxW={"md"}
          >
            <Heading fontSize={"4xl"}>Hello,</Heading>
            <Heading mb={6} fontSize={"4xl"}>
              Welcome Back
            </Heading>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                size="lg"
                autoComplete="off"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  value={password}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  size="lg"
                  autoComplete="off"
                />
                <InputRightElement h={"full"}>
                  <Button variant={"ghost"} onClick={togglePasswordVisibility}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={6} mt={3}>
              <Text textAlign={"center"}>
                Don't have an account?{" "}
                <Link href="/register" color={"blue.400"}>
                  Sign Up
                </Link>
              </Text>
              <Button
                bg={"blue.300"}
                onClick={submit}
                variant={"solid"}
                type="submit"
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
