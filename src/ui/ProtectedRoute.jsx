import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * This component will contain the 'AppLayout' component as all the other pages are rendered inside the 'AppLayout' component. This is so, all the other routes can only be accessed if this 'ProtectedLayout' component determines that there is currently a logged in user.
 * @prop {React.ReactNode} children the 'AppLayout' component.
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
