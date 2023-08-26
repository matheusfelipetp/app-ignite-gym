import { HistoryDTO } from '@dtos/HistoryDTO';
import { HStack, Heading, Text, VStack } from 'native-base';

type PropsHistoryCard = {
  history: HistoryDTO;
};

export function HistoryCard({ history }: PropsHistoryCard) {
  return (
    <HStack
      w="full"
      px={4}
      py={4}
      mb={3}
      bg="gray.600"
      rounded="md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr={5} flex={1}>
        <Heading
          color="white"
          fontSize="md"
          fontFamily="heading"
          textTransform="capitalize"
          numberOfLines={1}
        >
          {history.group}
        </Heading>

        <Text color="gray.100" fontSize="lg" numberOfLines={1}>
          {history.name}
        </Text>
      </VStack>

      <Text color="gray.300" fontSize="md">
        {history.hour}
      </Text>
    </HStack>
  );
}
