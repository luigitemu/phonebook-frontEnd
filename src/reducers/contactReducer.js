import { types } from "../types/types";

const initialState = {
    contacts : [],
    activeContact: null 
}

export const contactReducer = ( state= initialState , action )=>{


    switch (action.type) {
        case types.contactsSetActive:
            return {
                ...state,
                activeContact: {...action.payload} 
            }
        case types.contactsLoad:
            return {
                ...state,
                contacts: [...action.payload ]
            }
        case types.contactsAdd:
            return {
                ...state,
                contacts: [...state.contacts , action.payload ]
            }
        case types.contactsUpdate:
            return {
                ...state,
                contacts: state.contacts.map( contact => 
                        contact._id === action.payload.id
                        ?action.payload
                        :contact 
                    )
            }
        case types.contactsDelete:
            return{
                ...state,
                contacts: state.contacts.filter( contact => contact._id != action.payload)
            }
    
        default:
            return state; 
    }

}
