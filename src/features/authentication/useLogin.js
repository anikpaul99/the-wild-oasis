import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { login as loginApi } from "../../services/apiAuth";

/**
 * If an account is created, users can login to the app. After they have logged in, all interactions using the Supabase JS client will be performed as "that user".
 * @returns {Object} Object containing 'login' mutation function which is result from calling 'mutationFn' in 'useMutation' hook. This function will be used to login with 'email and password'. Also the 'isLoading' state.
 * @author Anik Paul
 */
export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
