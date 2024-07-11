import supabase, { supabaseUrl } from "./supabase";

/**
 * This function is responsible to sign up a user in the supabase with the corresponding data.
 * @prop {string} fullName The full name the user will use to sign up.
 * @prop {string} email The email the user will use to sign up.
 * @prop {string} password The password the user will use to sign up.
 * @returns {Object} This object will  contain 'session' and 'user' property. The 'session' prop is the 'active session' which will include info about jwt token. The 'user' prop will contain info about the newly created user info.
 * @author Anik Paul
 */
export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

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

/**
 * This function will be responsible to sign out the user from application by removing the authentication session which comes from supabase.
 * @author Anik Paul
 */
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

/**
 * This function will be responsible to update the users full name, avatar and password.
 * @prop {string} fullName The full name the user will want to update.
 * @prop {string} email The email the user will want to update.
 * @prop {string} password The password the user will want to update.
 * @returns {Object} This object will contain the updated users info.
 * @author Anik Paul
 */
export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Update password OR fullName
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2. Upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);
  return updatedUser;
}
