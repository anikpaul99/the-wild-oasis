import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

/**
 * Will fetch the settings data from the database
 * @returns {Object} Object containing info about fetched settings data. 'isLoading', 'settings', 'error'
 * @author Anik Paul
 */
export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, error, settings };
}
