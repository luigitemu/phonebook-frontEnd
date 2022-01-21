import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addContact, loadContacts } from "../actions/contacts";
import { CustomInput } from "./CustomInput";




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
                  <CustomInput
                    register={register}
                    label="First Name"
                    name="firstName"
                    errors={errors}
                    errLabel="First name is required. "
                  />
                  <CustomInput
                    register={register}
                    label="Last Name"
                    name="lastName"
                    errors={errors}
                    errLabel="Last name is required. "
                  />
                  <CustomInput
                    register={register}
                    label="Phone Number"
                    name="phone"
                    errors={errors}
                    errLabel="Phone number is required. "
                    type="number"
                  />
              

              <button className="btn btn-primary" >
                  Submit
              </button>


          </form>
          
        </>
      );
  }
  


