import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import JobImage from "../../assets/job.jpg";

export default function WithBackgroundImage() {
  return (
    <Flex
      w={"full"}
      h={"300px"}
      backgroundImage={JobImage}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Empowering careers in IT through seamless opportunities, just one
            click away
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
