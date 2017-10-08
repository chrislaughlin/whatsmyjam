import React from 'react';
import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        font-family: 'Mukta', sans-serif;
        color: white;
        font-size: 26px;
        text-decoration: none;
    }
    a: hover {
        text-decoration: underline;
    }
`;