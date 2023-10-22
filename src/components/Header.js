import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'> ViseShipping </span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}