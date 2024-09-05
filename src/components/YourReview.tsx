import { Textarea, Button } from '@mantine/core';

export default function YourReview() {
  return (
    <div>
    <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        autosize
        mt="xs"
        minRows={3}
    ></Textarea>
    <Button type="submit" mt="xs" color="orange">
      Submit Review
    </Button>
    </div>
  )
}