import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rotateIn } from 'react-animations';

const bounceAnimation = keyframes`${rotateIn}`;

export default styled.img`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    animation: 2s ${bounceAnimation};
`;