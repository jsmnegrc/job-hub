import {
  Flex,
  Button,
  Text,
  Stack,
  VStack,
  HStack,
  useBreakpointValue,
  Image,
  Box,
  Spacer,
  Tag,
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
    <Flex
      w={"full"}
      h={{ base: "auto", md: "200px" }}
      bg={"blue.100"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Flex
          align={{ base: "center", md: "flex-start" }}
          justify={"space-between"}
          w={"full"}
          direction={{ base: "column", md: "row" }}
        >
          <HStack align={"center"}>
            <Image
              borderRadius={4}
              src={JobImage}
              alt="Company Logo"
              boxSize={{ base: "100px", md: "150px" }}
              objectFit={"cover"}
            />
            <VStack align={"flex-start"} ml={{ base: 0, md: 4 }} spacing={2}>
              <Text
                color={"white"}
                fontWeight={700}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
                p={0}
              >
                Job Position
              </Text>
              <Stack
                direction={{ base: "column", md: "row" }}
                p={2}
                color="gray.500"
                alignItems={{ base: "center", md: "flex-start" }}
                mt="2"
              >
                <Stack direction="row" align="center" mb={{ base: 2, md: 0 }}>
                  <FaBuilding color="white" />
                  <Box color="white" ml={{ base: 2, md: 4 }}>
                    Company
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  align="center"
                  mb={{ base: 2, md: 0 }}
                  ml={{ base: 0, md: 4 }}
                >
                  <FaMapMarkerAlt color="white" />
                  <Box color="white" ml={{ base: 2, md: 4 }}>
                    Job Location
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  align="center"
                  mb={{ base: 2, md: 0 }}
                  ml={{ base: 0, md: 4 }}
                >
                  <FaCalendarAlt color="white" />
                  <Box color="white" ml={{ base: 2, md: 4 }}>
                    Job Date Posted
                  </Box>
                </Stack>
                <Stack direction="row" align="center" ml={{ base: 0, md: 4 }}>
                  <FaDollarSign color="white" />
                  <Box color="white" ml={{ base: 2, md: 4 }}>
                    Your Salary
                  </Box>
                </Stack>
              </Stack>
              <HStack>
                <Tag size="md" colorScheme="blue">
                  Part-time
                </Tag>
                <Tag size="md" colorScheme="blue">
                  Featured
                </Tag>
              </HStack>
            </VStack>
          </HStack>
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            justify="center"
            mb={{ base: 4, md: 0 }}
          >
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Show me more
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
}
