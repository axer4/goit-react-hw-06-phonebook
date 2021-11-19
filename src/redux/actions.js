import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
// export const addContact = (name, number) => ({
//     type: "addContact",
//     payload: {
//         name: name,
//         number: number,
//         id: uuidv4(),
//     },
// });
// export const deleteContact = value => ({
//     type: "deleteContact",
//     payload: value,
// })
// export const contactsFilter = filter => ({
//     type: 'contactsFilter',
//     payload: filter,
// })
export const addContact = createAction('addContact', (name,number) => {
    return {
        payload: {
            name: name,
            number: number,
            id: uuidv4(),
        }
    }
}) 
export const deleteContact = createAction('deleteContact');
export const contactsFilter = createAction('contactsFilter');