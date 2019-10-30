import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/carousel.jsx';


ReactDOM.render(<Carousel />, document.getElementById("carousel"));

window.changeItem = new Event("changeItem");