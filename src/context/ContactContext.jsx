import { createContext, useState } from 'react';

export const ContactContext = createContext(null)
const ContactProvider = ({children}) => {
    const [list, setList] = useState([])   
    const [updateState, setUpdateState] = useState([]);   
    const [listVal, setListVal] = useState([])
    
    return <ContactContext.Provider value={{list,setList,updateState,setUpdateState,listVal,setListVal}}>
        {children}
    </ContactContext.Provider>
}

export default ContactProvider