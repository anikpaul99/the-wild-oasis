import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signup as signupApi } from "../../services/apiAuth";

/**
 * The state which will be the result of executing the signup function in apiAuth, will be handled here in this function through react query.
 * @returns {Object} Object containing 'signup' mutation function which is result from calling 'mutationFn' in 'useMutation' hook. This function will be used to signup with 'email and password'. Also the 'isLoading' state.
 * @author Anik Paul
 */
export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        `Account successfully created! Please verify the new account from the user's email address.`
      );
    },
  });

  return { signup, isLoading };
}
