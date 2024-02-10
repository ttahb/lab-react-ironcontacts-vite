import "./App.css";
/// note - remember to keep this variable name different than contacts
import contactData from "./contacts.json";
import { useState } from 'react';

function App() {
  
  const [contacts, setContacts] = useState(contactData.slice(0,5));

  const addRandomContact = ()=>{
    const copyOfContacts = [...contacts];
    if(copyOfContacts.length === contactData.length)
      return;
    const newContactsList = contactData.slice(copyOfContacts.length, contactData.length);
    copyOfContacts.push(newContactsList[ Math.floor(Math.random()*(newContactsList.length))]);
    // console.log(`copyContacts length: ${copyOfContacts.length}`)
    setContacts(copyOfContacts);
  };

  const sortByName = ()=>{
    const copyOfContacts = [...contacts];
    copyOfContacts.sort((c1, c2)=>{
      return c1.name.localeCompare(c2.name);
    });
    setContacts(copyOfContacts);
  };

  const sortByPopularity = ()=> {
    const copyOfContacts = [...contacts];
    copyOfContacts.sort((c1,c2)=>c2.popularity-c1.popularity);
    setContacts(copyOfContacts);
  };

  const deleteContact = id => {
    const filteredContacts = contacts.filter(contact=>contact.id !== id);
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>Celebrity Ratings</h1>
      <button onClick={addRandomContact}>Add a random celebrity</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <hr/>
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>Picture | </th>
            <th>Name | </th>
            <th>Popularity | </th>
            <th>Won Oscar | </th>
            <th>Won Emmy</th>
          </tr>
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
                  <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
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
