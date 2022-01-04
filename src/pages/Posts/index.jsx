import React from "react";
import {DefaultLayout} from "../../layouts";
import {Cards} from "../../components";


const Post = (props) => {

  return (
    <DefaultLayout>
      <section className="Posts-section">
        <div className="container">
          <Cards count={7} big={true} className="Posts__Cards"/>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Post;
