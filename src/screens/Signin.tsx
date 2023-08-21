import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Center, Image, Text, VStack } from 'native-base';

export function Signin() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando em uma academia"
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <LogoSvg />
        <Text color="gray.100" fontSize="sm">
          Treine sua mente e seu corpo
        </Text>
      </Center>
    </VStack>
  );
}
