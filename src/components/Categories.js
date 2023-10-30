import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'boots',
                    name: 'Обувь'
                },
                {
                    key: 't-shirts',
                    name: 'Футболки'
                },
                {
                    key: 'accessories',
                    name: 'Аксессуары'
                },
                {
                    key: 'hoodies',
                    name: 'Кофты'
                },
            ]
        }
    }
    render() {
        return (
        <div className='categories'>
            {this.state.categories.map(el => (
                <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}> {el.name} </div>
            ))}
        </div>
        )
    }
}

export default Categories