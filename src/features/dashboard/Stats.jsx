import { HiOutlineBriefcase } from "react-icons/hi2";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { HiOutlineChartBar } from "react-icons/hi2";

import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

/**
 * Will display statistics about 'number of bookings', 'total sales', 'total stays of guests', 'occupancy rate' over last 7/30/90 days and display one 'Stat' component for each of them.
 * @prop {object[]} bookings All bookings that were created after a certain date. For example all the bookings that were created between today and the last 7/30/90 days.
 * @prop {object[]} confirmedStays All confirmed stays that were created after a certain date. For example all the stays that were created between today and the last 7/30/90 days and the users either checked in or checked out.
 * @prop {number} numDays The day by which the data will be filtered in the dashboard page. For example if the user choses to filter the data for the last 7 days, then 'numDays' will 7.
 * @prop {number} cabinCount Total number of cabins there are available in the wild oasis company. Right now that is 8.
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.
  const checkins = confirmedStays.length;

  // 4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
