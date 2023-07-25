import React, { useContext, useMemo } from "react";

import { Themes, ThemeContext } from "web-client/modules/theme";
import { Icons } from "web-client/components/atoms";
import StyledHeader, { StyledHeaderContainer } from "./header.styles";

const Header: React.FC = () => {
  const {
    toggleTheme,
    theme: { id: themeId, colors },
  } = useContext(ThemeContext);

  const BulbIcon = useMemo(() =>
    themeId === Themes.Dark ? Icons.BulbOutlined : Icons.BulbFilled
  , [ themeId ]);

  return <StyledHeader style={{ background: colors.black }}>
    <StyledHeaderContainer>
      <BulbIcon style={{ color: colors.accent }} onClick={toggleTheme} />
    </StyledHeaderContainer>
  </StyledHeader>
}

export default Header;
