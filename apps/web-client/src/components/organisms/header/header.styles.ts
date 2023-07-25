import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.7em;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
`;

export const StyledHeaderContainer = styled.div`
  padding: 0 1rem;
`;

export default StyledHeader;