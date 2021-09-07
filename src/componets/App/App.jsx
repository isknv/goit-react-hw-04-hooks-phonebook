import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import ImputForm from "../ImputForm/ImputForm";
import Filter from "../Filter/Filter";
import Contacts from "../Contacts/Contacts";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContacts = (text, value) => {
    const newContacts = { id: uuidv4(), name: text, number: value };
    if (
      this.state.contacts
        .map(contact => contact.name.toLowerCase())
        .includes(text.toLowerCase())
    ) {
      return alert(`Такое имя уже существует`);
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, newContacts],
    }));
  };

  filterContacts = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  removeContacts = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contacts => contacts.id !== id),
    }));
  };

  componentDidMount() {
    const contactsStorage = localStorage.getItem("contacts");
    const parsed = JSON.parse(contactsStorage);

    if (parsed) {
      this.setState({ contacts: parsed });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <div className="container">
          <h1>Phonebook</h1>
          <ImputForm addContacts={this.addContacts} />
          <Filter filterContacts={this.filterContacts} />
        </div>
        <h2 className="contacts">Contacts</h2>
        <div className="container-contacts">
          {this.state.contacts.length ? (
            <Contacts
              contacts={contacts}
              filter={filter}
              removeContacts={this.removeContacts}
            />
          ) : (
            <p>No contacts</p>
          )}
        </div>
      </>
    );
  }
}

export default App;
