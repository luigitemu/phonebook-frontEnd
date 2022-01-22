import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { closeModal } from '../actions/ui';
import {startUpdatingContact} from '../actions/contacts'
import { useForm } from '../hooks/useForm';

export const ModalUpdate = () => {
  
  const dispatch = useDispatch();
  const {modalOpen } = useSelector( state => state.ui);
  const {activeContact } = useSelector( state => state.contacts);
  Modal.setAppElement('#root');
  

  const [values , handleChange , reset  ] = useForm();
  

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
  // dispatch(startUpdatingContact(data ,data.id ));
  // reset()
};
const handleSubmit = (e) => {
    e.preventDefault();

    console.log(activeContact);
    const updateData = {
      firstName:e.target[1].value,
      lastName: e.target[2].value,
      phone : e.target[3].value 
    }
    console.log(updateData);
    dispatch(startUpdatingContact(updateData ,activeContact._id ));
  

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
          onSubmit={handleSubmit}
        >
          <input type="text" defaultValue={activeContact?._id}  hidden />
                <label className='form-label'>First Name </label>
                <input 
                name="fisrtName" 
                autoComplete="off" 
                className='form-control' 
                defaultValue={activeContact?.firstName}
                required
                />  

                
                <label className='form-label'>Last  Name </label>
                <input 
                name="lastName" 
                autoComplete="off" 
                className='form-control'  
                defaultValue={activeContact?.lastName}      
                required
                />  
                
                <label className='form-label'>Phone  </label>
                <input 
                name="phone" 
                type="number" 
                className='form-control'  
                defaultValue={activeContact?.phone}     
                required
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
