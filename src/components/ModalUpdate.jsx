import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { closeModal } from '../actions/ui';
import { CustomInput } from './CustomInput';
import {startUpdatingContact} from '../actions/contacts'

export const ModalUpdate = () => {

  const {modalOpen } = useSelector( state => state.ui);
  const {activeContact } = useSelector( state => state.contacts);
  const dispatch = useDispatch()
  const {register,  formState: { errors },reset , handleSubmit} = useForm();
  Modal.setAppElement('#root');
  
  const close = ()=>  {

    dispatch(closeModal())
      
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: '500px',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '10'
    },
  };

  
const onSubmit = (data) => {
  dispatch(startUpdatingContact(data ,data.id ))
};

  
  
  return (
      <> 
       <Modal
        isOpen={modalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={close}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-dialog mt-0">
            <div className="modal-content border">
            <div className="modal-header">
                <h5 className="modal-title">Update Contact</h5>
                <button type="button" 
                        className="btn-close" 
                        data-bs-dismiss="modal" 
                        aria-label="Close"
                        onClick={close }
                        ></button>
            </div>
        <form 
          className="form-edit" 
         
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="text" defaultValue={activeContact?._id} {...register('id', { required: true })} hidden />
                <CustomInput
                    register={register}
                    label="First Name"
                    name="firstName"
                    errors={errors}
                    errLabel="First name is required. "
                    defaultValue={activeContact?.firstName }
                  />
                   <CustomInput
                    register={register}
                    label="Last Name"
                    name="lastName"
                    errors={errors}
                    errLabel="Last name is required. "
                    defaultValue={activeContact?.lastName}
                  />
                  <CustomInput
                    register={register}
                    label="Phone Number"
                    name="phone"
                    errors={errors}
                    errLabel="Phone number is required. "
                    type="number"
                    defaultValue={activeContact?.phone }
                  />
                <div className="d-grid gap-2">
              <button className="btn btn-primary block" >
                  Submit
              </button>

                </div>
        </form>
        </div>
        </div>
      </Modal>
            
      </>
  );
};
