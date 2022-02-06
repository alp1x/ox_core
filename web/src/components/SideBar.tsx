import React from 'react';
import { Box, Flex, Spacer, Button } from '@chakra-ui/react';
import Characters from './Characters';
import CreateCharacter from './Dialogs/CreateCharacter';
import SelectCharacter from './Dialogs/SelectCharacter';
import DeleteCharacter from './Dialogs/DeleteCharacter';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { theme } from '../styles/theme';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CharactersProvider from '../providers/CharactersProvider';

import type { Character } from '../types';

const SideBar: React.FC = () => {
  const [createVisible, setCreateVisible] = React.useState(false);
  const [selectVisible, setSelectVisible] = React.useState(false);
  const [deleteVisible, setDeleteVisible] = React.useState(false);
  const [character, setCharacter] = React.useState<Character>({
    firstname: '',
    lastname: '',
    gender: '',
    location: '',
    dateofbirth: '',
    groups: [''],
    phone_number: '',
    slot: 0,
  });

  return (
    // Left bar
    <BrowserRouter>
      <CharactersProvider>
        <Box
          position="fixed"
          left="0"
          w="30vh"
          h="100vh"
          bg="linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);"
        >
          <Flex direction="column" h="100%">
            <Flex
              fontFamily="Poppins"
              direction="column"
              alignContent="center"
              justifyContent="center"
              alignItems="center"
            >
              <Characters
                setCharacter={setCharacter}
                setSelectVisible={setSelectVisible}
                setDeleteVisible={setDeleteVisible}
              />
            </Flex>
            <Spacer />
            <Link to="/create">
              <Button
                leftIcon={<BsFillPersonPlusFill />}
                mb={5}
                size="lg"
                fontFamily="Poppins"
                fontSize="xl"
                borderRadius="none"
                backgroundColor="transparent"
                _hover={{ bg: theme.colors.sideHover }}
                onClick={() => setCreateVisible(true)}
              >
                Create new character
              </Button>
            </Link>
          </Flex>
        </Box>
        <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
          <Routes>
            <Route
              path="/create"
              element={<CreateCharacter visible={createVisible} setVisible={setCreateVisible} />}
            />
          </Routes>
        </Flex>
        {/* // Right bar */}
        <Box position="fixed" right="0" top="0" w="25vh" h="100vh">
          <Flex justifyContent="flex-end" alignItems="center" h="100%">
            <Routes>
              <Route
                path="/select"
                element={
                  <SelectCharacter
                    visible={selectVisible}
                    setVisible={setSelectVisible}
                    character={character}
                  />
                }
              />
              <Route
                path="/delete"
                element={
                  <DeleteCharacter
                    visible={deleteVisible}
                    setVisible={setDeleteVisible}
                    character={character}
                  />
                }
              />
            </Routes>
          </Flex>
        </Box>
      </CharactersProvider>
    </BrowserRouter>
  );
};

export default SideBar;