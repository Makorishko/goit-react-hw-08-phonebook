import { useDispatch } from 'react-redux';
import { changeFilterParam } from 'redux/contacts/filterSlice';
import { Box, Input, Text } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(changeFilterParam(evt.target.value));
  };
  return (
    <Box border="1px solid #ccc" p={4} borderRadius="md">
    <Text mb={2}>Find contacts by name</Text>
    <Input
      onChange={changeFilter}
      type="search"
      name="text"
      border="1px solid #ccc"
      borderRadius="md"
      px={2}
      py={1}
    />
  </Box>
  );
};
