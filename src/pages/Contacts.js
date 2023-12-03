import { ContactForm } from 'components/form/form';
import { ContactList } from 'components/list/list';
import { Wrapper } from '../components/wrapper-styled';
import { Filter } from 'components/filter';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getError } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

export default function Contacts() {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Box>
        {isLoading && (
          <Box
            position="fixed"
            top="0"
            left="0"
            width="100%"
            height="100%"
            backgroundColor="rgba(0, 0, 0, 0.5)"
            zIndex="9999"
          >
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            >
              <Spinner
                color="blue.500"
                size="xl"
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
              />
            </Box>
          </Box>
        )}
        {error && <p>{error}</p>}
      </Box>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Wrapper>
  );
}
