"use client";
import { Icon, Image, RatingGroup } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import {
  LuMenu,
  LuGlobe,
  LuArrowRight,
  LuStarOff,
  LuTrophy,
  LuSpeech,
  LuLightbulb,
  LuClock,
  LuPause,
  LuPlay,
} from "react-icons/lu";
import { Box } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { LuShoppingCart, LuChevronRight } from "react-icons/lu";
import { Heading, Dialog } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { useState } from "react";
import { Button, CloseButton, Drawer, HStack, Portal } from "@chakra-ui/react";

import { Carousel, Flex } from "@chakra-ui/react";
import { LuChevronLeft } from "react-icons/lu";
import { Accordion, Span } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { HiUsers } from "react-icons/hi";
import { InputGroup, Input, Card, Stack } from "@chakra-ui/react";
import { Text, List, Grid, GridItem } from "@chakra-ui/react";

const items = [
  {
    value: "a",
    title: "Composting & Soil Health",
    text: "Turn kitchen scraps into nutrient-rich soil. Beginner-friendly, year-round.",
  },
  {
    value: "b",
    title: "Container & Balcony Gardening",
    text: "Maximise small spaces with pots, vertical planters and smart watering.",
  },
  {
    value: "c",
    title: "Seasonal Veg Growing",
    text: "Plan, plant and harvest the right crops for each season in the city.",
  },
  {
    value: "d",
    title: "Pollinators & Bees",
    text: "Attract pollinators and learn the basics of urban beekeeping.",
  },
  {
    value: "e",
    title: "Hydroponics & Indoor Systems",
    text: "Soilless growing for apartments — efficient, clean, and productive.",
  },
  {
    value: "f",
    title: "Seed Saving & Plant Breeding",
    text: "Preserve varieties and start your own resilient seed collection.",
  },
];

export default function Home() {
  const placement = "start";
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Thanks! We'll send updates to ${newsletterEmail || "your email"}.`);
    setNewsletterEmail("");
  };

  return (
    <Box bg="white">
      <header>
        <Box
          boxShadow="sm"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack
            pt={{ base: "3", md: "5" }}
            pb={{ base: "3", md: "0" }}
            wrap="wrap"
          >
            <Drawer.Root key={placement} placement={placement}>
              <Drawer.Trigger asChild>
                <IconButton
                  color="#2F855A"
                  size={{ base: "xs", md: "xs", lg: "xl", xl: "2xl" }}
                  aria-label="Open menu"
                >
                  <LuMenu />
                </IconButton>
              </Drawer.Trigger>
              <Portal>
                <Drawer.Backdrop />

                <Drawer.Positioner>
                  <Drawer.Content>
                    <Drawer.Body
                      divideY="1px"
                      pb={5}
                      divideColor="gray.300"
                      pl={0}
                      className="text-black"
                      bg={"white"}
                    >
                      <List.Root
                        cursor="pointer"
                        margin="0"
                        pl={3}
                        listStyleType="none"
                        color="green.700"
                        fontSize="lg"
                        as="ul"
                      >
                        <List.Item fontSize="md" pt={5} pb={5}>
                          About GreenRoots
                        </List.Item>
                        <List.Item fontSize="md" pb={5}>
                          Join the Co-op
                        </List.Item>
                        <List.Item fontSize="md" pb={5}>
                          Workshops & Events
                        </List.Item>
                      </List.Root>
                      <List.Root
                        cursor="pointer"
                        pl={3}
                        color="gray.600"
                        listStyleType="none"
                        fontSize="lg"
                      >
                        <List.Item
                          fontSize="sm"
                          cursor="text"
                          color="gray.500"
                          fontWeight="semibold"
                          mt={2}
                          ml={5}
                          pb={3}
                        >
                          Explore by Goal
                        </List.Item>
                        <List.Item
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          Grow your own food <LuChevronRight />{" "}
                        </List.Item>
                        <List.Item
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          Start a balcony garden <LuChevronRight />{" "}
                        </List.Item>
                        <List.Item
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          Learn composting <LuChevronRight />{" "}
                        </List.Item>
                        <List.Item
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          Volunteer at a plot <LuChevronRight />{" "}
                        </List.Item>
                      </List.Root>
                      <List.Root
                        cursor="pointer"
                        pl={3}
                        color="gray.600"
                        listStyleType="none"
                        fontSize="lg"
                      >
                        <List.Item
                          cursor="text"
                          fontSize="sm"
                          color="gray.500"
                          fontWeight="semibold"
                          mt={2}
                          ml={5}
                          pb={3}
                        >
                          Popular Topics
                        </List.Item>
                        <List.Item
                          cursor="pointer"
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          Vegetable Gardening <LuChevronRight />{" "}
                        </List.Item>
                        <List.Item
                          cursor="pointer"
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          Compost & Soil Health <LuChevronRight />{" "}
                        </List.Item>
                        <List.Item
                          cursor="pointer"
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          Urban Beekeeping <LuChevronRight />
                        </List.Item>
                        <List.Item
                          cursor="pointer"
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          Rainwater Harvesting <LuChevronRight />
                        </List.Item>
                        <List.Item
                          cursor="pointer"
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          Farm-to-Table Cooking <LuChevronRight />
                        </List.Item>
                        <List.Item
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          Seasonal Planting <LuChevronRight />{" "}
                        </List.Item>
                        <List.Item
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          Seed Saving <LuChevronRight />{" "}
                        </List.Item>
                        <List.Item
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          Community Projects <LuChevronRight />{" "}
                        </List.Item>
                        <List.Item
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          Tool Library <LuChevronRight />{" "}
                        </List.Item>
                        <List.Item
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          All categories <LuChevronRight />{" "}
                        </List.Item>
                      </List.Root>
                      <List.Root
                        cursor="pointer"
                        pl={3}
                        color="gray.600"
                        listStyleType="none"
                        fontSize="lg"
                      >
                        <List.Item
                          cursor="text"
                          fontSize="sm"
                          color="gray.500"
                          fontWeight="semibold"
                          mt={2}
                          ml={5}
                          pb={3}
                        >
                          More from GreenRoots
                        </List.Item>
                        <List.Item
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          GreenRoots Store <LuChevronRight />
                        </List.Item>
                        <List.Item
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          Get the app <LuChevronRight />{" "}
                        </List.Item>
                        <List.Item
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          Invite neighbors <LuChevronRight />{" "}
                        </List.Item>
                        <List.Item
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          Help and Support <LuChevronRight />{" "}
                        </List.Item>
                        <List.Item
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          fontSize="md"
                          pb={3}
                        >
                          <Button
                            borderColor="green.700"
                            fontSize="md"
                            pl={3}
                            pr={3}
                            color="green.700"
                            mt={2}
                          >
                            <LuGlobe />
                            English
                          </Button>{" "}
                        </List.Item>
                      </List.Root>
                    </Drawer.Body>

                    <Drawer.CloseTrigger top="5" insetEnd="-12" asChild>
                      <CloseButton
                        bg={"white"}
                        rounded="full"
                        color="#154216"
                        size="sm"
                      />
                    </Drawer.CloseTrigger>
                  </Drawer.Content>
                </Drawer.Positioner>
              </Portal>
            </Drawer.Root>
          </HStack>
          <Heading
            display="flex"
            alignItems="center"
            fontWeight="light"
            color="#2F855A "
            size="2xl"
          >
            GreenRoots
            <Image
              src="/images/eco-conscious-consumer-icon-vector-image-can-be-used-world-environment-day_120816-111232.avif"
              alt="Hero"
              width="100%"
              height="30px"
              objectFit="cover"
              objectPosition="50% 30%"
              display="block"
              loading="lazy"
              ml={1}
            />
          </Heading>
          <div className="flex">
            <div>
              <Dialog.Root size="full" motionPreset="slide-in-bottom">
                <Dialog.Trigger asChild>
                  <IconButton
                    color="#2F855A "
                    size={{ base: "xs", md: "xs", lg: "xl", xl: "2xl" }}
                    aria-label="Search"
                  >
                    <LuSearch />
                  </IconButton>
                </Dialog.Trigger>
                <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner>
                    <Dialog.Content>
                      <Dialog.Body bg={"white"}>
                        <Input
                          type="text"
                          color="black"
                          width={{
                            base: "90%",
                            md: "90%",
                            lg: "90%",
                            xl: "90%",
                          }}
                          placeholder="Search workshops, plants, tools..."
                        />
                      </Dialog.Body>
                      <Dialog.CloseTrigger bg="gray.300" asChild>
                        <CloseButton color="black" size="sm" />
                      </Dialog.CloseTrigger>
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
            </div>
            <div>
              {" "}
              <IconButton
                color="#2F855A "
                size={{ base: "xs", md: "xs", lg: "xl", xl: "2xl" }}
                aria-label="Cart"
              >
                <LuShoppingCart />
              </IconButton>
            </div>
          </div>
        </Box>
      </header>
      <main className="text-black ">
        <section>
          <article>
            <Card.Root
              boxShadow="sm"
              pl={{ base: "0", md: "5", lg: "14", xl: "32" }}
              pr={{ base: "0", md: "5", lg: "14", xl: "32" }}
              pt={{ base: "0", md: "5", lg: "14", xl: "28" }}
              border="none"
              bgColor="white"
              color="black"
              maxW="full"
              borderRadius="0"
              overflow="hidden"
            >
              <Box
                gapX={2}
                display={{ base: "block", md: "flex", lg: "flex" }}
                justifyContent="center"
                width="100%"
                height="270px"
                overflow="hidden"
                position="relative"
              >
                <Card.Root
                  display={{ base: "none", md: "block" }}
                  bgColor="white"
                  color="black"
                  maxW="45%"
                  border="none"
                  borderRadius="0"
                  overflow="hidden"
                >
                  <Card.Body p={3}>
                    <Card.Title
                      fontWeight="light"
                      color="#2F855A"
                      fontSize="2xl"
                    >
                      Grow together — city gardens for everyone{" "}
                    </Card.Title>
                    <Card.Description
                      mt={2}
                      fontSize={{ base: "base", md: "md", lg: "lg" }}
                      color="#1A202C"
                    >
                      Small spaces, big harvests. Workshops, tool-lending and
                      community plots to help every neighbor grow.
                    </Card.Description>
                  </Card.Body>
                  <Card.Footer p={3} display="flex" color="black">
                    <Button
                      color="white"
                      bgColor="#2F855A"
                      width="40%"
                      size="md"
                      variant="solid"
                      _hover={{ bg: "#276749", transform: "scale(1.05)" }}
                    >
                      Join the Co-op
                    </Button>
                    <Button
                      width="40%"
                      color="#2F855A"
                      borderColor="#2F855A"
                      _hover={{ bg: "#F6E05E", transform: "scale(1.05)" }}
                      variant="outline"
                      size="md"
                    >
                      Find a Workshop
                    </Button>
                  </Card.Footer>
                </Card.Root>
                <Image
                  src="/images/first_mainpic_light_theme.jpg"
                  alt="Hero"
                  w={{ base: "100%", md: "100%", lg: "100%", xl: "40%" }}
                  height="270px"
                  objectFit="cover"
                  objectPosition="50% 30%"
                  loading="lazy"
                  display="block"
                />
              </Box>
              <Card.Body display={{ base: "block", md: "none" }} p={3} gap="2">
                <Card.Title fontWeight="light" color="#2F855A" fontSize="2xl">
                  Grow together — city gardens for everyone
                </Card.Title>
                <Card.Description
                  mt={2}
                  fontSize={{ base: "base", md: "md", lg: "lg" }}
                  color="#1A202C"
                >
                  Small spaces, big harvests. Workshops, tool-lending and
                  community plots to help every neighbor grow.
                </Card.Description>
              </Card.Body>
              <Card.Footer
                display={{ base: "flex", md: "none" }}
                p={3}
                color="black"
                flexDir="column"
              >
                <Button
                  color="white"
                  bgColor="#2F855A"
                  width="full"
                  size="md"
                  variant="solid"
                >
                  Join the Co-op
                </Button>
                <Button
                  width="full"
                  color="#2F855A"
                  borderColor="#2F855A"
                  variant="outline"
                  size="md"
                >
                  Find a Workshop
                </Button>
                <br />
                <InputGroup endElement={<LuSearch />}>
                  <Input
                    borderColor="gray.400"
                    placeholder="What would you like to grow?"
                  />
                </InputGroup>
              </Card.Footer>
            </Card.Root>
          </article>
        </section>
        <section>
          <article>
            <Card.Root
              pl={{ base: "0", md: "5", lg: "14", xl: "60" }}
              pr={{ base: "0", md: "5", lg: "14", xl: "60" }}
              pt={{ base: "0", md: "5", lg: "14", xl: "28" }}
              bgColor="white"
              color="black"
              maxW="full"
              border="none"
              borderRadius="0"
              overflow="hidden"
            >
              <Card.Body p={3}>
                <Card.Title fontSize="2xl">
                  {" "}
                  <Heading
                    fontWeight="light"
                    color="#2F855A"
                    fontSize="3xl"
                    pb={4}
                    mt={5}
                  >
                    Nature in the neighbourhood
                  </Heading>
                </Card.Title>
                <Card.Description>
                  <Text
                    color="#1A202C"
                    textStyle="md"
                    mb={8}
                    fontSize={{ base: "base", md: "md", lg: "lg" }}
                  >
                    GreenRoots connects urban residents with tools, knowledge
                    and people to grow healthy food and vibrant green spaces.
                  </Text>
                  <Carousel.Root
                    display={{ base: "none", md: "none", lg: "block" }}
                    slideCount={properties.length}
                    slidesPerPage={3}
                    gap="3"
                  >
                    <HStack mb={2} justify="space-between">
                      <HStack>
                        <Carousel.PrevTrigger asChild>
                          <IconButton size="xs" variant="subtle">
                            <LuChevronLeft />
                          </IconButton>
                        </Carousel.PrevTrigger>
                        <Carousel.NextTrigger asChild>
                          <IconButton size="xs" variant="subtle">
                            <LuChevronRight />
                          </IconButton>
                        </Carousel.NextTrigger>
                      </HStack>
                    </HStack>
                    <Carousel.ItemGroup>
                      {properties.map((property, index) => (
                        <Carousel.Item key={property.id} index={index}>
                          <PropertyCard data={property} />
                        </Carousel.Item>
                      ))}
                    </Carousel.ItemGroup>
                  </Carousel.Root>
                  <Box display={{ lg: "none" }}>
                    <Grid
                      bg="white"
                      templateRows="repeat(3, 1fr)"
                      templateColumns="repeat(2, 1fr)"
                      gap={4}
                      p={3}
                      borderRadius={8}
                      boxShadow="md"
                    >
                      <GridItem
                        justifyContent="center"
                        borderRadius={8}
                        display="flex"
                        alignItems="center"
                      >
                        <Card.Root
                          pt={59}
                          boxShadow="sm"
                          w="full"
                          backgroundImage="url('/images/farm_school.webp')"
                          backgroundSize="cover"
                          backgroundPosition="center"
                          backgroundRepeat="no-repeat"
                        >
                          <Card.Body>
                            <Badge
                              color="#2F855A"
                              width="55px"
                              variant="solid"
                              colorPalette="white"
                            >
                              <HiUsers />
                              18
                            </Badge>
                            <Card.Title mt="2">Joint Schools</Card.Title>
                            <Card.Description>
                              <IconButton
                                color="#154216"
                                bgColor="#2F855A"
                                _hover={{ bg: "#276749" }}
                                size={"xs"}
                                aria-label="Explore"
                              >
                                <LuArrowRight />
                              </IconButton>
                            </Card.Description>
                          </Card.Body>
                        </Card.Root>
                      </GridItem>
                      <GridItem
                        justifyContent="center"
                        borderRadius={8}
                        display="flex"
                        alignItems="center"
                      >
                        <Card.Root
                          pt={59}
                          boxShadow="sm"
                          w="full"
                          backgroundImage="url('/images/farmers_in_training.webp')"
                          backgroundSize="cover"
                          backgroundPosition="center"
                          backgroundRepeat="no-repeat"
                        >
                          {" "}
                          <Card.Body>
                            <Badge
                              color="#2F855A"
                              width="55px"
                              variant="solid"
                              colorPalette="white"
                            >
                              <HiUsers />
                              350+
                            </Badge>
                            <Card.Title mt="2">In Training</Card.Title>
                            <Card.Description>
                              <IconButton
                                color="#154216"
                                bgColor="#2F855A"
                                _hover={{ bg: "#276749" }}
                                size={"xs"}
                                aria-label="Explore"
                              >
                                <LuArrowRight />
                              </IconButton>
                            </Card.Description>
                          </Card.Body>
                        </Card.Root>
                      </GridItem>
                      <GridItem
                        justifyContent="center"
                        borderRadius={8}
                        display="flex"
                        alignItems="center"
                      >
                        <Card.Root
                          pt={59}
                          boxShadow="sm"
                          w="full"
                          backgroundImage="url('/images/field_plots.webp')"
                          backgroundSize="cover"
                          backgroundPosition="center"
                          backgroundRepeat="no-repeat"
                        >
                          <Card.Body>
                            <Badge
                              color="#2F855A"
                              width="55px"
                              variant="solid"
                              colorPalette="white"
                            >
                              <HiUsers />
                              48
                            </Badge>
                            <Card.Title mt="2">Field Plots</Card.Title>
                            <Card.Description>
                              <IconButton
                                color="#154216"
                                bgColor="#2F855A"
                                _hover={{ bg: "#276749" }}
                                size={"xs"}
                                aria-label="Explore"
                              >
                                <LuArrowRight />
                              </IconButton>
                            </Card.Description>
                          </Card.Body>
                        </Card.Root>
                      </GridItem>
                      <GridItem
                        justifyContent="center"
                        borderRadius={8}
                        display="flex"
                        alignItems="center"
                      >
                        <Card.Root
                          pt={59}
                          boxShadow="sm"
                          w="full"
                          backgroundImage="url('/images/seeds_shared.jpeg')"
                          backgroundSize="cover"
                          backgroundPosition="center"
                          backgroundRepeat="no-repeat"
                        >
                          <Card.Body>
                            <Badge
                              color="#2F855A"
                              width="55px"
                              variant="solid"
                              colorPalette="white"
                            >
                              <HiUsers />
                              1.2k+
                            </Badge>
                            <Card.Title mt="2">Seeds Shared</Card.Title>
                            <Card.Description>
                              <IconButton
                                color="#154216"
                                bgColor="#2F855A"
                                _hover={{ bg: "#276749" }}
                                size={"xs"}
                                aria-label="Explore"
                              >
                                <LuArrowRight />
                              </IconButton>
                            </Card.Description>
                          </Card.Body>
                        </Card.Root>
                      </GridItem>
                      <GridItem
                        justifyContent="center"
                        borderRadius={8}
                        display="flex"
                        alignItems="center"
                      >
                        <Card.Root
                          pt={59}
                          boxShadow="sm"
                          w="full"
                          backgroundImage="url('/images/tools.webp')"
                          backgroundSize="cover"
                          backgroundPosition="center"
                          backgroundRepeat="no-repeat"
                        >
                          <Card.Body>
                            <Badge
                              color="#2F855A"
                              width="55px"
                              variant="solid"
                              colorPalette="white"
                            >
                              <HiUsers />
                              60+
                            </Badge>
                            <Card.Title mt="2">Tool Library</Card.Title>
                            <Card.Description>
                              <IconButton
                                color="#154216"
                                bgColor="#2F855A"
                                _hover={{ bg: "#276749" }}
                                size={"xs"}
                                aria-label="Explore"
                              >
                                <LuArrowRight />
                              </IconButton>
                            </Card.Description>
                          </Card.Body>
                        </Card.Root>
                      </GridItem>{" "}
                      <GridItem
                        justifyContent="center"
                        borderRadius={8}
                        display="flex"
                        alignItems="center"
                      >
                        <Card.Root
                          pt={59}
                          boxShadow="sm"
                          w="full"
                          backgroundImage="url('/images/volun.jpeg')"
                          backgroundSize="cover"
                          backgroundPosition="center"
                          backgroundRepeat="no-repeat"
                        >
                          <Card.Body>
                            <Badge
                              color="#2F855A"
                              width="55px"
                              variant="solid"
                              colorPalette="white"
                            >
                              <HiUsers />
                              34
                            </Badge>
                            <Card.Title mt="2">Volunteering</Card.Title>
                            <Card.Description>
                              <IconButton
                                color="#154216"
                                bgColor="#2F855A"
                                _hover={{ bg: "#276749" }}
                                size={"xs"}
                                aria-label="Explore"
                              >
                                <LuArrowRight />
                              </IconButton>
                            </Card.Description>
                          </Card.Body>
                        </Card.Root>
                      </GridItem>
                    </Grid>
                  </Box>
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </article>
        </section>
        <section>
          <article>
            <Box
              mt={5}
              pl={{ base: "3", md: "5", lg: "14", xl: "60" }}
              pr={{ base: "3", md: "5", lg: "14", xl: "60" }}
              pt={{ base: "0", md: "5", lg: "14", xl: "28" }}
              bg="white"
            >
              <Card.Root
                boxShadow="md"
                bg="#2F855A"
                color="black"
                pb={{ lg: "10" }}
                pt={{ lg: "10" }}
                maxW="full"
                border="none"
                borderRadius={15}
                overflow="hidden"
              >
                <Card.Body gap="2">
                  <Card.Description
                    gap={8}
                    display={{ lg: "flex" }}
                    justifyContent="center"
                    fontSize={{ base: "base", md: "md" }}
                    color="#F7FAFC"
                  >
                    <Box w={{ lg: "1/2" }}>
                      <Heading
                        fontWeight="light"
                        color="#F7FAFC"
                        fontSize="2xl"
                      >
                        GreenRoots Membership
                      </Heading>{" "}
                      <br />
                      Support local growing with a membership — get access to
                      workshops, plot bookings, plant clinics and our seed
                      library.
                      <List.Root
                        color="white"
                        mt={6}
                        gap="2"
                        variant="plain"
                        align="center"
                      >
                        <List.Item>
                          <List.Indicator asChild color="#F7FAFC">
                            <LuStarOff />
                          </List.Indicator>
                          Monthly workshops{" "}
                        </List.Item>
                        <List.Item>
                          <List.Indicator asChild color="#F7FAFC">
                            <LuTrophy />
                          </List.Indicator>
                          Priority plot bookings{" "}
                        </List.Item>
                        <List.Item>
                          <List.Indicator asChild color="#F7FAFC">
                            <LuSpeech />
                          </List.Indicator>
                          Local plant clinics{" "}
                        </List.Item>
                        <List.Item>
                          <List.Indicator asChild color="#F7FAFC">
                            <LuLightbulb />
                          </List.Indicator>
                          Seed library access{" "}
                        </List.Item>
                      </List.Root>
                      <Button
                        mt={4}
                        color="black"
                        fontSize={{ base: "base", md: "md", lg: "lg" }}
                        bgColor="#F6E05E"
                        _hover={{
                          color: "white",
                          bg: "#276749",
                          transform: "scale(1.05)",
                        }}
                        width={{ base: "100%", md: "100%", lg: "50%" }}
                        size="md"
                        variant="solid"
                      >
                        Learn more
                      </Button>
                      <Text
                        mt={2}
                        fontSize={{ base: "base", md: "md", lg: "lg" }}
                        color="gray.200"
                      >
                        Starting at ₦1,200/month
                      </Text>
                    </Box>
                    <Box
                      pt={2}
                      display="flex"
                      color="black"
                      alignItems="flex-start"
                      flexDir="column"
                    >
                      <Box width="100%" overflow="hidden" position="relative">
                        <Image
                          borderRadius={8}
                          src="/images/seeds.webp"
                          alt="Seedlings"
                          width="100%"
                          objectFit="cover"
                          display="block"
                          loading="lazy"
                        />
                      </Box>
                    </Box>
                  </Card.Description>
                </Card.Body>
              </Card.Root>
            </Box>
            <Card.Root
              pl={{ base: "0", md: "5", lg: "14", xl: "60" }}
              pr={{ base: "0", md: "5", lg: "14", xl: "60" }}
              pt={{ base: "0", md: "5", lg: "14", xl: "28" }}
              mt={5}
              bgColor="white"
              color="black"
              maxW="full"
              border="solid"
              borderColor="white"
              borderRadius="0"
              overflow="hidden"
            >
              <Card.Body gap="2">
                <Card.Title
                  fontWeight="light"
                  textDecoration="underline"
                  textDecorationColor="#2F855A"
                  color="#2F855A"
                  mb={1}
                  fontSize="2xl"
                >
                  Practical skills for everyday growing
                </Card.Title>
                <Card.Description color="#1A202C" fontSize="md">
                  Hands-on workshops, simple guides, and friendly mentors to
                  help your garden thrive.{" "}
                </Card.Description>
              </Card.Body>
              <Card.Footer display="flex" color="#1A202C" flexDir="column">
                <Accordion.Root
                  variant="plain"
                  size="lg"
                  multiple
                  defaultValue={["b"]}
                >
                  {items.map((item, index) => (
                    <Accordion.Item
                      fontSize={{ base: "base", md: "md", lg: "lg" }}
                      key={index}
                      value={item.value}
                    >
                      <Accordion.ItemTrigger>
                        <Span color="#1A202C" flex="1">
                          {item.title}
                        </Span>
                        <Accordion.ItemIndicator />
                      </Accordion.ItemTrigger>
                      <Accordion.ItemContent>
                        <Accordion.ItemBody
                          fontSize={{ base: "base", md: "md", lg: "lg" }}
                        >
                          {item.text}
                        </Accordion.ItemBody>
                      </Accordion.ItemContent>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </Card.Footer>
            </Card.Root>
          </article>
        </section>
        <section>
          <article>
            <Carousel.Root
              autoplay={{ delay: 6000 }}
              maxW="xl"
              bg="white"
              spacing="48px"
              slidesPerPage={1}
              slideCount={items.length}
              mx="auto"
              mt={5}
            >
              <Text
                textDecoration="underline"
                textDecorationColor="#154216"
                textAlign="center"
                color="#154216"
                fontWeight="light"
                textStyle="xl"
                mb="4"
              >
                Upcoming events & pop-ups
              </Text>
              <Carousel.ItemGroup>
                {items.map((itm, index) => (
                  <Carousel.Item key={index} index={index}>
                    <Box
                      w="100%"
                      height="fit-content"
                      rounded="lg"
                      fontSize="2.5rem"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDir="column"
                      p={4}
                    >
                      <Heading color="#154216" size="lg">
                        {itm.title}
                      </Heading>
                      <Text mt={3} textAlign="center">
                        {itm.text}
                      </Text>
                      <Button
                        color="#154216"
                        _hover={{ bg: "#F6E05E", transform: "scale(1.05)" }}
                        mt={4}
                        variant="outline"
                        size="sm"
                      >
                        Join Event
                      </Button>
                    </Box>
                  </Carousel.Item>
                ))}
              </Carousel.ItemGroup>

              <Carousel.Control justifyContent="center" gap="4">
                <Carousel.PrevTrigger asChild>
                  <IconButton color="black" size="xs" variant="ghost">
                    <LuChevronLeft />
                  </IconButton>
                </Carousel.PrevTrigger>

                <Carousel.AutoplayTrigger asChild>
                  <IconButton
                    color="black"
                    aria-label="Toggle autoplay"
                    size="sm"
                    variant="ghost"
                  >
                    <Carousel.AutoplayIndicator
                      paused={<LuPause />}
                      play={<LuPlay />}
                    />
                  </IconButton>
                </Carousel.AutoplayTrigger>
                <Carousel.NextTrigger asChild>
                  <IconButton color="black" size="xs" variant="ghost">
                    <LuChevronRight />
                  </IconButton>
                </Carousel.NextTrigger>
              </Carousel.Control>
            </Carousel.Root>
          </article>
        </section>
        <section>
          <article>
            <Box
              p={3}
              bg="white"
              pl={{ base: "3", md: "5", lg: "14", xl: "60" }}
              pr={{ base: "3", md: "5", lg: "14", xl: "60" }}
              pt={{ base: "0", md: "5", lg: "14", xl: "28" }}
            >
              <Card.Root
                boxShadow="sm"
                bg="#2F855A"
                color="black"
                maxW="full"
                border="none"
                borderRadius={15}
                overflow="hidden"
              >
                <Card.Body gap="2">
                  <Card.Title
                    fontWeight="light"
                    color="#F7FAFC"
                    pb={1}
                    fontSize="2xl"
                  >
                    Learn with our public programs
                  </Card.Title>
                  <Card.Description
                    color="#F7FAFC"
                    fontSize={{ base: "base", md: "md", lg: "lg" }}
                  >
                    Short practical series — composting, beekeeping, seasonal
                    planning and seed saving. Join a cohort or take a single
                    session. <br />
                    <Link href="...">
                      <Flex mt={6} fontWeight="bold" alignItems="center">
                        <Text mr={4}>See program dates & offerings </Text>
                        <LuArrowRight />
                      </Flex>
                    </Link>
                    <List.Root
                      display={{ base: "block", md: "flex" }}
                      color="white"
                      mt={6}
                      gap="4"
                      listStyleType="none"
                    >
                      <Box
                        gap={{ base: "0", md: "2" }}
                        h="fit-content"
                        display={{ base: "block", md: "flex" }}
                      >
                        <List.Item mt={1} w={{ md: "1/3" }}>
                          <Card.Root
                            bgColor="#15382a"
                            color="white"
                            maxW="full"
                            border="none"
                            borderRadius="3"
                          >
                            <Box
                              borderRadius={3}
                              height="270px"
                              overflow="hidden"
                              position="relative"
                            >
                              <Image
                                src="/images/compost.webp"
                                alt="Compost"
                                width="full"
                                height="270px"
                                display="block"
                              />
                            </Box>
                            <Card.Body w="fulll" p={3}>
                              <Card.Title fontSize="2xl">
                                Composting 101
                              </Card.Title>
                              <Card.Description color="gray.300">
                                Hands-on piles, worm bins and quick wins.{" "}
                              </Card.Description>
                            </Card.Body>
                          </Card.Root>
                        </List.Item>
                        <List.Item mt={1} w={{ md: "1/3" }}>
                          <Card.Root
                            bgColor="#15382a"
                            color="white"
                            maxW="full"
                            border="none"
                            borderRadius="3"
                          >
                            <Box
                              w="full"
                              borderRadius={3}
                              height="270px"
                              overflow="hidden"
                              position="relative"
                            >
                              <Image
                                src="/images/bee_keeping.webp"
                                alt="Bee_Keeping"
                                width="full"
                                height="270px"
                                display="block"
                              />
                            </Box>
                            <Card.Body p={3}>
                              <Card.Title fontSize="2xl">
                                Beekeeping Basics
                              </Card.Title>
                              <Card.Description color="gray.300">
                                Urban-friendly techniques and pollinator
                                gardens.{" "}
                              </Card.Description>
                            </Card.Body>
                          </Card.Root>{" "}
                        </List.Item>
                        <List.Item mt={1} w={{ md: "1/3" }}>
                          <Card.Root
                            bgColor="#15382a"
                            color="white"
                            maxW="full"
                            border="none"
                            borderRadius="3"
                            overflow="hidden"
                          >
                            <Box
                              width="100%"
                              borderRadius={3}
                              height="270px"
                              overflow="hidden"
                              position="relative"
                            >
                              <Image
                                src="/images/indoors.jpg"
                                alt="Hydroponics"
                                width="100%"
                                height="270px"
                                objectFit="cover"
                                display="block"
                              />
                            </Box>
                            <Card.Body p={3}>
                              <Card.Title fontSize="2xl">
                                Indoor Growing
                              </Card.Title>
                              <Card.Description color="gray.300">
                                Grow year-round with space-efficient systems.{" "}
                              </Card.Description>
                            </Card.Body>
                          </Card.Root>
                        </List.Item>
                      </Box>
                    </List.Root>
                  </Card.Description>
                </Card.Body>
              </Card.Root>
            </Box>
          </article>
        </section>
        <section>
          <article>
            <Card.Root
              bgColor="white"
              color="#2F855A"
              maxW="full"
              border="solid"
              borderColor="white"
              borderRadius="0"
              overflow="hidden"
              pl={{ base: "0", md: "5", lg: "14", xl: "60" }}
              pr={{ base: "0", md: "5", lg: "14", xl: "60" }}
              pt={{ base: "3", md: "5", lg: "14", xl: "28" }}
            >
              <Card.Body gap="2">
                <Card.Title fontSize="2xl">
                  Community initiatives — join a project
                </Card.Title>
                <Card.Description fontSize="md" color="#1A202C">
                  From school gardens to rooftop collectives, help build
                  resilient green spaces in your neighbourhood. <br />
                  <List.Root color="white" mt={6} gap="2" variant="plain">
                    <Box
                      gap={{ base: "0", md: "2" }}
                      display={{ base: "block", md: "flex" }}
                      alignItems={{ md: "center" }}
                    >
                      <List.Item mt={2} w={{ md: "1/3" }}>
                        <Card.Root
                          bgColor="white"
                          color="black"
                          maxW="full"
                          border="none"
                          borderRadius="3"
                          overflow="hidden"
                        >
                          <Box
                            width="100%"
                            borderRadius={3}
                            height="270px"
                            overflow="hidden"
                            position="relative"
                          >
                            <Image
                              src="/images/food-forest.webp"
                              alt="Food Forest"
                              width="1600px"
                              height="270px"
                              objectFit="cover"
                              display="block"
                            />
                          </Box>
                          <Heading mt={1} pl={1}>
                            Neighborhood Food Forest
                          </Heading>
                          <Card.Body p={1}>
                            <Card.Description>
                              <Stack direction="row">
                                <Badge
                                  variant="outline"
                                  bg="white"
                                  color="gray.500"
                                >
                                  {" "}
                                  <RatingGroup.Root
                                    count={1}
                                    defaultValue={1}
                                    size="sm"
                                    colorPalette="yellow"
                                  >
                                    <RatingGroup.HiddenInput />
                                    <RatingGroup.Control />
                                  </RatingGroup.Root>
                                  4.9
                                </Badge>
                                <Badge
                                  variant="outline"
                                  bg="white"
                                  color="gray.500"
                                >
                                  2.1K supporters
                                </Badge>
                                <Badge
                                  variant="outline"
                                  bg="white"
                                  color="gray.500"
                                >
                                  Ongoing
                                </Badge>
                              </Stack>{" "}
                            </Card.Description>
                          </Card.Body>
                        </Card.Root>
                      </List.Item>
                      <List.Item mt={2} w={{ md: "1/3" }}>
                        <Card.Root
                          bgColor="white"
                          color="black"
                          maxW="full"
                          border="none"
                          borderRadius="3"
                          overflow="hidden"
                        >
                          <Box
                            width="100%"
                            borderRadius={3}
                            height="270px"
                            overflow="hidden"
                            position="relative"
                          >
                            <Image
                              src="/images/school-garden.jpeg"
                              alt="School Garden"
                              width="1600px"
                              height="270px"
                              objectFit="cover"
                              display="block"
                            />
                          </Box>
                          <Heading mt={1} pl={1}>
                            School Garden Partnership
                          </Heading>
                          <Card.Body p={1}>
                            <Card.Description>
                              <Stack direction="row">
                                <Badge
                                  variant="outline"
                                  bg="white"
                                  color="gray.500"
                                >
                                  {" "}
                                  <RatingGroup.Root
                                    count={1}
                                    defaultValue={1}
                                    size="sm"
                                    colorPalette="yellow"
                                  >
                                    <RatingGroup.HiddenInput />
                                    <RatingGroup.Control />
                                  </RatingGroup.Root>
                                  4.8
                                </Badge>
                                <Badge
                                  variant="outline"
                                  bg="white"
                                  color="gray.500"
                                >
                                  540 volunteers
                                </Badge>
                                <Badge
                                  variant="outline"
                                  bg="white"
                                  color="gray.500"
                                >
                                  Seasonal
                                </Badge>
                              </Stack>{" "}
                            </Card.Description>
                          </Card.Body>
                        </Card.Root>{" "}
                      </List.Item>

                      <List.Item mt={2} w={{ md: "1/3" }}>
                        <Card.Root
                          bgColor="white"
                          color="black"
                          maxW="full"
                          border="none"
                          borderRadius="3"
                          overflow="hidden"
                        >
                          <Box
                            width="100%"
                            borderRadius={3}
                            height="270px"
                            overflow="hidden"
                            position="relative"
                          >
                            <Image
                              src="/images/rooftop.webp"
                              alt="School Garden"
                              width="1600px"
                              height="270px"
                              objectFit="cover"
                              display="block"
                            />
                          </Box>
                          <Heading mt={1} pl={1}>
                            Community Rooftop Collective
                          </Heading>
                          <Card.Body p={1}>
                            <Card.Description>
                              <Stack direction="row">
                                <Badge
                                  variant="outline"
                                  bg="white"
                                  color="gray.500"
                                >
                                  {" "}
                                  <RatingGroup.Root
                                    count={1}
                                    defaultValue={1}
                                    size="sm"
                                    colorPalette="yellow"
                                  >
                                    <RatingGroup.HiddenInput />
                                    <RatingGroup.Control />
                                  </RatingGroup.Root>
                                  4.7
                                </Badge>
                                <Badge
                                  variant="outline"
                                  bg="white"
                                  color="gray.500"
                                >
                                  50 members
                                </Badge>
                                <Badge
                                  variant="outline"
                                  bg="white"
                                  color="gray.500"
                                >
                                  6 rooftopsites
                                </Badge>
                              </Stack>{" "}
                            </Card.Description>
                          </Card.Body>
                        </Card.Root>{" "}
                      </List.Item>
                    </Box>
                  </List.Root>
                </Card.Description>
              </Card.Body>
              <Card.Footer bgColor="white"></Card.Footer>
            </Card.Root>
            <Heading bgColor="white">
              <Link
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="#2F855A"
                _hover={{ color: "#276749" }}
                href="..."
              >
                {" "}
                <p>All community projects</p> <LuArrowRight />
              </Link>
            </Heading>
          </article>
        </section>
      </main>
      <Box
        as="footer"
        bg="#2F855A "
        borderColor="gray.200"
        mt={8}
        px={6}
        py={10}
      >
        <Grid
          templateColumns={["1fr", "repeat(4, 1fr)"]}
          gap={6}
          maxW="1200px"
          mx="auto"
        >
          <Box>
            <Heading color="#F7FAFC" size="md" mb={3}>
              GreenRoots
            </Heading>
            <Text fontSize="sm" color="#F7FAFC" mb={3}>
              Local gardens, shared knowledge. We help city dwellers grow food,
              build community and steward urban nature.
            </Text>
            <HStack gap={2}>
              <IconButton size="sm" variant="ghost" />
              <IconButton size="sm" variant="ghost" />
              <IconButton size="sm" variant="ghost" />
            </HStack>
          </Box>

          <Box>
            <Heading color="#F7FAFC" size="sm" mb={3}>
              Explore
            </Heading>
            <List.Root listStyleType="none" pl={0}>
              <List.Item>
                <Link href="..." color="#F7FAFC">
                  Workshops
                </Link>
              </List.Item>
              <List.Item>
                <Link href="..." color="#F7FAFC">
                  Community Projects
                </Link>
              </List.Item>
              <List.Item>
                <Link href="..." color="#F7FAFC">
                  Tool Library
                </Link>
              </List.Item>
              <List.Item>
                <Link href="..." color="#F7FAFC">
                  Seed Library
                </Link>
              </List.Item>
            </List.Root>
          </Box>

          <Box>
            <Heading color="#F7FAFC" size="sm" mb={3}>
              Get Involved
            </Heading>
            <List.Root listStyleType="none" pl={0}>
              <List.Item>
                <Link href="..." color="#F7FAFC">
                  Volunteer
                </Link>
              </List.Item>
              <List.Item>
                <Link href="..." color="#F7FAFC">
                  Partner with us
                </Link>
              </List.Item>
              <List.Item>
                <Link href="..." color="#F7FAFC">
                  Donate
                </Link>
              </List.Item>
              <List.Item>
                <Link href="..." color="#F7FAFC">
                  Careers
                </Link>
              </List.Item>
            </List.Root>
          </Box>

          <Box>
            <Heading color="#F7FAFC" size="sm" mb={3}>
              Newsletter
            </Heading>
            <Text fontSize="sm" color="#F7FAFC" mb={3}>
              Get monthly tips, events and seed swaps.
            </Text>
            <HStack>
              <Input
                aria-label="Email address"
                placeholder="you@email.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                size="sm"
              />
              <Button
                _hover={{ bg: "#F6E05E", transform: "scale(1.05)" }}
                bgColor="#F7FAFC"
                size="sm"
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </HStack>
            <Text fontSize="xs" color="gray.400" mt={3}>
              We respect your privacy — unsubscribe anytime.
            </Text>
          </Box>
        </Grid>
        <Box
          maxW="1200px"
          mx="auto"
          mt={8}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Text fontSize="sm" color="gray.400">
            © {new Date().getFullYear()} GreenRoots. All rights reserved.
          </Text>
          <HStack gap={4}>
            <Link href="..." color="gray.400" fontSize="sm">
              Privacy
            </Link>
            <Link href="..." color="gray.400" fontSize="sm">
              Terms
            </Link>
            <Link
              href="mailto:hello@greenroots.example"
              color="gray.400"
              fontSize="sm"
            >
              Contact
            </Link>
          </HStack>
        </Box>{" "}
      </Box>
    </Box>
  );
}
interface PropertyCardProps {
  data: Property;
}

const PropertyCard = ({ data }: PropertyCardProps) => (
  <Stack gap="3">
    <Box position="relative">
      <Image
        src={data.image}
        alt={data.title}
        rounded="l2"
        w="full"
        h="200px"
        objectFit="cover"
        draggable={false}
      />
    </Box>
    <Stack gap="1">
      <Span
        display="flex"
        alignItems="center"
        fontSize={{ base: "base", md: "md", lg: "lg" }}
        color="#2F855A"
        _hover={{ color: "#276749" }}
        cursor="pointer"
      >
        {data.title}{" "}
        <IconButton color="#154216" size={"xs"} aria-label="Explore">
          <LuArrowRight />
        </IconButton>
      </Span>
    </Stack>
  </Stack>
);

interface Property {
  id: number;
  title: string;

  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Joint Schools",

    image: "images/farm_school.webp",
  },
  {
    id: 2,
    title: "In Training",

    image: "images/farmers_in_training.webp",
  },
  {
    id: 3,
    title: "Field Plots",

    image: "images/field_plots.webp",
  },
  {
    id: 4,
    title: "Seeds Shared",

    image: "images/seeds_shared.jpeg",
  },
  {
    id: 5,
    title: "Tool Library",

    image: "images/tools.webp",
  },
  {
    id: 6,
    title: "Volunteering",

    image: "images/volun.jpeg",
  },
];
