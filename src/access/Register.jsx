import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  InputGroup,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  Alert,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";
import http from "../library/http";

export default function Signup() {
  const api = http();
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateForm();

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await api.post("/register", formData);
        console.log(response);
      } catch (error) {
        console.error("Registration failed:", error);
        setToastMessage("Registration failed. Please check your information.");
        setShowToast(true);
      }
    } else {
      setToastMessage("Please correct the errors in the form.");
      setShowToast(true);
    }
  };

  const validateForm = () => {
    const errors = {};

    setFormErrors(errors);
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  return (
    <Flex p="3" minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box rounded={"lg"} bg={"gray.50"} boxShadow={"lg"} p={8}>
          <Stack mb={8} align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Register
            </Heading>
            <Text fontSize={"lg"}>
              Empower Your Career Journey, Join Us Now!
            </Text>
          </Stack>
          <form onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <HStack mt={5}>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      autoComplete="given-name"
                    />
                    {formErrors.firstName && (
                      <Text color="red" fontSize="sm" mt={1}>
                        {formErrors.firstName}
                      </Text>
                    )}
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="middleName" isRequired>
                    <FormLabel>Middle Name</FormLabel>
                    <Input
                      type="text"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleInputChange}
                      autoComplete="family-name"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="lastName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  autoComplete="family-name"
                />
                {formErrors.lastName && (
                  <Text color="red" fontSize="sm" mt={1}>
                    {formErrors.lastName}
                  </Text>
                )}
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                />
                {formErrors.email && (
                  <Text color="red" fontSize="sm" mt={1}>
                    {formErrors.email}
                  </Text>
                )}
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    autoComplete="new-password"
                  />
                </InputGroup>
                {formErrors.password && (
                  <Text color="red" fontSize="sm" mt={1}>
                    {formErrors.password}
                  </Text>
                )}
              </FormControl>
              <FormControl id="confirmPassword" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  autoComplete="new-password"
                />
                {formErrors.confirmPassword && (
                  <Text color="red" fontSize="sm" mt={1}>
                    {formErrors.confirmPassword}
                  </Text>
                )}
              </FormControl>
              <Stack spacing={10} pt={1}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.300"}
                  variant={"solid"}
                  type="submit"
                >
                  Register
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link href="/login" color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
          {showToast && (
            <Alert status="error" mt={4}>
              <AlertIcon />
              <Text fontSize="sm" ml={2}>
                Form submission failed. Please check your information.
              </Text>
              <CloseButton
                onClick={handleToastClose}
                position="absolute"
                right="8px"
                top="8px"
              />
            </Alert>
          )}
        </Box>
      </Stack>
    </Flex>
  );
}
