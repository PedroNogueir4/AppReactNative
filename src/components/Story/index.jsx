import React from 'react';
import { Box, Cover, Text, Touchable } from '..';
import { colors } from '../../styles/theme.json';

const Story = () => {
  return (
    <Touchable
      onPress={() => alert('tetse')}
      radius="10px"
      height="97%"
      width="40%"
      spacing="0px 5px 0px"
    >
      <Cover
        image="https://as1.ftcdn.net/v2/jpg/04/24/45/72/1000_F_424457282_NCa3ZyCkS3IluWFBmuF4qhbNGyeLZ39n.jpg"
        width="100%"
        height="100%"
      >
        <Box
          hasPadding
          fluid
          background={`${colors.dark}80`}
          justify="space-between"
        >
          <Cover
            circle
            width="40px"
            height="40px"
            border={`1px solid ${colors.light}`}
            image="https://as1.ftcdn.net/v2/jpg/04/24/45/72/1000_F_424457282_NCa3ZyCkS3IluWFBmuF4qhbNGyeLZ39n.jpg"
          />
          <Box justify="flex-end">
            <Text bold color="light">
              BrunaSampaio
            </Text>
            <Text variant="small" color="light">
              2 mins ago
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  );
};

export default Story;
