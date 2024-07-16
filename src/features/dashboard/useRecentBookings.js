import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";

import { getBookingsAfterDate } from "../../services/apiBookings";

/**
 * Will fetch all the bookings that were created between today and 7/30/90 days, from the supabase. And it will be stored into the cache for example with the name of '["bookings", `last-${30}`]'.
 * @returns {Object} object containing the 'isLoading' state and 'bookings' data.
 * @author Anik Paul
 */
export function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { isLoading, bookings };
}
