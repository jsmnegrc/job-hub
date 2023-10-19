import React from "react";
import {
  Stack,
  Flex,
  Heading,
  Box,
  Image,
  Tag,
  Text,
  Button,
  Link,
  Card,
} from "@chakra-ui/react";
import {
  FaCalendarAlt,
  FaDollarSign,
  FaBuilding,
  FaMapMarkerAlt,
} from "react-icons/fa";
import JobImage from "../../assets/job.jpg";

const JobCard = () => {
  return (
    <Card mr={6} p="4" boxShadow="lg" borderRadius="md" bg="white">
      <Stack mb={2} direction="row" alignItems="center">
        <Image
          borderRadius={4}
          src={JobImage}
          alt="Company Logo"
          boxSize={{ base: "40px", md: "60px" }}
          ml={{ base: "0", md: "2" }}
        />
        <Flex align="center">
          <Heading size={{ base: "md", md: "lg" }} fontWeight="semibold">
            Job Title
          </Heading>
        </Flex>
        <Tag size="md" colorScheme="blue" ml="auto">
          Partime
        </Tag>
        <Tag size="md" colorScheme="green">
          Featured
        </Tag>
      </Stack>
      <Stack p={2} color="gray.500" direction="row" alignItems="center" mt="2">
        <Stack direction="row" align="center">
          <FaBuilding color="gray.600" />
          <Box color="gray.600">Company</Box>
        </Stack>
        <Stack direction="row" align="center" ml="4">
          <FaMapMarkerAlt color="gray.600" />{" "}
          <Box color="gray.600"> Job Location</Box>
        </Stack>
        <Stack direction="row" align="center" ml="4">
          <FaCalendarAlt color="gray.600" />
          <Box color="gray.600">Job Date Posted</Box>
        </Stack>
        <Stack direction="row" align="center" ml="4">
          <FaDollarSign color="gray.600" />
          <Box color="gray.600">Your Salary</Box>
        </Stack>
      </Stack>
      <Stack
        p={2}
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Text fontSize={{ base: "sm" }} textAlign="left" maxW="4xl">
          We use cookies and similar technologies to help personalize content,
          tailor and measure ads, and provide a better experience. By clicking
          OK or turning an option on in Cookie Preferences, you agree to this,
          as outlined in our Cookie Policy.
        </Text>
        <Stack direction={{ base: "column", md: "row" }} alignItems="center">
          <Link href="/JobDetails">
            <Button variant="outline" colorScheme="blue">
              View Details
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
};

export default JobCard;
