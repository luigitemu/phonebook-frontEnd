import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { closeModal } from '../actions/ui';
import {startUpdatingContact} from '../actions/contacts'

export const ModalUpdate = () => {

  const {modalOpen } = useSelector( state => state.ui);
  const {activeContact } = useSelector( state => state.contacts);
  const dispatch = useDispatch()
  const {register, reset ,formState: { errors } , handleSubmit} = useForm();
  Modal.setAppElement('#root');
  
  const [values, setValues] = useState(activeContact);
  const close = ()=>  {

    dispatch(closeModal());
      
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
  dispatch(startUpdatingContact(data ,data.id ));
  reset()
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
                <label className='form-label'>First Name </label>
                <input className='form-control' placeholder={activeContact?.firstName} {...register('firstName' , {required:true }) }    />  
                {
                    errors.firstName?.type === 'required' 
                    && <div><small className="text-danger ">First Name is required </small></div>
                }  
                <label className='form-label'>Last  Name </label>
                <input className='form-control' placeholder={activeContact?.lastName} {...register('lastName' , {required:true }) }    />  
                {
                    errors.lastName?.type === 'required' 
                    && <div> <small className="text-danger ">Last Name is required</small></div>
                }  
                <label className='form-label'>Phone  </label>
                <input type="number" className='form-control' placeholder={activeContact?.phone} {...register('phone' , {required:true }) }    />  
                {
                    errors.phone?.type === 'required' 
                    && <div> <small className="text-danger ">Phone is Required</small></div>
                }  
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
