import Table from 'react-bootstrap/Table';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

import TableItem from "./components/TableItem"


function App() {
  // nitialize data state
  const [transactions, setTransactions]=useState(null)
  let tableData
  // fetch my data from server
  useEffect(()=>{
    fetch("  http://localhost:3000/transactions")
    .then(res=>res.json())
    .then(data=>setTransactions(data))
  }, [])
  // show a prototype of a loader when data has not been fetched
  if(transactions===null){
    return <div>Loading...</div>
  }else{
    // pass each data to our table item
    tableData= transactions.map(data=>{
      console.log(data)
      return <TableItem data={data}/>  
    })
  }
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>data</th>
            <th>description</th>
            <th>category</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
            {tableData}
        </tbody>
      </Table>
    );
  
}

export default App;
