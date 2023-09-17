import { countAtom } from '@/atom/countAtom';
import { Box, Button } from '@chakra-ui/react';
import { useAtom } from 'jotai';

export default function Home() {
  const [count, setCount] = useAtom(countAtom);
  const increment = () => {
    setCount((value) => value + 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <Box
      w="100vw"
      pt={10}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDir={'column'}
      gap={4}
    >
      <p>{count}</p>
      <Button onClick={increment}>+</Button>
      <Button onClick={reset}>Reset</Button>
    </Box>
  );
}
