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
  Center,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <main className={styles.main}>
      {/* Navbar */}
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

      {/* <Container> */}
      <VStack spacing={8} align="center">
        <Center>
          <MotionBox
            w="100%"
            px={4}
            textAlign="center"
            mt="10%"
            mb="15%"
            borderRadius="lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <VStack spacing={2}>
              <Heading as="h2" size="2xl" mb={2}>
                Decentralized Federated Learning Models
              </Heading>
              <Text fontSize="xl" noOfLines={2}>
                Collaborate on machine learning without compromising privacy.
                Juggle empowers you to contribute encrypted data securely,
                leveraging Arweave, MPC and ZKPs for confidential model updates
              </Text>
            </VStack>
          </MotionBox>
        </Center>

        {/* Step-by-Step Overview Section */}
        <Box textAlign="left" px={6} w="100%">
          <Heading as="h1" mb={4}>
            Step-by-Step Overview
          </Heading>
          <UnorderedList fontSize="xl">
            <ListItem>
              Collaborate with a decentralized network of participants.
            </ListItem>
            <ListItem>Encrypt and securely store data on Arweave.</ListItem>
            <ListItem>
              Leverage Multi-Party Computation (MPC) for secure collaboration.
            </ListItem>
            <ListItem>
              Utilize Zero-Knowledge Proofs (ZKPs) for privacy-preserving
              computations.
            </ListItem>
          </UnorderedList>
        </Box>

        {/* Features Section */}

        <Box textAlign="left" pl={6} pt={6} w="100%">
          {" "}
          <Heading as="h1" mb={4}>
            Key Features
          </Heading>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8} w="100%">
          <FeatureCard
            title="Secure Collaboration"
            description="Enrich a publicly trained ML model with your own data privately"
          />
          <FeatureCard
            title="Data Encryption"
            description="Computation on Encrypted data protects your dataset from spying"
          />
          <FeatureCard
            title="MPC Integration"
            description="Up the speed and key security of data pre-processing, validation, encryption and trainging by MPC nodes"
          />
          <FeatureCard
            title="Privacy with ZKPs"
            description="Model evaluations, Dataset integrity and privacy is maintained and validated by ZKPs"
          />
          <FeatureCard
            title="Governance and Voting"
            description="Protect the Models via consensus mechanisms and voting on which data to train, evaluate, and release with ZKPs provided"
          />
          <FeatureCard
            title="Version Keeping"
            description="Can rollback to previous version of trained model reference provided via Smart Contracts on Arweave"
          />
        </SimpleGrid>

      
        {/* About Section */}
        {/* <Box
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
        </Box> */}

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

// FeatureCard Component
interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <Flex
      p={6}
      direction="column"
      align="center"
      justify="center"
      borderWidth="1px"
      borderRadius="lg"
    >
      <Heading as="h3" size="lg" mb={4}>
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
    </Flex>
  );
};
