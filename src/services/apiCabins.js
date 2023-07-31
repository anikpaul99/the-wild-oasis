import supabase from "./supabase";

/**
 * Will return the cabins data from our database
 * @returns {Object []} The cabins data
 * @author Anik Paul
 */
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error(`Cabins could not be loaded`);
  }

  return data;
}
