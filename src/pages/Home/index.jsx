import React from 'react';
import { Title, Text, Button, Box, Spacer } from '../../components';

const Home = ({ navigation: { navigate } }) => {
  return (
    <Box justify="center" align="center" background="dark" hasPadding>
      <Box justify="center" align="center" fluid>
        <Title variant="big" color="light" bold>
          LOOKAPP
        </Title>
        <Text align="center" spacing="0px 40px">
          Stay on top of the fashion world and buy your favorite looks.
        </Text>
      </Box>
      <Box fluid justify="flex-end" align="center">
        <Button block>
          <Text color="light" onPress={() => navigate('Login')}>
            SigIn my account
          </Text>
        </Button>
        <Spacer size="22px" />
        <Text
          underline
          color="light"
          onPress={() => navigate('Register')}
        >
          Create new account
        </Text>
        <Spacer size="70px" />
      </Box>
    </Box>
  );
};

export default Home;
