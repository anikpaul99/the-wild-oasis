import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";

/**
 * The bookings page.
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <p>TEST</p>
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
