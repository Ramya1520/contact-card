import { createContext, useState } from 'react';

export const ContactContext = createContext(null)
const ContactProvider = ({children}) => {
    const [list, setList] = useState([])   
    const [updateState, setUpdateState] = useState([]);   
    
    
    return <ContactContext.Provider value={{list,setList,updateState,setUpdateState}}>
        {children}
    </ContactContext.Provider>
}

export default ContactProvider