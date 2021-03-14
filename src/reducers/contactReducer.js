const initialState={
    contacts: [
        /*{
          id: 1,
          name: 'Haitham OUMERZOUG',
          email: 'haitham-dev@gmail.com',
          phone: '0642509795'
        },
        {
          id: 2,
          name: 'Saad OUMERZOUG',
          email: 'saad-dev@gmail.com',
          phone: '0642509796'
        },
        {
          id: 3,
          name: 'Omar OUMERZOUG',
          email: 'omar-dev@gmail.com',
          phone: '0642509797'
        },
        {
            id: 4,
            name: 'Azize OUMERZOUG',
            email: 'azize-dev@gmail.com',
            phone: '0642509798'
          }*/
      ],
    contact:{}
};
//Contact Reducer
const contactReducer =(state=initialState,action)=>{
    switch (action.type) {
        case 'GET_CONTACTS':
            return{
                ...state,
                contacts:action.payload
            };
        case 'GET_ONE_CONTACT':
            return{
                ...state,
                contact:action.payload
        };
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts:state.contacts.filter(contact=>contact.id!==action.payload)
            };
        case 'ADD_CONTACT':
            return{
                ...state,
                contacts:[action.payload,...state.contacts]
            };
        case 'UPDATE_CONTACT':
            return{
                ...state,
                contacts:state.contacts.map(contact=>contact.id===action.payload.id ? contact=action.payload : contact)
            };
        default:
            {return state};
    }
}

export default contactReducer;