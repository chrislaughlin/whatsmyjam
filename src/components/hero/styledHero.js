import React from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';

const bounceAnimation = keyframes`${slideInLeft}`;

export default styled.header`
    font-family: 'Fugaz One', cursive;
    font-size: 64px;
    color: white;
    text-align: center;
    text-shadow: 12px 5px 7px #D9CFB2;
    animation: 1s ${bounceAnimation};
`;