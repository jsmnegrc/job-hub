import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Card,
  Heading,
  CardHeader,
  Stack,
  Container,
} from "@chakra-ui/react";
import http from "../../library/http";
import { useNavigate } from "react-router-dom";

const JobApplicationForm = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Subject: "",
    Message: "",
    Contact: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await http().post("/form", formData);

      if (response.status === 201) {
        const data = response.data;

        toast({
          title: "Job application submitted successfully",
          status: "success",
          duration: 7000,
          isClosable: true,
        });

        navigate("/job");
      } else {
        console.error("Failed to submit job application");
      }
    } catch (error) {
      console.error("Error submitting job application:", error);
    }
  };

  return (
    <Container minH={"100vh"} p={5} alignItems={"center"}>
      <Card justifySelf={"center"} p={5}>
        <CardHeader mb={3} textAlign={"center"}>
          {" "}
          <Heading>Apply for Job</Heading>
        </CardHeader>
        <Box>
          <form onSubmit={handleSubmit}>
            <FormControl id="subject" mb={4}>
              <FormLabel>Subject</FormLabel>
              <Input
                type="text"
                name="Subject"
                value={formData.Subject}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl id="message" mb={4}>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="Message"
                value={formData.Message}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                name="Contact"
                value={formData.Contact}
                onChange={handleInputChange}
              />
            </FormControl>
            <Stack>
              <Button ml={"auto"} type="submit" bg={"blue.300"}>
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Card>
    </Container>
  );
};

export default JobApplicationForm;
