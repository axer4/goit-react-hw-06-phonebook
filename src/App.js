
import ContactForm from "./components/ContactList/ContactForm/ContactFrom";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import styles from './App.module.css'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addContact, deleteContact} from './redux/actions';
function PhoneBook({ addContact, deleteContact, contactsArr, filter }) {
  // const getContacts = () => {
  //   const saved = localStorage.getItem('contacts')
  //   const savedArr = JSON.parse(saved);
  //   return contactsArr.push(...savedArr);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name': setName(value);
        break;
      case 'number': setNumber(value);
        break;
      default:return
    }
  }
  const addContactHandler = e => {
    if (dublicateAlert(name)) {
      return
    }
    else {
      addContact(name,number)
    }
  }
  const dublicateAlert = (name) => {
    if (contactsArr.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`)
      return true
    }
  }
  const filteredContacts = contactsArr.length > 0 ? contactsArr.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  }) : [];
  //   useEffect(() => {
  //   const saved = localStorage.getItem('contacts')
  //   const savedArr = JSON.parse(saved);
  //   return contactsArr.push(...savedArr);
  // }, []);
  return <>
    <h1 className={styles.heading} >PhoneBook</h1>
    <ContactForm
      onChangeInputHandler={onChangeInputHandler}
      addContactHandler={addContactHandler}
    />
     <h3 className={styles.heading}>Contacts</h3>
    <Filter
    />
   <ContactList
      filteredContacts={filteredContacts}
      deleteContact={deleteContact}
    />
  </>
}
const mapDispatchTopProps = dispatch => {
  return {
    addContact: (name, number) => dispatch(addContact(name, number)),
    deleteContact: (id) => dispatch(deleteContact(id)),
  }
}
const mapStateToProps = ({contacts,filter}) => {
  return {
    contactsArr: contacts.contacts,
    filter : filter,
  }
}
export default connect(mapStateToProps,mapDispatchTopProps)(PhoneBook);