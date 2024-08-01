import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Box, Title, Touchable } from '../../components';
import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../../styles/theme.json';
import utils from '../../utils/hexaDecimalTranparent';

const Header = ({ title = 'Explore', right = null }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        minHeight: "6%",
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: utils.toAlpha(colors.muted, 50),
      }}
    >
      <SafeAreaView
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Touchable
          width="80px"
          justify="center"
          align="center"
          hasPadding
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu" size={30} />
        </Touchable>
        <Box align="center" justify="center">
          <Title variant='small2'>{title}</Title>
        </Box>
        {right ? right() : <Touchable hasPadding width="80px"></Touchable>}
      </SafeAreaView>
    </View>
  );
};

export default Header;
