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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import http from "../library/http";

const Register = () => {
  const api = http();
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmed: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password" || name === "password_confirmed") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/register", formData);
      navigate("/login");
    } catch (error) {
      console.error("Registration Failed:", error.response.data.message);
    }
  };

  return (
    <Flex p={8} minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={5} maxW={"xl"}>
        <Box rounded={"lg"} bg={"gray.50"} boxShadow={"lg"} p={2}>
          <Stack
            bg={"gray.50"}
            p={10}
            borderRadius={8}
            spacing={4}
            w={"full"}
            maxW={"md"}
          >
            <Heading mb="3" alignSelf="center" fontSize={"4xl"}>
              Register!
            </Heading>
            <Stack direction="row" spacing={4}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  size="lg"
                  autoComplete="off"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Middle Name</FormLabel>
                <Input
                  type="text"
                  name="middle_name"
                  value={formData.middle_name}
                  onChange={handleChange}
                  size="lg"
                  autoComplete="off"
                />
              </FormControl>
            </Stack>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                size="lg"
                autoComplete="off"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                size="lg"
                autoComplete="off"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                size="lg"
                autoComplete="off"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                size="lg"
                autoComplete="off"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                name="password_confirmed"
                value={formData.password_confirmed}
                onChange={handleChange}
                size="lg"
                autoComplete="off"
              />
            </FormControl>
            <Button
              mt="3"
              bg={"blue.300"}
              onClick={handleSubmit}
              variant={"solid"}
              type="submit"
            >
              Register
            </Button>
            <Text textAlign={"center"}>
              Already have an account?{" "}
              <Link href="/login" color={"blue.400"}>
                Login
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
