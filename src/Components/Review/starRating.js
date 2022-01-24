import React, { useState } from "react";
import {FaStar } from "react-icons/fa";
import "./review.css";

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div class="starRating">
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
        return (
            <label>
                <input type="radio" name="rating" value={ratingValue} 
                onClick={()=>setRating(ratingValue)}
                />
             <FaStar 
             className="star" 
             color={ratingValue <= (hover || rating)? "#FCA311":"#E5E5E5"} 
             size={24}
             onMouseEnter={(_) => setHover(ratingValue)}
            onMouseLeave={(_) => setHover(null)}/>
        </label>
        );
        })}
        </div>
        );
};

export default StarRating;