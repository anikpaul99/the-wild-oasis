import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

/**
 * Will fetch the cabins data from the database
 * @returns {Object} Object containing info about fetched data. 'isLoading', 'cabins', 'error'
 * @author Anik Paul
 */
export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isLoading, cabins, error };
}
