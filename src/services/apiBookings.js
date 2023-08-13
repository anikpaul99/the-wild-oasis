import supabase from "./supabase";

import { getToday } from "../utils/helpers";
import { PAGE_SIZE } from "../utils/constants";

/**
 * Will fetch data about "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice" from the bookings table, from the database. Will also fetch data about 'name' from the  'cabins' table and the data about 'fullName & email' from the 'guests' table, from the database.
 * @prop {Object} filter The object which contains both the 'field' and the 'value' from the URL on which the query will be based on to implement the 'filter' operation.
 * @prop {Object} sortBy Contains the 'field' and 'direction' the table should be sorted by.
 * @prop {number} page The current page value in the URL.
 * @returns {Object} The bookings data along with cabins data (name) and guests data (fullName, email). Will also return the count / the total number of resutls.
 * @author Anik Paul
 */
export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)",
      { count: "exact" }
    );

  // FILTER
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  // SORT
  if (sortBy)
    query.order(sortBy.field, { ascending: sortBy.direction === "asc" });

  // PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error(`Bookings could not be loaded`);
  }

  return { data, count };
}
