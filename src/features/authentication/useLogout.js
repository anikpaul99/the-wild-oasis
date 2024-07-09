import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { logout as logoutApi } from "../../services/apiAuth";

/**
 * The function is responsible to logout the user from the application using the logout function through mutation with react query. It will also remove the current user and all the queries from the react query cache after logout.
 * @returns {Object} Object containing 'logout' mutation function to implement the logout feature. Also the 'isLoading' state.
 * @author Anik Paul
 */
export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
