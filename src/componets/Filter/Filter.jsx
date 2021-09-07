import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const Filter = ({ filterContacts }) => {
  return (
    <>
      <div className="container-filter">
        <p>Find contacts name</p>
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Text input with checkbox"
            type="text"
            name="filter"
            onChange={filterContacts}
          />
        </InputGroup>
      </div>
    </>
  );
};

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
};

export default Filter;
