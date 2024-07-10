import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

/**
 * The users page component when visited 'url/users' to show a 'create a new user' form where the user can create a new user.
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
