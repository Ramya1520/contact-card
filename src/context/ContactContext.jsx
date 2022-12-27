import { createContext, useState } from 'react';

export const ContactContext = createContext(null)
const ContactProvider = ({children}) => {
    const [list, setList] = useState([])    
    console.log(list,"lll");    
    
    return <ContactContext.Provider value={{list,setList}}>
    {children}

    </ContactContext.Provider>
}

export default ContactProvider