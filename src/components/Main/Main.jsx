import React from 'react'
import { Dropdown } from '../Dropdown/Dropdown'
import { Middle } from '../Middle/Middle'
import { Right } from '../Right/Right'
import './Main.css'

export const Main = () => {
  return (
    <div className='main-container'>
        <Dropdown />
        <Middle />
        <Right />   
    </div>
  )
}
