import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const ImputForm = ({ addContacts }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function submitContacts(event) {
    event.preventDefault();
    if (name.trim() && number.trim()) {
      addContacts(name, number);
    }
    setName("");
    setNumber("");
  }

  return (
    <>
      <form onSubmit={submitContacts} className="form-horizontal">
        <div className="container-name">
          <p>Name</p>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Text input with checkbox"
              type="text"
              name="filter"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </InputGroup>
        </div>
        <div className="container-number">
          <p>Number</p>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Text input with checkbox"
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона может состоять только из цифр"
              required
              value={number}
              onChange={event => setNumber(event.target.value)}
            />
          </InputGroup>
        </div>
        <Button className="btn-form" type="submit" variant="outline-success">
          Add contact
        </Button>
      </form>
    </>
  );
};

ImputForm.propTypes = {
  addContacts: PropTypes.func.isRequired,
};

export default ImputForm;
