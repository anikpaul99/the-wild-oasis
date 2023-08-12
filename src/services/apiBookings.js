import supabase from "./supabase";

import { getToday } from "../utils/helpers";

/**
 * Will fetch data about "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice" from the bookings table, from the database. Will also fetch data about 'name' from the  'cabins' table and the data about 'fullName & email' from the 'guests' table, from the database.
 * @prop {Object} filter The object which contains both the 'field' and the 'value' from the URL on which the query will be based on to implement the 'filter' operation.
 * @prop {Object} sortBy Contains the 'field' and 'direction' the table should be sorted by.
 * @returns {Object []} The bookings data along with cabins data (name) and guests data (fullName, email).
 * @author Anik Paul
 */
export async function getBookings({ filter, sortBy }) {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)"
    );

  // FILTER
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  // SORT
  if (sortBy)
    query.order(sortBy.field, { ascending: sortBy.direction === "asc" });

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error(`Bookings could not be loaded`);
  }

  return data;
}
