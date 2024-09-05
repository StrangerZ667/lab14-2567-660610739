import { Text } from "@mantine/core";
import { FooterProps } from "@lib/types";

export default function Footer({year,name,studentId}: FooterProps) {
  return (
    <div>
      <Text ta="center" my="sm" c="gray" size="md">
        <p>Copyright © {year} {name} {studentId}</p>
      </Text>
    </div>
  );
}
