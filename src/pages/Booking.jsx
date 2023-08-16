import BookingDetail from "../features/bookings/BookingDetail";

/**
 * The booking page to show the details of a particular booking. Will be rendered when visited to 'bookings/:bookingId' URL.
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function Booking() {
  return <BookingDetail />;
}

export default Booking;
