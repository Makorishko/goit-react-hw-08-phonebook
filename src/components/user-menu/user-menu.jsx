import {
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { selectUser } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';

export default function UserMenu() {
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      <Flex alignItems={'center'}>
        <Menu>
          <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}
          >
            <Avatar
              size={'sm'}
              src={
                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
              }
            />
          </MenuButton>
          <MenuList>
            <Box padding={'6px 12px'} as="div">
              <div>{userData.name}</div>
              <div>{userData.email}</div>
            </Box>
            <MenuDivider />
            <MenuItem onClick={() => dispatch(logOut())}>Log Out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
}
