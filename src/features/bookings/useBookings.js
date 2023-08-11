import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

/**
 * Will fetch the bookings data from the database.
 * @returns {Object} Object containing info about fetched data. 'isLoading', 'bookings', 'error'.
 * @author Anik Paul
 */
export function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { isLoading, bookings, error };
}
