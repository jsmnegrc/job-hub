import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Hero from "../../assets/hero.jpg";
import { Link } from "react-router-dom";

export default function SplitScreen() {
  return (
    <Stack
      bg={"blue.50"}
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} zIndex={"1"} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              color={"blue.900"}
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.200",
                zIndex: -1,
              }}
            >
              Navigating Careers
            </Text>
            <br />{" "}
            <Text color={"blue.900"} as={"span"}>
              Connecting Futures
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
            Empower your career journey with opportunities that elevate and
            connect, unleashing your full potential in every step."
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Link to="/about">
              <Button
                bg={"blue.300"}
                color={"white"}
                _hover={{
                  color: "black",
                }}
                w={"100%"}
              >
                Get Started
              </Button>
            </Link>
            <Link to="/job">
              <Button
                bg={"blue.300"}
                color={"white"}
                _hover={{
                  color: "black",
                }}
                w={"100%"}
              >
                Find Job
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1.2}>
        <Image alt="hero-image" objectFit={"cover"} src={Hero} />
      </Flex>
    </Stack>
  );
}
