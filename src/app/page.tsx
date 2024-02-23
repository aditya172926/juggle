"use client";

import Image from "next/image";
import dark_flowchart from "./assets/dark_mpclearn_flowchart.png";
import light_flowchart from "./assets/light_mpclearn_flowchart.png";
import styles from "./page.module.css";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
  useColorMode
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/next-js";

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
            onClick={() => {
              toggleColorMode();
              console.log(colorMode);
            }}
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
            <Image src={colorMode == "light" ? light_flowchart : dark_flowchart} alt="dark flowdiagram" />
          </Box>
        </Box>

        {/* <Box as="footer" mt={8} borderTopWidth="1px" borderColor="gray.200" p={4} w="100%">
          <HStack spacing={4} justify="center">
            <SocialLink icon={<Icon as={FaGithub} boxSize={6} />} label="GitHub" href="https://github.com/your-github-username" />
            <SocialLink icon={<Icon as={FaLinkedin} boxSize={6} />} label="LinkedIn" href="https://www.linkedin.com/in/your-linkedin-username/" />
            <SocialLink icon={<Icon as={FaTwitter} boxSize={6} />} label="Twitter" href="https://twitter.com/your-twitter-handle" />
          </HStack>
        </Box> */}
<Box as="footer" mt={8} borderTopWidth="1px" borderColor="gray.200" p={4} w="100%">
          <VStack align="center">
            {/* Footer Header */}
            <Heading as="h3" size="lg" color="teal.500" mb={2}>
              Juggle
            </Heading>

            {/* Copyright */}
            <Text fontSize="sm" mb={4}>
              &copy; 2024 Aditya Singh
            </Text>

            {/* Social Links */}
            <HStack spacing={4}>
              <SocialLink icon={<Icon as={FaGithub} boxSize={6} />} label="GitHub" href="https://github.com/aditya172926" />
              <SocialLink icon={<Icon as={FaLinkedin} boxSize={6} />} label="LinkedIn" href="https://www.linkedin.com/in/aditya-26/" />
              <SocialLink icon={<Icon as={FaTwitter} boxSize={6} />} label="Twitter" href="https://twitter.com/aditya26sg" />
            </HStack>
          </VStack>
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

interface SocialLinkProps {
  icon: React.ReactElement;
  label: string;
  href: string;
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

const SocialLink: React.FC<SocialLinkProps> = ({ icon, label, href }) => {
  return (
    <Link href={href} isExternal>
      <IconButton
        aria-label={label}
        icon={icon}
        size="lg"
        colorScheme="teal"
        variant="ghost"
      />
    </Link>
  );
};
