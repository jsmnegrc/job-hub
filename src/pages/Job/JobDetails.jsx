import {
  Flex,
  Button,
  Text,
  Stack,
  HStack,
  useBreakpointValue,
  Image,
  Box,
  Tag,
  Card,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import {
  FaCalendarAlt,
  FaDollarSign,
  FaBuilding,
  FaMapMarkerAlt,
} from "react-icons/fa";
import JobImage from "../../assets/job.jpg";

export default function JobDetails() {
  return (
    <>
      <Stack p={10} w="full" h={{ base: "auto", md: "300px" }} bg="blue.50">
        <Stack alignItems={"center"}>
          <Image
            borderRadius={4}
            src={JobImage}
            alt="Company Logo"
            boxSize={{ base: "300px", md: "100px" }}
            objectFit="cover"
          />
          <Stack
            direction={{ base: "column", md: "row" }}
            justify="space-between"
          >
            <Text
              color="gray.800"
              fontWeight={700}
              fontSize={useBreakpointValue({ base: "3xl", lg: "2xl" })}
              pt={2}
            >
              Product Designer
            </Text>
          </Stack>
          <Stack
            fontWeight={500}
            direction={{ base: "column", md: "row" }}
            color="blackAlpha.600"
            alignItems="center"
            mb={2}
            justify={{ base: "center", md: "flex-start" }}
          >
            <Stack
              direction="row"
              align="center"
              mb={{ base: 2, md: 0 }}
              ml={{ base: 0, md: 4 }}
            >
              <FaMapMarkerAlt />
              <Box ml={{ base: 2, md: 4 }}>Job Location</Box>
            </Stack>
            <Stack
              direction="row"
              align="center"
              mb={{ base: 2, md: 0 }}
              ml={{ base: 0, md: 4 }}
            >
              <FaCalendarAlt />
              <Box ml={{ base: 2, md: 4 }}>Job Date Posted</Box>
            </Stack>
            <Stack direction="row" align="center" ml={{ base: 0, md: 4 }}>
              <FaDollarSign />
              <Box ml={{ base: 2, md: 4 }}>Your Salary</Box>
            </Stack>
          </Stack>
          <HStack>
            <Tag size="md" colorScheme="blue">
              Part-time
            </Tag>
            <Tag size="md" colorScheme="green">
              Featured
            </Tag>
          </HStack>
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            justify="center"
            mt={{ base: 4, md: 2 }}
          >
            <Button
              size={"lg"}
              bg="blue.400"
              color="white"
              _hover={{ bg: "blue.500" }}
            >
              Apply For Job
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
}
