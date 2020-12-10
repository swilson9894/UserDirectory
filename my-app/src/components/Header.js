import React, { Component } from 'react';
import "../styles/Header.css";


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>My Employee Directory</h1>
                <p>Here is my Employee Directory... Use search bar above to narrow search</p>
            </div>
        )
    }
}