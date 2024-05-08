"use client";
import { Button, Flex, Text } from "@mantine/core";
import { DownloadIcon } from "@radix-ui/react-icons";

export const TipSaveButton: React.FC = () => {
  return (
    <Button w="fit-content" variant="outline">
      <Flex align="center" gap={4}>
        <Text>Save</Text>
        <DownloadIcon />
      </Flex>
    </Button>
  );
};
