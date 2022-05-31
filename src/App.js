import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import ContactCard from './ContactCard';
import test from "./test"



export default function App () {

    let [searchTerm, setSearch] = useState("")
    let FullName = ""
    // eslint-disable-next-line
    let results = test.map((x) =>
    {(FullName = (x.Firstname + " " + x.LastName)); if ((FullName.toLowerCase()).includes(searchTerm.toLowerCase()))
      return <>{<div className="col-sm-8 col-md-6 col-lg-3 mt-4"><ContactCard FirstName={x.FirstName} LastName={x.LastName} Email={x.Email} Phone={x.Phone}/></div>}</>})
    return(<div className='contact-page'>
        {/* Header section */}
        <div>
            <h1>Contacts</h1>
        </div>
        {/* Search Bar */}
        <div className="contact-search-bar">
            <FloatingLabel controlId="floatingTextarea" label="Search here..." className="mb-3">
                <Form.Control placeholder="Leave a comment here" onChange={
                    (x) => (setSearch(searchTerm = x.target.value))} />
            </FloatingLabel>
        </div>
        {/* Results section (Knowledge Base articles) */}
        <div>
            <div className="container">
                <div className="row">
                    {results}
                </div>
            </div>
        </div>
    </div>);
}
