import supabase from "./supabase";

/**
 * If an account is created, users can login to the app. After they have logged in, all interactions using the Supabase JS client will be performed as "that user".
 * @param {Object} object with email and password prop.
 * @prop {string} email The email the user will use to login.
 * @prop {string} password The password the user will use to log in.
 * @returns {Object} Will contain the information about 'active session' which will include info about jwt token. Will also contain info about the 'user'.
 * @author Anik Paul
 */
export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}
