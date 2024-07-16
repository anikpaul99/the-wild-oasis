import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

/**
 * The function will store the result of calling 'getStaysTodayActivity()' function, in the cache with the query name of 'today-activity'.
 * @returns {Object} Object containing the 'isLoading' state and also the 'activities', which is the data of the guests that will either check in or check out in the current day.
 */
export function useTodayActivity() {
  const { isLoading, data: activities } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"],
  });
  return { activities, isLoading };
}
