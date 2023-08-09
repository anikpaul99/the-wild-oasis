import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

/**
 * Component which contains table operations like sorting and filtering.
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
