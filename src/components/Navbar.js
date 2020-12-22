import React,  {Component} from 'react';
import './Navbar.css'

class NavBar extends Component{

    render() {
        return(
            <div className = "Header">
                <h1 className = "Title">
                    Huffman Coding Visualizer
                </h1>
                < textarea className = "huffmanString" placeholder = "Enter a String"/>
                <ul>
                    <button className = "create">
                        Create Huffman Tree
                    </button>
                    <button className = "run">
                        Run Visualization
                    </button>
                    <button className = "Random">
                        Random String
                    </button>
                </ul>
            </div>
        );
    }
}

export default NavBar;