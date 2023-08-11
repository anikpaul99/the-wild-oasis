/**
 * Component to display incase there is no data to show.
 * @prop {string} resourceName The resource on which the data will be based on. (e.g. 'bookings)
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function Empty({ resourceName }) {
  return <p>No {resourceName} could be found.</p>;
}

export default Empty;
