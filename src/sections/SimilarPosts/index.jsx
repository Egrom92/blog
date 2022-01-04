import React from "react";
import {Card} from "../../components";

import card_5 from '../../img/cards/card_5.jpg'
import card_4 from '../../img/cards/card_4.jpg'
import card_3 from '../../img/cards/card_3.jpg'
import card_6 from "../../img/cards/card_6.jpg";
import {NavLink} from "react-router-dom";
import Cards from "../../components/Cards";

const SimilarPosts = (props) => {
    const {className} = props

    const classes = 'SimilarPosts ' + (className || '');

    return (
      <section className='SimilarPosts__section'>
          <div className="container">
              <div className={classes}>
                  <Cards count={3} className='SimilarPosts__Cards'/>
              </div>
          </div>
      </section>

    );

};

export default SimilarPosts;