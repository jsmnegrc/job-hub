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
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setEmailError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputValue && !emailRegex.test(inputValue)) {
      setEmailError("Invalid email format");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = () => {
    if (!email) {
      setEmailError("Email is required");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Invalid email format");
      }
    }

    if (!password) {
      setPasswordError("Password is required");
    }

    if (!emailError && !passwordError) {
      console.log("Form submitted!");
    }
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
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={handleEmailChange}
                size="lg"
                autoComplete="off"
              />
              {emailError && (
                <Text color="red" fontSize="sm" mt={1}>
                  {emailError}
                </Text>
              )}
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  size="lg"
                  autoComplete="off"
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {passwordError && (
                <Text color="red" fontSize="sm" mt={1}>
                  {passwordError}
                </Text>
              )}
            </FormControl>

            <Stack spacing={6} mt={3}>
              <Text textAlign={"center"}>
                Don't have an account?{" "}
                <Link href="/signup" color={"blue.400"}>
                  Sign Up
                </Link>
              </Text>
              <Button bg={"blue.300"} variant={"solid"} onClick={handleSubmit}>
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
