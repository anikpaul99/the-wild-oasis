import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns/esm";

export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

/**
 * Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed. So this function will remove any time and return it as an ISO string.
 * @param {Object} [options = {}] If '{ end: true }' is passed into this function, then the date will be fixed to the 'last' milliseconds of the day. Otherwise it will be fixed to the very 'first' milliseconds of the day. This is necessary to compare with created_at from supabase, because it it not at 0.0.0.0, so the date is needed to be set to be END of the day or to the last second of the day when it is compared with earlier dates.
 * @returns {string} Todays date is returned as ad ISO String.
 * @author Anik Paul
 */
export const getToday = function (options = {}) {
  const today = new Date();

  if (options?.end) today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );
