import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import ImputForm from "../ImputForm/ImputForm";
import Filter from "../Filter/Filter";
import Contacts from "../Contacts/Contacts";

const App = () => {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() =>
    JSON.parse(localStorage.getItem("contacts"))
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = (text, value) => {
    const newContacts = { id: uuidv4(), name: text, number: value };
    if (
      contacts
        .map(contact => contact.name.toLowerCase())
        .includes(text.toLowerCase())
    ) {
      return alert(`Такое имя уже существует`);
    }
    setContacts(prev => [...prev, newContacts]);
  };

  const filterContacts = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const removeContacts = id => {
    setContacts(prev => prev.filter(contacts => contacts.id !== id));
  };

  return (
    <>
      <div className="container">
        <h1>Phonebook</h1>
        <ImputForm addContacts={addContacts} />
        <Filter filterContacts={filterContacts} />
      </div>
      <h2 className="contacts">Contacts</h2>
      <div className="container-contacts">
        {contacts.length ? (
          <Contacts
            contacts={contacts}
            filter={filter}
            removeContacts={removeContacts}
          />
        ) : (
          <p>No contacts</p>
        )}
      </div>
    </>
  );
};

export default App;
