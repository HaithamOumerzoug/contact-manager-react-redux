import axios from  'axios'

/*
* Use JSON Placeholder Fake API
* https://jsonplaceholder.typicode.com/
*/

// Get All Contacts
export const getContacts=()=> async dispatch=>{
  const res=await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type:"GET_CONTACTS",
        payload:res.data
      });
}

// Get One contact by Id
export const getContactByID=(id)=>async dispatch=>{
  const res=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
    type:"GET_ONE_CONTACT",
    payload:res.data
  })
}

// Update Contact
export const updateContact=(contact)=>async dispatch=>{
  const res=await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`,contact);
  dispatch({
    type:"UPDATE_CONTACT",
    payload:res.data
  })
}

// Add Contact
export const addContact=(contact)=>async dispatch=>{
  const res = await axios.post('https://jsonplaceholder.typicode.com/users',contact);
  dispatch({
      type:"ADD_CONTACT",
      payload:res.data
    });  
}

// Delete Contact
export const deleteContact=(id)=>async dispatch=>{
  const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
        type:"DELETE_CONTACT",
        payload:id
      });
}