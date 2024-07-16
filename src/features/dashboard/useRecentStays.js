import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";

import { getStaysAfterDate } from "../../services/apiBookings";

/**
 * Will fetch all the stays that were created between today and 7/30/90 days, from the supabase. Then the data is filtered to get only the guests who have either 'checked in' or 'checked out'. And it will be stored into the cache for example with the name of '["stays", `last-${30}`]'.
 * @returns {Object} object containing the 'isLoading' state, 'stays', 'confirmedStays' and 'numDays' data. 'stays' are the guests who have booked but may not have arrived. 'confirmedStays' are the guests who have either checked in or checked out. 'numDays' is the day by which the data will be filtered in the dashboard page.
 * @author Anik Paul
 */
export function useRecentStays() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", `last-${numDays}`],
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { isLoading, stays, confirmedStays, numDays };
}
