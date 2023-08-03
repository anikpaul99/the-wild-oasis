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

/**
 * Will update setting in the database
 * @param {Object} newSetting an object with the column that needs to be updated. Object that looks like {setting: newValue}. e.g. ({breakfastPrice: 25})
 * @returns {Object}
 * @author Anik Paul
 */
export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be updated");
  }
  return data;
}
