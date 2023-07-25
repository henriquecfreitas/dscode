import React, { PropsWithChildren, useContext, useEffect } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../modules/theme';

const StyledApp: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme: { colors } } = useContext(ThemeContext);

  const StyledAppDiv = styled.div`
    margin-top: 50px;
    background: ${colors.background};
    color: ${colors.text};
  `;

  useEffect(() => {
    document.body.style.background = colors.background;
  }, [colors])

  return <StyledAppDiv>
    {children}
  </StyledAppDiv>
}

export default StyledApp;
