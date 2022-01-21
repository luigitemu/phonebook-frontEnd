import { types } from "../types/types";


    const dataSend = [ 
        {
            firstName: 'Luis',
            lastName:'Tejada',
            phone:'95444687'
        },
        {
            firstName: 'Ammi',
            lastName:'Tejada',
            phone:'98255154'
        },
        {
            firstName: 'Luis Andres',
            lastName:'Tejada',
            phone:'99545243'
        },
        {
            firstName: 'Glenda',
            lastName:'Murillo',
            phone:'98907153'
        },
        {
            firstName: 'Rolly',
            lastName:'Tejada',
            phone:'95444687'
        },
    ];



    
    
    
export const loadContacts = ()=>({type: types.contactsLoad , payload: dataSend});
export const addContact = (contact)=>({type: types.contactsAdd , payload: contact });
export const updateContact = (contact) => ({ type: types.contactsUpdate , payload: contact});
export const deleteContact = (contact )=>({type: types.contactsDelete , payload: contact}) 

