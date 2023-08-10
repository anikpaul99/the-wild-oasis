import { useSearchParams } from "react-router-dom";

import Select from "./Select";

/**
 * Comonent which will contains couple of options by which the table will be sorted by.
 * @prop {Object []} options Each option object will contain the "value" that will be set to the URL and the "label" to be displayed on the UI. => e.g. { value: "name-asc", label: "Sort by name (A-Z)" }.
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  /**
   * The function to be executed when the selected option is changed inside the UI.
   */
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      value={sortBy}
      onChange={handleChange}
      type="white"
    />
  );
}

export default SortBy;
