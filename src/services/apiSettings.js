import supabase from "./supabase";

/**
 * Will return the settings data from our database
 * @returns {Object}
 * @author Anik Paul
 */
export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }
  return data;
}
