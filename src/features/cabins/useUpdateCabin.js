import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUpdateCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

/**
 * Will update a cabin
 * @returns {Object} object containing the 'isLoading' state and 'mutate' function which is returned as the result of calling 'useMutation' function. (Newly renamed as 'isUpdating' & 'updateCabin')
 * @author Anik Paul
 */
export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updateCabin, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newCabinData, id }) => createUpdateCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully updateed");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateCabin };
}
