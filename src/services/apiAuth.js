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

/**
 * This function will be responsible to load the authenticated user from supabase. For one of the usecase which is to enable a logged in user to access the app late.
 * @returns {Object} Will return the logged in user infor.
 * @author Anik Paul
 */
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}
