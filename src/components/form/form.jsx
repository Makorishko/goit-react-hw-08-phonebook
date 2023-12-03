import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isSame = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isSame) {
      return alert('This name already exist');
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input type="text" name="name" id="name" required />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="number">Number</FormLabel>
          <Input type="tel" name="number" id="number" required />
        </FormControl>
        <Button type="submit" width="full" colorScheme="blue">
          Add contact
        </Button>
      </VStack>
    </Box>
  );
};
