import {useEffect, useState} from "react";
import './App.css';
import firebaseDB from './firebase';
import { collection, getDocs, onSnapshot } from "firebase/firestore";


function App() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
     //データ取得
     const userData = collection(firebaseDB, "users");
     //console.log(userData);
     getDocs(userData).then((snapShot) => {
      //console.log(snapShot.docs.map((doc) => ({...doc.data()})));
      setUsers(snapShot.docs.map((doc) => ({...doc.data()})));
     });



     //リアルタイムでデータ取得
     onSnapshot(userData, (user)=>{
      setUsers(user.docs.map((doc) => ({...doc.data()})));
     })
   }, []);


   return (
    <div className="App">
    {users.map((user) => (
      <div key={user.id}> 
        <h1>{user.name}</h1>
        <p>{user.id}</p>
      </div>
    ))}
   </div>
   );
   
}

export default App;

