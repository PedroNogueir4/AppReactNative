import React from 'react';
import { Box, StyledScrollView, Text } from '..';
import Story from '.';
import { ScrollView } from 'react-native';

const StoryList = () => {
  return (
    <Box fluid height="275px">
      <Box fluid row justify="space-between" hasPadding height>
        <Text bold color="dark">
          Stories
        </Text>
        <Text color="danger" underline>
          Show All
        </Text>
      </Box>
      <ScrollView
        horizontal
        height
        style={{
          paddingLeft: 20,
        }}
      >
        {Array.from(Array(10))?.map((item) => (
          <Story />
        ))}
      </ScrollView>
    </Box>
  );
};

export default StoryList;
