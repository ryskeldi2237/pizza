import React from 'react'
import './Contacts.css'
export default function Contact() {
    return (
        <div className="contacts">
        <img src="img/left.jpg" alt="img"></img>
        <img src="img/one.jpg" alt="img"></img>
        <img src="img/two.jpg" alt="img" className="delete"></img>
        <img src="img/three.jpg" alt="img" className="deleted"></img>
        <img src="img/four.jpg" alt="img"></img>
        <div className="contacts__block">telegram : @ryskeldi2237</div>
      </div>
    )
}