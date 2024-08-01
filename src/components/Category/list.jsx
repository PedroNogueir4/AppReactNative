import React from 'react';
import { StyledScrollView, Text } from '../';
import CategoryCard from '.';

const CategoryList = () => {
    return (
        <>
            <StyledScrollView fluid style={{
                paddingTop: 20,
                paddingLeft: 20,
                paddingRight: 20
            }}>
                {Array.from(Array(10))?.map((item) => (
                    <CategoryCard title={'Category'} description={'123 Item'} />
                ))}
            </StyledScrollView>
        </>
    );
};

export default CategoryList;
