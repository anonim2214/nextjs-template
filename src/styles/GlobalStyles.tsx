'use client';

import React from 'react';
import { Global } from '@emotion/react';
import tw, { css, theme, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css({
    body: {
        WebkitTapHighlightColor: theme`colors.purple.500`,
        background: 'black',
        overflow: 'hidden',
        height: '100%',
        ...tw`antialiased`,
    },
    '#__next': { height: '100%' },
    html: { height: '100%' },
    '*': { color: 'white' },
});
const customStyles2 = css`
  input:focus { 
    outline: none;
  }
`;

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <Global styles={[customStyles, customStyles2]} />
    </>
);

export default GlobalStyles;
