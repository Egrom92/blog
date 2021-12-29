import React from "react";
import {DefaultLayout} from "../../layouts";
import {Card} from "../../components";
import card_1 from '../../img/cards/card_1.jpg'
import card_2 from '../../img/cards/card_2.jpg'
import card_3 from '../../img/cards/card_3.jpg'

const Post = (props) => {

  return (
    <DefaultLayout>
      <section className="Posts-section">
        <div className="container">
          <ul className="Posts">
            <li>
              <Card img={card_1} clasName='Posts__Card'/>
            </li>
            <li>
              <Card img={card_2} clasName='Posts__Card'/>
            </li>
            <li>
              <Card img={card_3} clasName='Posts__Card'/>
            </li>
            <li className='big'>
              <Card img={card_1} clasName='Posts__Card'/>
            </li>
            <li>
              <Card img={card_2} clasName='Posts__Card'/>
            </li>
            <li>
              <Card img={card_3} clasName='Posts__Card'/>
            </li>
          </ul>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Post;
