import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {  startAddingContact,  startLoadingContacts } from "../actions/contacts";




export const PhoneBook = () => {
    // Load contacts 
    const dispatch = useDispatch();
     
    useEffect(() => {
    dispatch(startLoadingContacts( ))
    }, []);
    

    // handleForm 
    const {register,  formState: { errors },reset , handleSubmit} = useForm()
    
    
    const onSubmit = (data) => {
        dispatch(startAddingContact(data));
        reset();
    }


    return (
        <>
        <form 
              className="phone-form flex column mt-4 px-3"
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              >
                <label className='form-label'>First Name </label>
                <input className='form-control'  {...register('firstName' , {required:true }) }    />  
                {
                    errors.firstName?.type === 'required' 
                    && <div><small className="text-danger ">First Name is required </small></div>
                }  
                <label className='form-label'>Last  Name </label>
                <input className='form-control'  {...register('lastName' , {required:true }) }    />  
                {
                    errors.lastName?.type === 'required' 
                    && <div> <small className="text-danger ">Last Name is required</small></div>
                }  
                <label className='form-label'>Phone  </label>
                <input type="number" className='form-control'  {...register('phone' , {required:true }) }    />  
                {
                    errors.phone?.type === 'required' 
                    && <div> <small className="text-danger ">Phone is Required</small></div>
                }
              

              <button className="btn btn-primary" >
                  Submit
              </button>


          </form>
          
        </>
      );
  }
  


