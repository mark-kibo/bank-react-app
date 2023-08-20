import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useState } from 'react';

function SearchBar({filterSearch}){
    // set search state
    const [search, setSearch] = useState("");

    // handle search
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    
    return (
        <Form style={{ marginTop: "10px",
        marginLeft: "10px"
        }} >
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridsearch">
              <Form.Control type="text" placeholder="search" onChange={(e)=>{
                handleSearch(e)
                filterSearch(search)
              }} />
            </Form.Group>
          </Row>
          </Form>
);    
}


export default SearchBar;