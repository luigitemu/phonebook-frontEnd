import DataTable from "react-data-table-component";
import { useSelector } from "react-redux"

export const PhoneList = () => {

    const {contacts} = useSelector(state => state.contacts); 

     
    const columns = [
        {
            name: 'First Name',
            selector: row => row.firstName,
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
            sortable: true,
        },
        {
            name: 'Phone Number',
            selector: row => row.phone,
        },
    ];

    return (
        <DataTable
            columns={columns}
            data={contacts}
        />
      );
  }
