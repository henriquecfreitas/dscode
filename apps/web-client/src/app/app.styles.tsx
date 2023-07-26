import React, { PropsWithChildren, useContext, useEffect } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../modules/theme';

export const StyledAppPage = styled.div`
  overflow: hidden;
`;

const StyledApp: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme: { colors } } = useContext(ThemeContext);

  const StyledAppDiv = styled.div`
    overflow: hidden;
    margin: 1rem;
    margin-top: calc(50px);
    background: ${colors.background};
    color: ${colors.text};
    
    @media (max-width: 800px) { 
      margin-left: 0;
      margin-right: 0;
    }
  `;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.background = colors.background;
  }, [colors])

  return <StyledAppDiv>
    {children}
  </StyledAppDiv>
}

export default StyledApp;
