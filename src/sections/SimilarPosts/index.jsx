import React from "react";
import {Card} from "../../components";

import card_5 from '../../img/cards/card_5.jpg'
import card_4 from '../../img/cards/card_4.jpg'
import card_3 from '../../img/cards/card_3.jpg'

const SimilarPosts = (props) => {
    const {className} = props

    const classes = 'SimilarPosts ' + (className || '');

    return (
      <section className='SimilarPosts__section'>
          <div className="container">
              <ul className={classes}>
                  <li>
                      <Card img={card_5} className='SimilarPosts__Card'/>
                  </li>
                  <li>
                      <Card img={card_4} className='SimilarPosts__Card'/>
                  </li>
                  <li>
                      <Card img={card_3} className='SimilarPosts__Card'/>
                  </li>
              </ul>
          </div>
      </section>

    );

};

export default SimilarPosts;