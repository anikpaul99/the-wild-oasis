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

/**
 * Will create a new cabin in the database
 * @param {Object} newCabin the new cabin to be created
 * @author Anik Paul
 */
export async function createCabin(newCabin) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();

  if (error) {
    console.error(error);
    throw new Error(`Cabin could not be created`);
  }

  return data;
}

/**
 * Will delete a cabin
 * @param {string} id the id of the cabin to be deleted
 * @author Anik Paul
 */
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error(`Cabin could not be deleted`);
  }

  return data;
}
