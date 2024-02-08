import "./App.css";
/// note - remember to keep this variable name different than contacts
import contactData from "./contacts.json";
import { useState } from 'react';

function App() {
  
  const [contacts, setContacts] = useState(contactData.slice(0,5));

  const addRandomContact = ()=>{
    contactData.slice(4,contactData.length);
  };

  return (
    <div className="App">
      <h1>Celebrity Ratings</h1>
      <button onClick={addRandomContact}>Add a random celebrity</button>
      <hr/>
      <table className="table">
        <thead className="table-head">
          <th>Picture</th> |
          <th>Name</th> |
          <th>Popularity</th> |
          <th>Won Oscar</th> |
          <th>Won Emmy</th>
        </thead>
        <tbody className="table-body">
          {
            contacts.map(contact => {
              return ( 
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt="contact-img" className="contact-image"/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td><div>{contact.wonOscar && '🏆'}</div></td>
                  <td><div>{contact.wonEmmy && '🌟'}</div></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
