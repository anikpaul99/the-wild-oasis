import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

/**
 * Select component, which will contain options to select.
 * @prop {Object []} options Each option object will contain the "value" that will be set to the URL and the "label" to be displayed on the UI. => e.g. { value: "with-discount", label: "With discount" }.
 * @prop {string} value The currently selected value in the URL.
 * @prop {func} onChange The function to be executed when the selected option is changed on the UI.
 * @prop {Object} props All the other props passed inside 'Select'. e.g. type='white'. Then it will be {type: 'white'}. Which will passed insde 'StyledSelect' element to give it a different style.
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
