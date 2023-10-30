/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export class ShowFullitem extends Component {
    render() {
        return (
        <div className='full-item'>
            <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
            <h2>{this.props.item.title}</h2>
            <b>{this.props.item.price}₽</b>
            <div className='add-to-cart' onClick={()=>this.props.onAdd(this.props.item)}>+</div>
        </div>
        )
    }
}

export default ShowFullitem