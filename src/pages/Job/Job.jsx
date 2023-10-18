import {
  Stack,
  Flex,
  VStack,
  useBreakpointValue,
  Text,
  Button,
  Heading,
  Box,
  Link,
  GridItem,
  Image,
  Tag,
  Input,
  Select,
  Radio,
  RadioGroup,
  InputGroup,
  InputLeftElement,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  Card,
} from "@chakra-ui/react";
import {
  FaCalendarAlt,
  FaDollarSign,
  FaBuilding,
  FaSearch,
  FaBriefcase,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState } from "react";
import JobImage from "../../assets/job.jpg";

export default function Job() {
  const [datePosted, setDatePosted] = useState("all");
  const [salaryRange, setSalaryRange] = useState([30000, 80000]);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <Flex
        w="full"
        h="300"
        backgroundImage={JobImage}
        backgroundSize="cover"
        backgroundPosition="center center"
      >
        <VStack
          w="full"
          justify="center"
          align="start"
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient="linear(to-r, blackAlpha.600, transparent)"
        >
          <Stack maxW="2xl" spacing={6}>
            <Text
              pl={10}
              ml="auto"
              color="white"
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Countless Careers, One Platform Kickstart Your Success Story Now
            </Text>
          </Stack>
        </VStack>
      </Flex>
      {/* Filter */}
      <Stack direction={{ base: "column", md: "row" }} alignItems="flex-start">
        <GridItem
          ml={2}
          colStart={{ base: 1, md: 1 }}
          colSpan={{ base: 1, md: 2 }}
        >
          <Box p="4" boxShadow="lg" m="4" borderRadius="md" bg="gray.100">
            <Heading fontWeight="semibold" mb="4">
              Job Search Filter
            </Heading>
            <Stack spacing="4">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FaBriefcase />}
                />
                <Input
                  type="text"
                  placeholder="Job Title"
                  bg="white"
                  id="jobTitle"
                  name="jobTitle"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FaMapMarkerAlt />}
                />
                <Input
                  type="text"
                  placeholder="Location"
                  bg="white"
                  id="location"
                  name="location"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement />
                <Select
                  placeholder="Job Title"
                  bg="white"
                  id="category"
                  name="category"
                  w="100%"
                >
                  <option value="category1">Front End</option>
                  <option value="category2">Full Stack Web Developer</option>
                </Select>
              </InputGroup>
              <Text as="b"> Date Posted</Text>
              <RadioGroup value={datePosted} onChange={setDatePosted}>
                <VStack align="start" direction="row">
                  <Radio value="all">All</Radio>
                  <Radio value="lastHour">Last Hour</Radio>
                  <Radio value="last24Hours">Last 24 Hours</Radio>
                  <Radio value="last7Days">Last 7 Days</Radio>
                  <Radio value="last14Days">Last 14 Days</Radio>
                  <Radio value="last30Days">Last 30 Days</Radio>
                </VStack>
              </RadioGroup>
              <Text as="b">Salary Range</Text>
              <Slider
                id="slider"
                min={0}
                max={100}
                colorScheme="teal"
                onChange={(v) => setSalaryRange(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                  hasArrow
                  bg="blue.500"
                  color="white"
                  placement="top"
                  isOpen={showTooltip}
                  label={`${salaryRange[0]} - ${salaryRange[1]}`}
                >
                  <SliderThumb />
                </Tooltip>
              </Slider>
              <Button
                leftIcon={<FaSearch />}
                colorScheme="blue"
                variant="solid"
                onClick={() => {
                  console.log("Salary Range:", salaryRange);
                }}
              >
                Find Job
              </Button>
            </Stack>
          </Box>
        </GridItem>{" "}
        {/* Job Card */}
        <GridItem
          mt={4}
          colStart={{ base: 1, md: 4 }}
          colSpan={{ base: 1, md: 3 }}
        >
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
              <Tag size="md" colorScheme="blue">
                Featured
              </Tag>
            </Stack>
            {/* Additional Information */}
            <Stack
              p={2}
              color="gray.500"
              direction="row"
              alignItems="center"
              mt="2"
            >
              {/* Job Title */}
              <Stack direction="row" align="center">
                <FaBuilding color="gray.600" />
                <Text fontSize="sm" ml="2">
                  Company
                </Text>
              </Stack>
              {/* Location */}
              <Stack direction="row" align="center" ml="4">
                <FaMapMarkerAlt color="gray.600" />
                <Text fontSize="sm" ml="2">
                  Job Location
                </Text>
              </Stack>
              {/* Date */}
              <Stack direction="row" align="center" ml="4">
                <FaCalendarAlt color="gray.600" />
                <Text fontSize="sm" ml="2">
                  Job Date Posted
                </Text>
              </Stack>
              {/* Salary */}
              <Stack direction="row" align="center" ml="4">
                <FaDollarSign color="gray.600" />
                <Text fontSize="sm" ml="2">
                  Your Salary
                </Text>
              </Stack>
            </Stack>
            <Stack
              p={2}
              direction={{ base: "column", md: "row" }}
              justifyContent="space-between"
            >
              {/* Text Content */}
              <Text fontSize={{ base: "sm" }} textAlign="left" maxW="4xl">
                We use cookies and similar technologies to help personalize
                content, tailor and measure ads, and provide a better
                experience. By clicking OK or turning an option on in Cookie
                Preferences, you agree to this, as outlined in our Cookie
                Policy.
              </Text>

              {/* Button and Image */}
              <Stack
                direction={{ base: "column", md: "row" }}
                alignItems="center"
              >
                {/* Button */}
                <Link href="">
                  <Button variant="outline" colorScheme="blue">
                    View Details
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Card>
        </GridItem>
      </Stack>
    </>
  );
}
