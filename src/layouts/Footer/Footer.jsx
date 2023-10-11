"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SmallWithNavigation() {
  return (
    <Box bg={useColorModeValue("blue.900")}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6} color={"white"}>
          <Box as="a" href={"/"}>
            Home
          </Box>
          <Box as="a" href={"/about"}>
            About
          </Box>
          <Box as="a" href={"/job"}>
            Job Board
          </Box>
          <Box as="a" href={"/contact"}>
            Contact
          </Box>
        </Stack>
        <Text color={"white"}>
          © 2022 Chakra Templates. All rights reserved
        </Text>
      </Container>
    </Box>
  );
}
