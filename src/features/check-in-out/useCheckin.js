import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";

/**
 * Will update the booking data in the database for check-in operation.
 * @returns {Object} Object containing info about 'checkin' function and 'isCheckingIn' status.
 * @author Anik Paul
 */
export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: () => toast.error(`There was an error while checking in`),
  });

  return { checkin, isCheckingIn };
}
