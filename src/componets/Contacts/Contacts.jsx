import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const Contacts = ({ filter, contacts, removeContacts }) => {
  return (
    <>
      <ul className="list-filter">
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((contact, index) => (
            <li className="item-filter" key={contact.id}>
              <span className="index">{++index}</span>
              <p className="name">{contact.name}</p>
              <p className="number">{contact.number}</p>
              <Button
                type="button"
                onClick={() => removeContacts(contact.id)}
                variant="outline-danger"
              >
                Delete
              </Button>{" "}
            </li>
          ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  removeContacts: PropTypes.func.isRequired,
};

export default Contacts;
