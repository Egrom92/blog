import React from "react";
import {Eye} from '../../svg'

const PostInfo = (props) => {
  const {} = props;

  const {className} = props
  const classes = 'PostInfo ' + (className || '');

  return (
    <div className={classes}>
      <span className='PostInfo__category'>
        Название категории
      </span>
      <span className="PostInfo__createAt">
        мрт 23, 2021
      </span>
      <div className="PostInfo__views">
        <Eye className='PostInfo__Eye'/>
        <span className="PostInfo__EyeCount">
          152
        </span>
      </div>
    </div>
  );

};

export default PostInfo;