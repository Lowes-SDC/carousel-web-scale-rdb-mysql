import React from 'react';

const CarouselEntry = props => {

    let ratingWidth = props.item.rating * 16;

    return (
        <div>
            <img
                src={props.item.picture}
                className="carouselPhoto"
                onClick={() => {props.changeItem(props.item.id)}}
            ></img>
            <div
                className="carouselTitle"
                onClick={() => {props.changeItem(props.item.id)}}
            >
                <strong>{props.item.name}</strong>
            </div>
            <div className="carouselRating">
                <div className="emptyStars">
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                      ({props.item.numReviews})
                </div>
                <div className="filledInStars" style={{
                    width: ratingWidth
                }}>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                </div>
            </div>
            <div className="carouselPrice">
                <strong>${props.item.price}</strong>
            </div>
            <button className="carouselButton" onClick={props.addToCart}>ADD TO CART</button>
        </div>
    )
}

export default CarouselEntry;