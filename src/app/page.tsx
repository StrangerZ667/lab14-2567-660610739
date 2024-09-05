"use client";
import { Container, Title, Pagination, Group } from "@mantine/core";
import YourRating from "@components/YourRating";
import YourReview from "@components/YourReview";
import CommentReview from "@components/CommentReview";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>
        Food Review 🍕
      </Title>
    <YourRating />
    <YourReview />
    <CommentReview name="Elon Musk" rating={5} review="Best pizza in this world. I give you X score." />
    <CommentReview name="Mark Zuck" rating={4} review="My favourite part is pepperoni" />
      <Group justify="center">
        <Pagination mt="md" total={20} color="orange" />
      </Group>
    <Footer year={2024} name="Kanchai Khumdee" studentId="660610739" />
    </Container>
  );
}
