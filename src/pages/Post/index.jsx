import React from "react";
import {DefaultLayout} from "../../layouts";
import {PostInfo, Content, PostNavigation} from "../../components";
import { SimilarPosts} from "../../sections";
import card_1 from '../../img/cards/card_1.jpg'

const Post = (props) => {

  return (
    <DefaultLayout>
      <section className="Post__section">
        <div className="container">
          <div className="Post">
            <img src={card_1} alt="" className="Post__img"/>
            <div className="Post__content">
              <PostInfo className='Post__PostInfo'/>
              <Content className='Post__Content'/>
              <PostNavigation className='Post__PostNavigation'/>
            </div>
          </div>
        </div>
      </section>
      <SimilarPosts className='Post__SimilarPosts'/>
    </DefaultLayout>
  );
};

export default Post;
