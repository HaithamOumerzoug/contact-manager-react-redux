import { createStore, applyMiddleware , compose } from 'redux'
import thunk from 'redux-thunk'

import reducersRoot from './reducers'

const initState={}

// Create Contact Store
const storeContact=createStore(
    reducersRoot,
    initState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default storeContact;