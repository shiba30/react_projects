import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Input = (props) => {
    const { placeholder = '' } = props;
    return <SInput type='text' placeholder={placeholder} />;
};

Input.propTypes = {
    placeholder: PropTypes.node.isRequired,
};

const SInput = styled.input`
    padding: 8px 16px;
    border: solid #ddd 1px;
    border-radius: 9999px;
    outline: none;
`;