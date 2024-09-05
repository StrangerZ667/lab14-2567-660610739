"use client";
import { Container, Text, Title, Rating, Textarea, Button, Divider, Group, Pagination} from "@mantine/core";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>
        Food Review 🍕
      </Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" />
      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      ></Textarea>
      <Button type="submit" mt="xs" color="orange">
        Submit Review
      </Button>
      <Divider my="sm"></Divider>
      <Group justify="center">
        <Title order={4}>
          Elon Musk
        </Title>
        <Rating size="sm" value={5} readOnly />
      </Group>
      <Text ta="center">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm"></Divider>
      <Group justify="center">
        <Title order={4} ta="end">
          Mark Zuck
        </Title>
        <Rating size="sm" value={4} readOnly />
      </Group>
      <Text ta="center">
        My favourite part is pepperoni
      </Text>
      <Group justify="center">
        <Pagination mt="md" total={20} color="orange" />
      </Group>
      <Text ta="center" my="sm">
        Copyright © 2024 Kanchai Khumdee 660610739
      </Text>
    </Container>
  );
}
