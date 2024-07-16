import Row from "../ui/Row";
import Heading from "../ui/Heading";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";

/**
 * The dashboard page to show statistics, today's activity, chart of stay durations, chart of sales. Will be rendered when visited to '/dashboard' URL.
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
