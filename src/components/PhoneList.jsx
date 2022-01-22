import DataTable from "react-data-table-component";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { setActiveContact, startRemovingContact } from "../actions/contacts";
import { openModal } from "../actions/ui";
import { ModalUpdate } from "./ModalUpdate";


export const PhoneList = () => {
    const {contacts} = useSelector(state => state.contacts );
    const dispatch = useDispatch();

    
     

    const columns = [
        {
            name: 'First Name',
            selector: row => row.firstName,
            // sortable: true,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
            // sortable: true,
        },
        {
            name: 'Phone Number',
            selector: row => row.phone,
        },
        {
            cell: ( data ) => 
            <>
                <button 
                className="btn btn-sm m-0 pn-btn-success me-2"
                onClick={()=>{handleUpdate(data)}}
                > <i className="bi bi-pencil-fill"></i> </button>
                <button 
                className="btn btn-sm m-0 pn-btn-danger"
                onClick={()=>handleDelete(data._id)}
                > <i className="bi bi-trash"></i> </button>
            </>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
          }
    ];
    //Actions to rows 
    const handleUpdate = (data  ) => {
      dispatch(setActiveContact(data));
      dispatch(openModal())
      // setModalIsOpen(true);
    };

    const handleDelete = (data) => {
      dispatch(startRemovingContact(data ));
    };

  
     


    
    
      


    return (<>
        <DataTable
            columns={columns}
            data={contacts}
            // fixedHeader 
            fixedHeaderScrollHeight="400px"
            defaultSortFieldId={2}
            pagination
        />
       <ModalUpdate/>

    </>
      );
  }
