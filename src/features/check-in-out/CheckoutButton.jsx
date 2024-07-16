import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

/**
 * Button to check out the guests from the hotel in the current day.
 * @prop {number} bookingId The booking id of the guest, who will check out from the hotel in the current day.
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
