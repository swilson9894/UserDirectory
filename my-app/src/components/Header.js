import React, { Component } from 'react';
import "../styles/Header.css";


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>My Employee Directory</h1>
                <p>Check out my list of employees and be sure to click the column name to filer the heading and to narrow your search.</p>
            </div>
        )
    }
}