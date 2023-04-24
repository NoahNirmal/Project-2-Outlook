import React, { useState } from 'react'
import './Middle.css'
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import { useDispatch, useSelector } from 'react-redux';
import { deleteemaildata, viewmaildata } from '../../Redux/action';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

export const Middle = () => {

  const dispatch = useDispatch()


  const data = useSelector((state) => state.reducer.displaydata)
  //  console.log(data[0].category,"displaydata")


  const viewmail = (id, category) => {
    console.log(id)
    return dispatch(viewmaildata(id, category))

  }
  const deletedata = (category, id) => {
    console.log(id)
    return dispatch(deleteemaildata(category, id))
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='middle-container'>
      <div className='middle-header'>
        <div className='header-dropdown'>
          {/* <h2>{data && data[0].category }</h2> */}
          {/* <span>hello</span> */}
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{position:"absolute",right:"0",top:"10px",color:"black"}}
          >
            Filter 
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>FLag</MenuItem>
          
          </Menu>
        </div>
      </div>
      {
        Array.isArray(data) && data.map((ele) => {
          // console.log(ele)
          return (<div className='message' onClick={() => viewmail(ele.mId, ele.category)}>
            <div className='middle-btns'>
              <DeleteIcon onClick={(e) => {
                e.stopPropagation();
                deletedata(ele.category, ele.mId)
              }}/>
              {/* <button >delete</button> */}
              {/* <button>read</button> */}
              <MarkAsUnreadIcon />

            </div>
            <p>{ele.mId}</p>
            <h4>{ele.subject}</h4>
            <p>{ele.content}</p>

          </div>)
        })
      }



    </div>
  )
}
