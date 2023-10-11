import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import Abt1 from "../../assets/abt1.png";
import Abt2 from "../../assets/abt2.png";
import Abt3 from "../../assets/abt3.png";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      position="relative"
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2} mb={7}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button
          position="absolute"
          bottom={4}
          alignSelf="flex-start"
          variant={"link"}
          colorScheme={"blue"}
          size={"sm"}
        >
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function About() {
  return (
    <Box p={4} mt={5} mb={7}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Why Choose us
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Elevate your career with our job portal, where opportunities meet
          talent, fostering growth, and shaping a successful professional
          journey.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"User-Friendly Interface"}
            icon={<Image src={Abt1} />}
            description={
              "Explore a seamless job-seeking experience on our portal with a user-friendly interface, ensuring effortless navigation and making your job search journey both intuitive and enjoyable."
            }
          />
          <Card
            heading={"Comprehensive Job Listings"}
            icon={<Image src={Abt2} />}
            description={
              "Our job portal takes pride in offering comprehensive job listings, presenting a diverse array of opportunities across various industries and skill levels."
            }
          />
          <Card
            heading={"Effortless Application Process"}
            icon={<Image src={Abt3} />}
            description={
              "Designed to streamline the journey from exploration to application, and hassle-free approach to pursuing your dream career."
            }
          />
        </Flex>
      </Container>
    </Box>
  );
}
