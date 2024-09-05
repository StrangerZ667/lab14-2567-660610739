import { Title, Rating } from "@mantine/core";

export default function YourRating() {
  return (
    <div>
      <Title order={4} fw="bold" mt="sm">
        Your rating
      </Title>
      <Rating size="lg" mb="sm"/>
    </div>
  )
}