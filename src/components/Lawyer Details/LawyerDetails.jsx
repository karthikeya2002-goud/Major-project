import React,{useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import {db} from "../../firebase-config"
import { collection,getDocs } from 'firebase/firestore'
import Header from '../Header'
import "./details.css"
const LawyerDetails = () => {
  const [user,setUser] = useState([]);
  const collectionRef = collection(db,"LawyerDetails");
  useEffect(()=>{
    const getDetails =async()=>{
      const data = await getDocs(collectionRef);
      console.log(data)
      setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
      console.log("firebase",user)
    }
    getDetails();
  },[])
  return (
    <>
    <Header/>
    <div className='details container'>
      <h1 className='d-flex align-items-center justify-content-center'>Lawyer Details</h1>
      
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>PhNo</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Amar Deep M</td>
          <td>9666558866</td>
          <td>Karmangaht</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Amar Kumar V</td>
          <td>9848326254</td>
          <td>Baghlingampally</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Amar Nath Ch</td>
          <td>9849985139</td>
          <td>Gaddiannaram</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Anand Babu D</td>
          <td>9966643862</td>
          <td>Peerzadiguda</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Anand Goud K</td>
          <td>9441093895</td>
          <td>Amberpet</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Anand Harnoor</td>
          <td>9849377103</td>
          <td>Himayatnagar</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Amar Deep M</td>
          <td>9666558866</td>
          <td>Karmangaht</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Anirudh D</td>
          <td>040-24755644</td>
          <td>Hanuman Tekdi</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Anitha D</td>
          <td>9440552820</td>
          <td>Tandur R.Rdist</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Anitha K</td>
          <td>9133064670</td>
          <td>Uppal</td>
        </tr>
         </tbody>
    </Table>
     
    </div>
    </>
  )
}

export default LawyerDetails