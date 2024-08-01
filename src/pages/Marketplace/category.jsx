import React from 'react';
import Header from '../../components/Header';
import { Box, Text, Touchable } from '../../components';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Category = () => {
    return (
        <>
            <Header
                title="Categoria X"
                right={() => (
                    <Touchable width="80px" hasPadding onPress={() => alert('bag')}>
                        <Icon name="bag" size={20} />
                    </Touchable>
                )}
            />
        </>
    );
};

export default Category;
