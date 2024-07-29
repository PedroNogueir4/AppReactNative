import React from 'react';
import { Box, Cover, Spacer, Text, Touchable } from '..';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from '../../styles/theme.json';

const Post = () => {
    return (
        <Box hasPadding fluid>
            <Box row align="center">
                <Cover
                    image="https://as1.ftcdn.net/v2/jpg/04/24/45/72/1000_F_424457282_NCa3ZyCkS3IluWFBmuF4qhbNGyeLZ39n.jpg"
                    width="45px"
                    height="45px"
                    circle
                ></Cover>
                <Box spacing=" 0px 0px 0px 10px">
                    <Text bold color="dark">
                        SilvioSampaio
                    </Text>
                    <Text variant="small">2 mins ago</Text>
                </Box>
                <Touchable height="30px" width="80px" align="flex-end">
                    <Icon name="options" size={15} />
                </Touchable>
            </Box>
            <Spacer />
            <Cover
                width="100%"
                height="190px"
                image="https://as1.ftcdn.net/v2/jpg/04/24/45/72/1000_F_424457282_NCa3ZyCkS3IluWFBmuF4qhbNGyeLZ39n.jpg"
                radius="15px"
                spacing="10px 0px"
            ></Cover>
            <Spacer />
            <Box row>
                <Box row fluid align="center">
                    {Array.from(Array(3))?.map((item) => (
                        <Cover
                            circle
                            width="30px"
                            height="30px"
                            border={`1px solid ${colors.light}`}
                            spacing="0px -15px 0px 0px"
                            image="https://as1.ftcdn.net/v2/jpg/04/24/45/72/1000_F_424457282_NCa3ZyCkS3IluWFBmuF4qhbNGyeLZ39n.jpg"
                        />
                    ))}
                    <Text variant="small" spacing="0px 25px">
                        Liked by 10,298
                    </Text>
                </Box>
                <Box row justify="flex-end">
                    <Touchable width="30px" align="flex-end" spacing="0px 15px 0px 0px">
                        <Icon name="heart" color={colors.danger} size={20} />
                    </Touchable>
                    <Touchable width="30px" align="flex-end" spacing="0px 15px 0px 0px">
                        <Icon name="bubble" size={20} />
                    </Touchable>
                    <Touchable width="30px" align="flex-end">
                        <Icon name="share" size={20} />
                    </Touchable>
                </Box>
            </Box>
            <Spacer />
            <Text color="black">
                Interview: Shoe Designer John Fluevog On New Book,Spiritually and 'Slow
                Fashion'
            </Text>
        </Box>
    );
};

export default Post;
