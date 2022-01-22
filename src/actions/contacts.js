import { fetchWithoutToken } from "../helpers/fetchs";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { capitalize } from "../helpers/capitalize";
import { closeModal } from "./ui";


export const startLoadingContacts = ( ) => {
    return async (dispatch )=>{
        try {
            const resp = await fetchWithoutToken('contacts');
            const body = await resp.json();
            if(resp.ok){
                dispatch(loadContacts(body.contacts  ))
            }else{

            }
        
            
        } catch (error) {
            console.log(error);
        }


    }


};


export const startAddingContact = (contact) => {
    // capitalize
    contact.firstName = capitalize(contact.firstName);
    contact.lastName = capitalize(contact.lastName);
    return async(dispatch )=>{

        try {   
            console.log(contact );
            const resp = await fetchWithoutToken('contacts' ,contact , 'POST');
            const body = await resp.json();
            if(resp.ok){
                dispatch(addContact(body.contact));
                Swal.fire({
                    icon: 'success',
                    position:'center',
                    title: 'Contact saved',
                    showConfirmButton: false,
                    timer: 1500
                  });
            }else{
                Swal.fire({
                    icon: 'error',
                    position:'center',
                    title: `${body.errors[0].msg}`,
                    showConfirmButton: false,
                    timer: 2000
                  });
                console.log(body.errors);
            }
        } catch (error) {
            console.log(error);
        }

    }


};


export const startRemovingContact = (id ) => {
  
    return async( dispatch )=>{
        try {
            
            const resp = await fetchWithoutToken(`contacts/${id}`  , {} , 'DELETE');
            const body = await resp.json();
            if(resp.ok){
                dispatch(deleteContact(id ));
                Swal.fire({
                    icon: 'success',
                    position:'center',
                    title: 'Contact removed',
                    showConfirmButton: false,
                    timer: 1500
                  });
            }else{
                Swal.fire({
                    icon: 'error',
                    position:'center',
                    title: `${body.errors[0].msg}`,
                    showConfirmButton: false,
                    timer: 2000
                  });
                console.log(body.errors);
            }



        } catch (error) {
            console.log(error);
        }


    }

};

export const startUpdatingContact = (contact , id) => {
  return async(dispatch)=>{
    try {
        ;
        const resp = await fetchWithoutToken(`contacts/${id}` , contact , 'PUT');
        const body = await resp.json();
        if(resp.ok){
            // console.log(body.contact );
            dispatch(updateContact( contact ));
            Swal.fire({
                icon: 'success',
                position:'center',
                title: 'Contact updated',
                showConfirmButton: false,
                timer: 1500
              });
            dispatch(resetActiveContact())
            dispatch(closeModal())
            
        }else{
            Swal.fire({
                icon: 'error',
                position:'center',
                title: `${body.errors[0].msg}`,
                showConfirmButton: false,
                timer: 2000
              });
            console.log(body.errors);

            dispatch(closeModal())
        }


        
    } catch (error) {
        console.log(error);
    }

  }
};



export const setActiveContact  =  (contact) =>({ type: types.contactsSetActive , payload: contact})


    
export const resetActiveContact = ()=>({type: types.contactsResetActive}) 
const loadContacts = (data)=>({type: types.contactsLoad , payload: data});
const addContact = (contact)=>({type: types.contactsAdd , payload: contact });
const updateContact = (contact) => ({ type: types.contactsUpdate , payload: contact});
const deleteContact = (contact )=>({type: types.contactsDelete , payload: contact}) 

