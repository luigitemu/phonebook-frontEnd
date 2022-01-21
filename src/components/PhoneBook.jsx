import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addContact, loadContacts } from "../actions/contacts";
import { PhoneList } from "./PhoneList";



export const PhoneBook = () => {
    // Load contacts 
    const dispatch = useDispatch();
     
    useEffect(() => {
    dispatch(loadContacts());  
    }, []);
    

    // handleForm 
    const {register,  formState: { errors },reset , handleSubmit} = useForm()
    
    
    const onSubmit = (data) => {
        dispatch(addContact(data));
        reset();
    }


    return (
        <>
        <form 
              className="phone-form flex column mt-4 px-3"
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              >

              <label className="form-label">First Name</label>
                <input className="form-control"  {...register('firstName', { required: true })} />
                    {
                        errors.firstName?.type === 'required' 
                        &&  <small className="text-danger ">First name is required.</small>
                    }
              <label className="form-label" >Last Name</label>
                <input className="form-control" {...register('lastName' , { required: true })} />
                    {errors.lastName?.type === 'required' 
                    && <small className="text-danger ">Last Name is required.</small>}
              <label className="form-label" >Phone</label>

                <input className="form-control " {...register('phone', { required: true })} />
                    {errors.phone?.type === 'required' 
                    && <small className="text-danger ">Phone is required.</small>}

              <button className="self-end btn btn-primary" >
                  Submit
              </button>


          </form>
          <PhoneList />
        </>
      );
  }
  