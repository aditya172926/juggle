"use client";

import Image from "next/image";
import styles from "./page.module.css";
import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  VStack,
  Divider,
  useColorMode,
  IconButton,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <main className={styles.main}>
      {/* <Container> */}
      <Box w="100%" mb={4} textAlign="left">
        <Flex>
          <Box w="100%">
            <Heading as="h1" size="lg" fontWeight="bold" color="teal.500">
              Juggle
            </Heading>
          </Box>
          <IconButton
          flex={1}
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            ml={4}
          />
        </Flex>
      </Box>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl" mb={6}>
          Decentralized Federated Learning
        </Heading>

        {/* Step-by-Step Overview Section */}
        <Box
          maxW="xl"
          textAlign="center"
          borderWidth="1px"
          borderRadius="lg"
          p={6}
        >
          <Heading as="h2" size="lg" mb={4}>
            Step-by-Step Overview
          </Heading>
          <Text>
            Collaboratively train machine learning models with decentralized
            federated learning. Encrypt and store data securely on Arweave.
            Utilize MPC and ZKPs for privacy-preserving computations.
          </Text>
        </Box>

        {/* Features Section */}
        <Box
          maxW="xl"
          textAlign="center"
          borderWidth="1px"
          borderRadius="lg"
          p={6}
        >
          <Heading as="h2" size="lg" mb={4}>
            Key Features
          </Heading>
          <Text>
            - Smart contracts on Arweave for transparency <br />
            - Encrypted data storage on Arweave for privacy <br />
            - Multi-Party Computation (MPC) for secure collaboration <br />-
            Zero-Knowledge Proofs (ZKPs) for privacy-preserving computations{" "}
            <br />- Federated learning models for collective intelligence
          </Text>
        </Box>

        {/* About Section */}
        <Box
          maxW="xl"
          textAlign="center"
          borderWidth="1px"
          borderRadius="lg"
          p={6}
        >
          <Heading as="h2" size="lg" mb={4}>
            About the Project
          </Heading>
          <Text>
            This project leverages decentralized technologies like Arweave and
            blockchain smart contracts to enable collaborative and
            privacy-preserving federated learning. Participants contribute
            encrypted data, and through the use of MPC and ZKPs, the model is
            collectively trained without revealing sensitive information.
          </Text>
        </Box>

        {/* Divider */}
        <Divider maxW="xl" />

        {/* Flowchart Diagram Section */}
        <Box
          maxW="xl"
          textAlign="center"
          borderWidth="1px"
          borderRadius="lg"
          p={6}
        >
          <Heading as="h2" size="lg" mb={4}>
            System Flowchart
          </Heading>
          {/* Include your flowchart diagram here */}
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            {/* Insert your flowchart diagram here */}
          </Box>
        </Box>

        {/* Call to Action Section */}
        <Box>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => alert("Get Started!")}
          >
            Get Started
          </Button>
        </Box>
      </VStack>
      {/* </Container> */}
    </main>
  );
}
