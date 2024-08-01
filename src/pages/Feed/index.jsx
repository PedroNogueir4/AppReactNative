import React from 'react';
import { Box, Spacer } from '../../components';
import { ScrollView } from 'react-native';
import Header from '../../components/Header';
import StoryList from '../../components/Story/list';
import PostList from '../../components/Post/list';

const Feed = () => {
  return (
    <Box>
      <Header />
      <ScrollView>
        <StoryList />
        <Spacer />
        <PostList />
      </ScrollView>
    </Box>
  );
};

export default Feed;
