import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BaseButton } from './BaseButton';

export const PrimaryButton = (props) => {
    const { children } = props;
    return (
        <SButton>{children}</SButton>
    );
};

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
};

const SButton = styled(BaseButton)`
    background-color: #97edab;
`;
