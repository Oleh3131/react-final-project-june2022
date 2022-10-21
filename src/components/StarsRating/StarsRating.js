import React from 'react';

import './StarsRating.css'




const StarsRating = ({vote_average}) => {

    const ratings = document.querySelectorAll('.Rating');

    if (ratings.length > 0) {

        initRatings();

    }


    if(vote_average===0){

        vote_average=2
    }


    //Основна функція
    function initRatings() {

        let ratingActive;

        let ratingValue;

        for (let i = 0; i < ratings.length; i++) {

            const rating = ratings[i];

            initRating(rating);

        }


        // Ініціалізуєм конкретний рейтинг
        function initRating(rating) {

            initRatingVariables(rating);

            setRatingActiveWidth();

        }


        //Ініціалізуєм змінні

        function initRatingVariables(rating){

            ratingActive = rating.querySelector('.RatingActive');

            ratingValue = rating.querySelector('.RatingValue');
        }


        //Змінюємо ширину активних зірок

        function setRatingActiveWidth(index=ratingValue.innerText){

            const ratingActiveWidth =index/0.1;

            ratingActive.style.width = `${ratingActiveWidth}%`;


        }



    }
    return (
        <div>
            <div className={"Rating"}>
                <div className={"RatingBody"}>
                    <div className={"RatingActive"}></div>
                    <div className={"RatingItems"}>
                        <input type="radio" className={"RatingItem"} value={'1'} name={'rating'}/>
                        <input type="radio" className={"RatingItem"} value={'2'} name={'rating'}/>
                        <input type="radio" className={"RatingItem"} value={'3'} name={'rating'}/>
                        <input type="radio" className={"RatingItem"} value={'4'} name={'rating'}/>
                        <input type="radio" className={"RatingItem"} value={'5'} name={'rating'}/>
                        <input type="radio" className={'RatingItem'} value={'6'} name={'rating'}/>
                        <input type="radio" className={'RatingItem'} value={'7'} name={'rating'}/>
                        <input type="radio" className={'RatingItem'} value={'8'} name={'rating'}/>
                        <input type="radio" className={'RatingItem'} value={'9'} name={'rating'}/>
                        <input type="radio" className={'RatingItem'} value={'10'} name={'rating'}/>
                    </div>
                </div>
                <div className={'RatingValue'}>
                    <h4>{vote_average}</h4>
                </div>
            </div>
        </div>
    );
}

export {
    StarsRating
}