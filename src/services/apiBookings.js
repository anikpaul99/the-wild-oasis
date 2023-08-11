import { getToday } from "../utils/helpers";
import supabase from "./supabase";

/**
 * Will fetch data about "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice" from the bookings table, from the database. Will also fetch data about 'name' from the  'cabins' table and the data about 'fullName & email' from the 'guests' table, from the database.
 * @returns {Object []} The bookings data along with cabins data (name) and guests data (fullName, email).
 * @author Anik Paul
 */
export async function getBookings() {
  const { data, error } = await supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)"
    );

  if (error) {
    console.error(error);
    throw new Error(`Bookings could not be loaded`);
  }

  return data;
}
