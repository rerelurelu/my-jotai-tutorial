import { loadableAtom, queryAtom } from '@/atom/queryAtom';
import { Box, Button, FormControl, FormLabel, Input, Spinner } from '@chakra-ui/react';
import { useAtomValue, useSetAtom } from 'jotai';
import Image from 'next/image';
import { ChangeEvent, FC, useState } from 'react';

const Contents: FC = () => {
  const { state, data } = useAtomValue(loadableAtom);

  if (state === 'loading') {
    return <Spinner></Spinner>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <Image src={data.img} alt={data.name} width={300} height={300} />
      <p>{data.name}</p>
    </>
  );
};

const SearchForm: FC = () => {
  const [inputNumber, setInputNumber] = useState<number>(0);
  const setQuery = useSetAtom(queryAtom);
  const search = () => {
    setQuery(inputNumber);
  };

  const changeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setInputNumber(Number(e.target.value));
  };

  return (
    <>
      <FormControl>
        <FormLabel>No.</FormLabel>
        <Input type="number" min={1} onChange={changeNumber} />
      </FormControl>
      <Button onClick={search}>Search</Button>
    </>
  );
};

export default function Home() {
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
      <Box w="80%">
        <Contents />
        <SearchForm />
      </Box>
    </Box>
  );
}
