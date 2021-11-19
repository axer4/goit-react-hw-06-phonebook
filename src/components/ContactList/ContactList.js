import styles from './ContactList.module.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect } from 'react';
function ContactList({ contacts, filteredContacts, deleteContact }) {
    // useEffect(() => {
    //     localStorage.setItem('contacts', JSON.stringify(contacts))
    // });
    return (<ul className={styles.list}>
        {
             filteredContacts.map(contact => <li key={contact.id} className={styles.item}>{contact.name} : {contact.number} 
                    <button onClick={() => deleteContact(contact.id)} className={styles.button}> Delete </button>
            </li>)
            
            }
    </ul> )
}

ContactList.propTypes = {
    filteredContacts: PropTypes.array,
    deleteContact: PropTypes.func
}
const mapDispatchTopProps = dispatch => {
    return {
    
    }
}
const mapStateToProps = state => {
  return {
      contacts: state.contacts,
  }
}
    
export default connect(mapStateToProps,mapDispatchTopProps)(ContactList);
