import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
export const Hero = () => {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      bgColor={"pink.900"}
      w="100vw"
      h={{ base: "full", lg: "100vh" }}
      alignItems={"center"}
      justifyContent={"center"}
      gap={{ base: 4, md: 6, lg: 8 }}
      py={{ base: 8, md: 2 }}
      px={{ base: 2, md: 8, lg: 12 }}
    >
      <Flex flexDir={"column"} gap={2}>
        <Text
          color="white"
          fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
          as="div"
          lineHeight={"1.1"}
        >
          Hello, I am
          <br />
          Yuiko Koyanagi
        </Text>
        <Text color="white" fontSize={{ base: "xl", lg: "3xl" }} as="div">
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "Tech Enthusiast",
                "Frontend Engineer",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </Text>
      </Flex>
      <Image src="/images/top.png" width={500} height={470} alt="top" />
    </Flex>
  );
};
