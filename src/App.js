import './App.css';
import { collection , doc, getDocs,deleteDoc } from 'firebase/firestore';

import { useEffect,useState } from 'react';
import {db} from './firebase';
import Example from './CreateUser';
export const useCollectionRef = collection(db ,'users');

function App() {
  
 const [users, setUsers] = useState([])
  const getUsers =async()=>{
        const data= await getDocs(useCollectionRef)
        console.log(data);
        setUsers(data.docs.map(doc=>({
          ...doc.data(),
          id:doc.id})))
      };
  
  useEffect(()=>{
    getUsers()
  },[]);

  return (
    <div className="App">
     <Example></Example>
      <div>
     { console.log(users)}
        <ul>
          {
           
            users.map(user => {
              return(<li key={user.id}>Name is {user.name} and age is {user.age}</li>)
            })
          }
        </ul>
      </div>
      
      
    </div>
  );
}


export default App;