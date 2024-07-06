import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { updateBooking } from "../../services/apiBookings";

/**
 * Will update the booking data in the database for check-out operation.
 * @returns {Object} Object containing info about 'checkout' function and 'isCheckingOut' status.
 * @author Anik Paul
 */
export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error(`There was an error while checking out`),
  });

  return { checkout, isCheckingOut };
}
