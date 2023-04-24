import React from 'react'
import './Right.css'
import { useSelector } from 'react-redux'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export const Right = () => {
  const data =useSelector((state)=>state.reducer)
  const dataid=data.displaymsg
  console.log("DataDisplay MSg in Right.jsx",data)
  // const dataarr =data.displaydata
  // console.log(dataarr)
  

  return (
    <div className='right-container'>
      {dataid.mId !== undefined && dataid.category !==undefined && dataid.content!== undefined ?(
      <>
      <div className='mail-details'>
        <div className='maildetails-header'>

        <AccountCircleIcon  style={{fontSize: "4.5rem",color :"#e6e6e6" ,padding:"10px"}}/>
        <div className='mail-name'>

        <p>{ dataid.mId}</p>
        <h3>{dataid.subject}</h3>

        </div>
      
      
        </div>
      
      <p className='details-p'>{dataid.content}</p>
      </div>
      </>):(<>
      <div className='Emptyimage'>
      <img src="https://chandrahaswtw.github.io/outlook-clone/static/media/envelope.0b6ed872.svg" alt="" />
      <p>Select an item to read</p>
      <span>Nothing is selected !</span>
      </div>
      
      </>)}
      



    </div>
  )
}
