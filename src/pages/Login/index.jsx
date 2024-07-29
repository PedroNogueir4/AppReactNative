import React from 'react';
import { Title, Text, Button, Box, Spacer, Input } from '../../components';
import { StatusBar } from 'react-native';

const Login = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      {/* <Icon
            name="chevron-left"
            size={45}
            backgroundColor="#fff"
            color="#151522"
          /> */}
      <Box justify="center" align="center" background="light" hasPadding>
        <Title variant="big" color="dark" bold>
          LOOKAPP
        </Title>
        <Spacer size="50px" />
        <Title color="dark" bold>
          SignIn my account.
        </Title>
        <Spacer size="50px" />
        <Input placeholder="Email" />
        <Spacer size="20px" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Spacer size="50px" />
        <Button block>
          <Text color="light">SigIn into my account</Text>
        </Button>
        <Spacer size="20px" />
        <Text underline color="dark" onPress={() => alert('Cadastro')}>
          Create new account
        </Text>
      </Box>
    </>
  );
};

export default Login;
