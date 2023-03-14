import React,{useState,useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
import {Button,Table} from 'react-bootstrap'
import './css/courtServices.css'
import {db} from "../../firebase-config"

import { collection, query, where, getDocs } from 'firebase/firestore'



function DisplayData() {

    const [Data,setData ]= useState([]);  
    const [search,SetSearch] = useState("");
    
    
    

    const handleSearch = (e)=>{
      
      SetSearch(e.target.value);
      
    }
  
    // const fetch = ()=>{
    //     const colRef = collection(db,"caseDetails");
    //     const  q= query(colRef,where("FillingNumber","==",search))
    //     onSnapshot(q,(snapShot)=>{
      //         let coll = []
    //       snapShot.docs.forEach((doc)=>{
    //         coll.push({...doc.data(),id:doc.id})
    //       })
    //       try{
    //           setData(coll[0])
    //           console.log(Data)
    //         }catch(e){
      //         // console.log(e)
      //       }
    //     })
    // }
    // fetch();
  const colRef = collection(db,"caseDetails");
  const  q= query(colRef,where("FillingNumber","==",search))
  const getDetails =async ()=>{
     const data = await getDocs(q);
    //  console.log(data.docs)
    setData(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
   }
  //  useEffect(()=>{
  //   getDetails();
  //  },[])
  
    if(search!=""){
      getDetails();
    }

  return (
    <>
      
      <div className="input-group d-flex align-items-center justify-content-center ">
         {/* <div className='container d-flex align-items-center justify-content-center mb-2'><h1 className='text-decoration-underline mb-2'>CaseDetails</h1></div> */}
        <div className="form-outline">
          <input type="search" id="form1" className="form-control" placeholder='Enter filling Number' onChange={handleSearch}/>
        </div>
      </div>
      {
        Data.map((doc)=>{
          return (
            <div>
            <Table striped bordered hover className='mt-4' variant="dark">
      <thead>
        <tr>
          
          <th colSpan="2" className="text-center">Case Details</th>
          
        </tr>
      </thead>
      <tbody >
        <tr className='text-center' >
          <th scope="row">Case Type</th>
          <td>{doc.CaseType}</td>
          
        </tr>
        <tr className="text-center">
          <th scope="row">Filling Number</th>
          <td >{doc.FillingNumber}</td>
         </tr>
        <tr className="text-center">
          <th scope="row">Filling Date</th>
          <td >{doc.FillingDate}</td>
         </tr>
        <tr className="text-center">
          <th scope="row">Registration Number</th>
          <td >{doc.RegistrationNumber}</td>
         </tr>
        <tr className="text-center">
          <th scope="row">Registration Date</th>
          <td >{doc.RegistrationDate}</td>
         </tr>
        <tr className="text-center">
          <th scope="row">CNR Number</th>
          <td >{doc.CNR_Number}</td>
         </tr>
          
         
        

        <tr>
          
          <th colSpan="2" className="text-center bg-dark">Case Status</th>
          
        </tr>
        
      
         <tr className='text-center' >
          <th scope="row">First Hearing Date</th>
          <td >{doc.FirstHearingDate}</td>
          
        </tr>
        <tr className="text-center">
          <th scope="row">Next Hearing Date</th>
          <td >{doc.NextHearingDate}</td>
         </tr>
        <tr className="text-center">
          <th scope="row">Case Stage</th>
          <td >{doc.CaseStage}</td>
         </tr>
        <tr className="text-center">
          <th scope="row">Court Number And Judge</th>
          <td>{doc.CourtNumberAndJudge}</td>
         </tr>
        
      </tbody>
    </Table> 
    </div>
          )
        })
      }
      
       
  
    

      

    </>
  )
}

export default DisplayData