import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Cover, Text, Title, Touchable } from '../';

import { colors } from '../../styles/theme.json';
import utils from '../../utils/hexaDecimalTranparent';

const CategoryCard = ({ title, description }) => {
    const { navigate } = useNavigation();

    return (
        <Touchable
            width="100%"
            height="180px"
            radius="15px"
            spacing="10px 0px 20px 0px"
            onPress={() => navigate('Category')}
        >
            <Cover
                width="100%"
                height="100%"
                image="https://as1.ftcdn.net/v2/jpg/04/24/45/72/1000_F_424457282_NCa3ZyCkS3IluWFBmuF4qhbNGyeLZ39n.jpg"
            >
                <Box
                    width="100%"
                    justify="center"
                    align="center"
                    background={utils.toAlpha(colors.black, 55)}
                >
                    <Title color="light" bold>
                        {title}
                    </Title>
                    <Text color="light">{description}</Text>
                </Box>
            </Cover>
        </Touchable>
    );
};

export default CategoryCard;
