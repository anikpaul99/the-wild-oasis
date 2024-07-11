import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

/**
 * This function is responsible to set the data in the cache as 'user' query key, which is returned from 'getCurrentUser' function as a result of calling the 'queryFn'.
 * @returns {Object} Object containing the 'isAuthenticated' state which is calculated from the 'user.role' that was returned from 'getCurrentUser' function. This 'isAuthenticated' state will be used later to determine whether the user is authenticated or not. Also the 'user' and 'isLoading' state.
 * @author Anik Paul
 */
export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}
