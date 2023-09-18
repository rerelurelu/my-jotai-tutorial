import { loadableAtom, queryAtom } from '@/atom/queryAtom';
import { Box, Button, FormControl, Input, Spinner, VStack } from '@chakra-ui/react';
import { useAtomValue, useSetAtom } from 'jotai';
import Image from 'next/image';
import { ChangeEvent, FC, useState } from 'react';

const Contents: FC = () => {
  const { state, data } = useAtomValue(loadableAtom);

  if (state === 'loading') {
    return (
      <Box h={'224px'} w={'224px'} display={'grid'} placeItems={'center'}>
        <Spinner size={'xl'} />
      </Box>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <VStack>
      <Image src={data.img} alt={data.name} width={200} height={200} />
      <div>{data.name}</div>
    </VStack>
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
    <VStack w={'400px'} gap={4}>
      <FormControl>
        <Input
          type="number"
          min={1}
          onChange={changeNumber}
          placeholder="No."
          onKeyDown={(e) => e.code === 'Enter' && search()}
        />
      </FormControl>
      <Button type="button" onClick={search}>
        Search
      </Button>
    </VStack>
  );
};

export default function Home() {
  return (
    <VStack w="100%" pt={10} gap={4}>
      <Contents />
      <SearchForm />
    </VStack>
  );
}
