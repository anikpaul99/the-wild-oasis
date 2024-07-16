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

/**
 * Will fetch a single booking data matched by the id passed into the function from the database.
 * @param {string} id The id (from the URL) of the booking  which data will be fetched from the database.
 * @returns {Object} The booking data along with cabin data and guest data for that particular id.
 * @author Anik Paul
 */
export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

/**
 * It returns all the 'BOOKINGS' from the supabase that were created after the given "date".
 * @param {string} date This is a date that is already 7/30/90 days ago from today.
 * @returns {object[]} Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
 * @author Anik Paul
 */
export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
}

/**
 * It returns all the 'STAYS' from the supabase that were created after the given "date".
 * @param {string} date This is a date that is already 7/30/90 days ago from today.
 * @returns {object[]} Returns all STAYS that were created after the given date. Useful to get stays created in the last 90 days, for example.
 * @author Anik Paul
 */
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

/**
 * It returns the data of the guests that will either check in or check out from the hotel, in the current day.
 * @returns {object[]} Returns the data of the guests that will either check in or check out from the hotel, in the current day.
 * @author Anik Paul
 */
export async function getStaysTodayActivity() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
    )
    .order("created_at");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
}

/**
 * Will update the booking data in the database for a particular booking with a particular id.
 * @param {string} id The id of the booking  which needs to be updated.
 * @param {Object} obj An object with all the new updated field values.
 * @returns {Object} The updated booking data.
 * @author Anik Paul
 */
export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

/**
 * Will delete the booking data in the database for a particular booking with a particular id.
 * @param {string} id The id of the booking  which needs to be updated.
 * @returns {undefined}
 * @author Anik Paul
 */
export async function deleteBooking(id) {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}
