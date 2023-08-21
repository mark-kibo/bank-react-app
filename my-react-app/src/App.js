import Table from 'react-bootstrap/Table';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

import TableItem from "./components/TableItem"
import TableForm from './components/TableForm';
import SearchBar from './components/SearchBar';


function App() {
  // initialize data state
  const [transactions, setTransactions]=useState(null)

  let tableData
  // fetch my data from server
  useEffect(()=>{
    fetch("  http://localhost:3000/transactions")
    .then(res=>res.json())
    .then(data=>setTransactions(data))
  }, [])

  // handle delete data
  const handleDeleteData=(id)=>{
    console.log(id)
    fetch(`http://localhost:3000/transactions/${id}`,{
      method:"DELETE"
    })
  
    let newData=transactions.filter(item=>item.id!==id)
    setTransactions(newData)
  }

  // show a prototype of a loader when data has not been fetched
  if(transactions===null){
    return <div>Loading...</div>
  }else{
    // pass each data to our table item
    tableData= transactions.map(data=>{
      console.log(data)
      return <TableItem data={data} deleteData={handleDeleteData}/>  
    })
  }

  // post data
  const postData=(data)=>{
    console.log(data)
    fetch("http://localhost:3000/transactions",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
  .then(res=>res.json())
  .then(data=>setTransactions([...transactions, data]))
  }

  // handle filter search
  const handleFilterSearch=(data)=>{
    console.log(data)
    if(data != null){
      let newData=transactions.filter(item=>{
        return item.description.includes(data)
      })
      setTransactions(newData)
    }
  }
  // handle sort
  const handleSort=(data)=>{
    console.log(transactions)
    let newData=transactions.sort((a,b)=>{
      return b[data] - a[data]
    })
    setTransactions(newData)
  }

  // render the table
    return (
      <div>
        <div>
        <SearchBar filterSearch={handleFilterSearch} sortData={handleSort} />
        <TableForm handleSubmit={postData}/>

        </div>
      
      <Table striped bordered hover style={
        {margin: "5px 10px"}
      }>
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
      </div>
    );
  
}

export default App;
