/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import {FaTrashAlt} from 'react-icons/fa'

export class order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}₽</b>
        <FaTrashAlt className='delete-icon' onClick={()=> this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}

export default order