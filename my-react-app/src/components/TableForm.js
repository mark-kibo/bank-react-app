import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function TableForm( {handleSubmit} ){
    const [show, setShow] = useState(false);

    // functions to handle modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // set state inputs
    const [inputData, setInputData] = useState({});

    function getInputs(e){
        let name= e.target.name
        let value= e.target.value
        let data ={
            ...inputData,
            [name]: value
        }
        console.log(data)
        setInputData(data)
        
    }

    
    return (
    <div>
    <Button variant="primary" onClick={handleShow} style={{ 
        margin: "10px 10px"}}>
        Add transaction
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={(e)=>{ e.preventDefault();
            handleSubmit(inputData)
            handleClose()}}>
            <Form.Control type="date" placeholder="date"  name='date' onChange={getInputs} style={{margin:"2px"}}/>
            <Form.Control type="text" placeholder="description"  name='description' onChange={getInputs} style={{margin:"2px"}}/>
            <Form.Select aria-label="Default select example" name='category' onChange={getInputs} style={{margin:"2px"}}>
              <option>category</option>
              <option value="Income">Income</option>
              <option value="Food">Food</option>
              <option value="Gift">Gift</option>
              <option value="Transportation">Transportation</option>
              <option value="Housing">Housing</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Fashion">Fashion</option>
                </Form.Select>
            <Form.Control type="number" placeholder="amount" name='amount' onChange={getInputs} style={{margin:"2px"}}/> 
            <Button variant="primary" type='submit' style={{margin:"2px"}}>
            add transaction
          </Button>
       </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </div>
    )
}

export default TableForm;