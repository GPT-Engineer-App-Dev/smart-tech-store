import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, VStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    image: "/images/laptop.jpg",
    price: "$999",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest smartphone with cutting-edge features.",
    image: "/images/smartphone.jpg",
    price: "$799",
  },
  {
    id: 3,
    name: "Tablet",
    description: "Portable and powerful tablet for work and play.",
    image: "/images/tablet.jpg",
    price: "$499",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <Box>
          <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
          <Link to="/products">Products</Link>
        </Box>
      </Flex>
      <VStack spacing={8} mt={8}>
        <Heading as="h1" size="2xl">Welcome to ElectroShop</Heading>
        <Text fontSize="lg">Your one-stop shop for the latest electronics.</Text>
      </VStack>
      <Heading as="h2" size="xl" mt={10} mb={6}>Featured Products</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <Heading as="h3" size="md">{product.name}</Heading>
              <Text mt={4}>{product.description}</Text>
              <Text mt={4} fontWeight="bold">{product.price}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;