import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../styles/theme.json';
import {
  Box,
  Text,
  Title,
  StyledSafeAreaView,
  Touchable,
  Button,
} from '../../components';

const Header = ({ title }) => {
  return (
    <Box
      fluid
      height="65px"
      justify="center"
      border={`1px solid ${colors.muted}50`}
    >
      <StyledSafeAreaView>
        <Touchable
          width="80px"
          justify="center"
          align="center"
          onPress={() => alert('teste')}
        >
          <Icon name="menu" size={30} />
        </Touchable>
        <Box align="center" justify="center">
          <Title>{title}</Title>
        </Box>
        <Touchable width="80px"></Touchable>
      </StyledSafeAreaView>
    </Box>
  );
};

export default Header;
