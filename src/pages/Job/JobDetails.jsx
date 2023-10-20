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
  CardBody,
  Grid,
  VStack,
  Spacer,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
} from "@chakra-ui/react";
import {
  FaCalendarAlt,
  FaDollarSign,
  FaMapMarkerAlt,
  FaBuilding,
  FaClock,
  FaUserAlt,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import JobImage from "../../assets/job.jpg";

export default function JobDetails() {
  return (
    <Flex mt="5" mb="10" direction={{ base: "column", md: "row" }}>
      <Stack ml="8" w={{ base: "full", md: "90%" }} h={{ base: "auto" }}>
        <Box>
          <Stack alignItems={{ base: "center", md: "flex-start" }}>
            <Stack direction={{ base: "column", md: "row" }}>
              <Text
                color="gray.800"
                fontWeight={700}
                fontSize={useBreakpointValue({ base: "3xl", lg: "3xl" })}
                pt={2}
              >
                Product Designer
              </Text>
            </Stack>
            <Stack
              color="gray.500"
              direction="row"
              alignItems="center"
              gap="3"
              mb="2"
            >
              <Stack direction="row" align="center">
                <FaMapMarkerAlt color="gray.600" />{" "}
                <Box color="gray.600"> Job Location</Box>
              </Stack>
              <Stack direction="row" align="center">
                <FaCalendarAlt color="gray.600" />
                <Box color="gray.600">Job Date Posted</Box>
              </Stack>
              <Stack direction="row" align="center">
                <FaDollarSign color="gray.600" />
                <Box color="gray.600">Your Salary</Box>
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
          </Stack>
          <Stack>
            <Flex>
              <Stack w={{ base: "50%", md: "100%" }} h={{ base: "auto" }}>
                <Box flex={"1"}>
                  <Card p="3" bg="blackAlpha.50" mt={10}>
                    <CardHeader>
                      <Heading fontSize="xl">Job Overview</Heading>
                    </CardHeader>
                    <CardBody>
                      <Grid
                        templateColumns={{
                          base: "repeat(1, 1fr)",
                          md: "repeat(3, 1fr)",
                        }}
                        gap={4}
                        color="blue.400"
                      >
                        <Stack direction="row" align="center" mb="2">
                          <FaBuilding color="gray.600" />
                          <Box color="gray.600">Company</Box>
                        </Stack>
                        <Stack direction="row" align="center">
                          <FaMapMarkerAlt color="gray.600" />
                          <Box color="gray.600">Job Location</Box>
                        </Stack>
                        <Stack direction="row" align="center">
                          <FaCalendarAlt color="gray.600" />
                          <Box color="gray.600">Job Date Posted</Box>
                        </Stack>
                        <Stack direction="row" align="center">
                          <FaDollarSign color="gray.600" />
                          <Box color="gray.600">Your Salary</Box>
                        </Stack>
                        <Stack direction="row" align="center">
                          <FaClock color="gray.600" />
                          <Box color="gray.600">Hours</Box>
                        </Stack>
                        <Stack direction="row" align="center">
                          <FaUserAlt color="gray.600" />
                          <Box color="gray.600">Experience</Box>
                        </Stack>
                      </Grid>
                    </CardBody>
                  </Card>
                </Box>
              </Stack>
            </Flex>
          </Stack>
        </Box>
      </Stack>
      <Flex
        direction="column"
        alignItems="flex-end"
        p={10}
        w={{ base: "full", md: "50%" }}
        h={{ base: "auto" }}
      >
        <Button
          size={"lg"}
          bg="blue.300"
          color="white"
          _hover={{ bg: "blue.500" }}
        >
          Apply For Job
        </Button>
        <Flex mt="5" direction={{ base: "column", md: "row" }}>
          <Stack w={{ base: "full", md: "400px" }} h={{ base: "auto" }}>
            <Box>
              <Card p={4}>
                <CardHeader>
                  <Flex align="center">
                    <Box>
                      <Image
                        borderRadius={4}
                        src={JobImage}
                        alt="Company Logo"
                        boxSize={{ base: "300px", md: "80px" }}
                        objectFit="cover"
                      />
                    </Box>
                    <Text ml="5" fontSize="md">
                      Company Name
                    </Text>
                  </Flex>
                </CardHeader>
                <CardBody as="b">
                  <Stack mb="3" direction="row">
                    <Text color="blackAlpha.800">Industry</Text>
                    <Spacer />
                    <Text color="blackAlpha.600">Industry</Text>
                  </Stack>
                  <Stack mb="3" direction="row">
                    <Text color="blackAlpha.800">Founded in</Text>
                    <Spacer />
                    <Text color="blackAlpha.600">Founded in</Text>
                  </Stack>
                  <Stack mb="3" direction="row">
                    <Text color="blackAlpha.800">Location</Text>
                    <Spacer />
                    <Text color="blackAlpha.600">Location</Text>
                  </Stack>
                  <Stack mb="3" direction="row">
                    <Text color="blackAlpha.800">Phone</Text>
                    <Spacer />
                    <Text color="blackAlpha.600">Phone</Text>
                  </Stack>
                  <Stack mb="3" direction="row">
                    <Text color="blackAlpha.800">Email</Text>
                    <Spacer />
                    <Text color="blackAlpha.600">Email</Text>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          </Stack>
        </Flex>
        <Flex mt="5" direction={{ base: "column", md: "row" }}>
          <Stack w={{ base: "full", md: "400px" }} h={{ base: "auto" }}>
            <Card p={2}>
              <CardHeader>
                <Text as="b">Contact Us</Text>
              </CardHeader>
              <Box p="0" bg="white" borderRadius="lg" m={8} color="#0B0E3F">
                <VStack spacing={5}>
                  <FormControl id="name">
                    <FormLabel>Your Name</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement pointerEvents="none">
                        <FaUserAlt color="gray.800" />
                      </InputLeftElement>
                      <Input type="text" size="md" autoComplete="name" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel>Mail</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement pointerEvents="none">
                        <MdOutlineEmail color="gray.800" />
                      </InputLeftElement>
                      <Input type="text" size="md" autoComplete="email" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="message">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      borderColor="gray.300"
                      _hover={{
                        borderRadius: "gray.300",
                      }}
                      placeholder="message"
                      autoComplete="message"
                    />
                  </FormControl>
                  <FormControl id="name" float="right">
                    <Button
                      variant="solid"
                      bg="#0D74FF"
                      color="white"
                      _hover={{}}
                    >
                      Send Message
                    </Button>
                  </FormControl>
                </VStack>
              </Box>
            </Card>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}
