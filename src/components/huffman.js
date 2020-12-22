import { render } from '@testing-library/react';
import React,  {Component} from 'react';
import './huffman.css';

class huffman extends Component{
    render(){
        setup();
    }
}

class Node extends Component{
    constructor(props, freq, char, right, left, next){
        super(props);
        this.state = {
            freq: props.freq,
            char: props.char,
            right: props.right,
            left: props.left,
            next: props.next
        };
    }
    
}