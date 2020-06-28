// Core
import React, { Component } from 'react';

// Data sets
//import PolitifactReal from '../data/politifact/politifact_real.json';
//import PolitifactFake from '../data/politifact/politifact_fake.json';
let politifactReal = require('../data/politifact/politifact_real.json')
let politifactFake = require('../data/politifact/politifact_fake.json')

// Parsing
//var fakeJSON = JSON.parse(politifactFake);

const fakeNews = politifactFake[Math.floor(Math.random() * politifactFake.length)];
console.log(fakeNews);

//var realJSON = JSON.parse(PolitifactReal, (key, value) => {
    
//})

export class PolitifactParser extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default PolitifactParser;