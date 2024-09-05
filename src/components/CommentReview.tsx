import { Title, Divider, Group, Rating, Text } from '@mantine/core';
import { CommentReviewProps } from '@lib/types';

export default function CommentReview({ name, rating, review }: CommentReviewProps) {
  return (
    <div>
      <Divider my="sm"/>
      <Group justify='center'>
        <Title order={4}>
          {name}
        </Title>
        <Rating value = {rating} />
      </Group>
      <Text ta="center" c="dimmed" size="md">
        {review}
      </Text>
    </div>
  );
}