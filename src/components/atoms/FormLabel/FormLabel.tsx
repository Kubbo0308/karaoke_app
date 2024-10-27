import { Flex, Text } from "@chakra-ui/react";

interface FormLabelProps {
  label: string;
  required?: boolean;
}

export const FormLabel = (props: FormLabelProps) => {
  const { label, required = true } = props;
  return (
    <Flex gap={2}>
      <Text fontSize="16px" fontWeight={600} lineHeight={1.8}>
        {label}
      </Text>
      <Text
        color="white"
        bg={required ? "blue.500" : "gray.500"}
        borderRadius={4}
        w={10}
        textAlign="center"
        my="auto"
        fontSize="14px"
        fontWeight={800}
        lineHeight={1.8}
        height="25.2px"
      >
        {required ? "必須" : "任意"}
      </Text>
    </Flex>
  );
};
