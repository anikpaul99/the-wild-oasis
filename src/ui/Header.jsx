import { styled } from "styled-components";

import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

/**
 * Header component that will include UserAvatar and HeaderMenu components.
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
