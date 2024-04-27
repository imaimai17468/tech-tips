import { Text } from "@mantine/core";

export const Logo: React.FC = () => {
  return (
    <Text
      size="xl"
      fw={700}
      variant="gradient"
      gradient={{ from: "blue", to: "cyan", deg: 90 }}
    >
      Tech Tips
    </Text>
  );
};
