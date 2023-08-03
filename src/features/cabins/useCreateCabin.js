import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUpdateCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

/**
 * Will create a cabin
 * @returns {Object} object containing the 'isLoading' state and 'mutate' function which is returned as the result of calling 'useMutation' function. (Newly renamed as 'isCreating' & 'createCabin')
 * @author Anik Paul
 */
export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createUpdateCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
