"use client";

import Image from "next/image";
import styles from "./page.module.css";
import dark_flowchart from "./assets/dark_mpclearn_flowchart.png";
import light_flowchart from "./assets/light_mpclearn_flowchart.png";

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
        <Box textAlign="center" px={6} mb={20} w="100%">
          <Heading as="h1" mb={4}>
            Step-by-Step Overview
          </Heading>
          <UnorderedList fontSize="xl" listStyleType="none">
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

        <Box textAlign="center" p={6} w="100%">
          <Heading as="h1" mb={4}>
            Key Features
          </Heading>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8} w="100%" mb={20}>
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

        {/* Flowchart Diagram Section */}
        <Box textAlign="center" p={6}>
          <Heading as="h1" mb={4}>
            System Flowchart
          </Heading>
          <Box overflow="hidden">
            <Image src={light_flowchart} alt="dark flowdiagram" />
          </Box>
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
