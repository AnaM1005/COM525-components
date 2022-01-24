import React from "react";
import StarRating from './starRating.js'





const Review = () => {
    return (
        <div class="boxed">
        <div className="review">
                    <h1>Thanks for ordering with Best Cuisine! Please tell us how did we do!</h1>
        <h2>Please rate your experience on a scale of 1-5 stars, where 1 star is 'Not at all satsfied' 
            and 5 is 'Extremely satisfied'.</h2>
            <p>1. The quality of the food:</p>
            <StarRating />
            <p>2. Delivery time:</p>
            <StarRating />
            <p>3. Delivery driver service:</p>
            <StarRating />
            <p>4. Price paid:</p>
            <StarRating />
            <p>5. Overall experience:</p>
            <StarRating />
            <button class='button'>SUBMIT</button>
        </div>
        </div>
     )
};


export default Review; 

