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
 * Will create or update a cabin in the database
 * @param {Object} newCabin the cabin to be created or updated
 * @returns {Object} Object containing info about newly created or updated cabin. Contained props are: 'created_at', 'description', 'discount', 'id', 'image', 'maxCapacity', 'name', 'regularPrice'.
 * @author Anik Paul
 */
export async function createUpdateCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/update cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //B) UPDATE
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error(`Cabin could not be created`);
  }

  // 2. Upload image
  if (hasImagePath) return data;

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
