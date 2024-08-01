import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Title, Text, Button, Box, Spacer, Input } from '../../components';
import { StatusBar } from 'react-native';

const Register = () => {
  const { navigate, goBack } = useNavigation();

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Box justify="center" align="center" background="light" hasPadding>
        <Title color="dark" bold>
          Create new account.
        </Title>
        <Spacer />
        <Text align="center" color="muted">
          Enter your details below:
        </Text>

        <Spacer size="50px" />

        <Input placeholder="Name" />
        <Spacer size="20px" />
        <Input placeholder="Email" />
        <Spacer size="20px" />
        <Input placeholder="Password" secureTextEntry={true} />

        <Spacer size="50px" />

        <Button block>
          <Text color="light">Create my account</Text>
        </Button>
        <Spacer size="20px" />
        <Text underline color="dark" onPress={() => goBack()}>
          Back to Home
        </Text>
      </Box>
    </>
  );
};

export default Register;
