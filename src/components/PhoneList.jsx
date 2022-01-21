import DataTable from "react-data-table-component";
import { useSelector } from "react-redux"

export const PhoneList = () => {

    const {contacts} = useSelector(state => state.contacts); 
    const columns = [
        {
            name: 'Last Name',
            selector: row => row.lastName,
            // sortable: true,
        },
        {
            name: 'First Name',
            selector: row => row.firstName,
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
                <button className="btn btn-sm m-0 pn-btn-danger"> <i className="bi bi-trash"></i> </button>
            </>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
          }
    ];

    const handleUpdate = (data  ) => {
      console.log(data);
    };

    const handleDelete = (data) => {
      console.log(data);
    };
    
    



    return (
        <DataTable
            columns={columns}
            data={contacts}
            fixedHeader
            fixedHeaderScrollHeight="300px"
            defaultSortFieldId={1}
        />
      );
  }
