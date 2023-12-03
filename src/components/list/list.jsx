import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { getContacts, getFilterParam } from 'redux/contacts/selectors';
import { Box, Button, UnorderedList, Text } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilterParam);
  const dispatch = useDispatch();

  const deleteElementsOfList = contact => {
    dispatch(deleteContact(contact.id));
  };

  const getFilteredList = () => {
    if (contacts.length) {
      return contacts.filter(item =>
        item.name.toLowerCase().includes(filters.toLowerCase())
      );
    } else {
      return [];
    }
  };

  const filteredList = getFilteredList();

  return (
    <UnorderedList m={'0 0 2px 0'}>
      {filteredList.map(item => (
        <Box
          key={item.id}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={2}
          border="1px solid #ccc"
          borderRadius="md"
          mb={2}
        >
          <Text fontWeight="bold">
            {item.name}:{' '}
            <Text as="span" fontWeight="normal">
              {item.number}
            </Text>
          </Text>
          <Button onClick={() => deleteElementsOfList(item)} variant="outline">
            Delete
          </Button>
        </Box>
      ))}
    </UnorderedList>
  );
};
