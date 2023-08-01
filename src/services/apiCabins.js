import supabase, { supabaseUrl } from "./supabase";

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
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error(`Cabin could not be created`);
  }

  // 2. Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin if there was an error uploading the image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);

    console.error(storageError);
    throw new Error(
      `Cabin image could not be uploaded and the cabin was not created`
    );
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
