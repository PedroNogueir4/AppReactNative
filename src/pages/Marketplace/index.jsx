import React from 'react';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Box, Text, Touchable } from '../../components';
import CategoryList from '../../components/Category/list';

const Marketplace = () => {
    return (
        <>
            <Header
                title={'Categories'}
                right={() => (
                    <Touchable width="80px" hasPadding onPress={() => alert('bag')}>
                        <Icon name="bag" size={20} />
                    </Touchable>
                )}
            />
            <CategoryList />
        </>
    );
};

export default Marketplace;
