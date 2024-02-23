import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    state = { clicked: false }; 

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className='container'>
                        <div className="navbar-brand">
                            <a href="#home" className='text-danger'>WebSkillsway</a>
                        </div>
                        <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><a className='active' href="">What is WebSkillsway?</a> </li>
                            <li><a href="">Home</a> </li>
                            <li><a href="">Project</a> </li>
                            <li><a href="">Contact</a> </li>
                        </ul>
                        <div id='btn-container' className={this.state.clicked ? "#btn-container active" : "#"}>
                            <button className='button'>Sign In</button>
                            <button className='button'>Sign Up</button>
                        </div>
                    </div>
                    <div id='mobile' onClick={this.handleClick}>
                        <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>
                <div className="content">
                    <h1 className='heading'>A WebSkillsway Community Found A </h1>
                    <p className='description'>WebSkillsway is your go-to hub for mastering website design, offering tutorials, resources, and a vibrant community for aspiring and experienced designers alike.</p>
                    <button className='btn'>Join Us</button>
                </div>
            </div>
        );
    }
}

export default Header;
