import Filter from "../../ui/Filter";

/**
 * Filter the data in the dashboard page by specific number of days. e.g 7/30/90 days.
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "Last 7 days" },
        { value: "30", label: "Last 30 days" },
        { value: "90", label: "Last 90 days" },
      ]}
    />
  );
}

export default DashboardFilter;
