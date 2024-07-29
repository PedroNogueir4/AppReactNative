import React from 'react';
import { Box, StyledScrollView, Text } from '..';
import Post from '.';

const PostList = () => {
    return (
        <Box fluid>
            {Array.from(Array(20))?.map((item) => (
                <Post />
            ))}
        </Box>
    );
};

export default PostList;
