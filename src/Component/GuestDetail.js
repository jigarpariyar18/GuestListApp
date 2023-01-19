import React, { useState } from 'react'
import Admin from './Admin'
import jsondata from '../data.json'

function GuestDetail() {
    const [data , setData]= useState({
        id:"",
        Name:'',
        email:'',
        phonenumber:'',
        noofadults:'',
        noofchildren:'',
        checkindate:'',
        checkoutdate:'',
        selectRoom:''
      })
      
    
      const [storedata,setStoredata]=useState([])
      function submithandler(event){
           event.preventDefault()
           const newdata={
              id:storedata.length,
              Name:data.Name,
              email:data.email,
              phonenumber:data.phonenumber,
              noofadults:data.noofadults,
              noofchildren:data.noofchildren,
              checkindate:data.checkindate,
              checkoutdate:data.checkoutdate,
              selectRoom:data.selectRoom
           }
           setStoredata([...storedata,newdata])
           
           setData({
            Name:'',
            email:'',
           phonenumber:'',
           noofadults:'',
           noofchildren:'',
           checkindate:'',
           checkoutdate:'',
           selectRoom:''
           })
      }
    console.log(jsondata.List)
  return (
    <div>
        <form onSubmit={submithandler}>
        <div>
        <label>Name</label>  
        <input type='text' placeholder='Name' value={data.Name} onChange={(e)=>setData({...data,Name:e.target.value})}/>
        </div>
        <div>
        <label >email</label>
        <input type='email' placeholder='Email' value={data.email}  onChange={(e)=>setData({...data,email:e.target.value})}/>
        </div>
        <div>
        <label>Phone-Number</label>
        <input type='text' placeholder='phone number' value={data.phonenumber}  onChange={(e)=>setData({...data,phonenumber:e.target.value})}/>
        </div>
        <div>
        <label>NO of adults</label>
        <input type='number' placeholder='no of adults' value={data.noofadults}  onChange={(e)=>setData({...data,noofadults:e.target.value})}/>
        </div>
        <div>
        <label >No of children </label>
        <input type='number' placeholder='no of children' value={data.noofchildren}  onChange={(e)=>setData({...data,noofchildren:e.target.value})}/>
        </div>
        <div>
        <label>Check-in date</label>
        <input type='date' placeholder='check in date' value={data.checkindate}  onChange={(e)=>setData({...data,checkindate:e.target.value})}/>
        </div>
        <div>
        <label>Check-in date</label>
        <input type='date' placeholder='check out date' value={data.checkoutdate}  onChange={(e)=>setData({...data,checkoutdate:e.target.value})}/>
        </div>
        <div>
        <div>
        <label>Select Room</label>
        <select id="SelectRooms" name='SelectRooms'  value={data.selectRoom}  onChange={(e)=>setData({...data,selectRoom:e.target.value})}>
            <option  value='normalroom'>Normal Rooms</option>
            <option value='acroom'>Ac Room</option>
            <option value='deluxroom'>Delux Room</option>
            <option value='superdeluxeroom'>Super Delux Room</option>
            <option value='Suit'>Suit</option>
        </select>
            </div>    
 
        <button type = 'submit'>submit</button>
        </div>
      </form>
      <Admin storedata={storedata}/>
    </div>
  )
}

export default React.memo(GuestDetail)