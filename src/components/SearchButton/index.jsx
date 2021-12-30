import {Search} from "../../svg";
import {useDispatch, useSelector} from "react-redux";
import { searchModalToggle } from '../../store/search';



const SearchButton = (props) => {
  const {className} = props
  const dispatch = useDispatch();




  const classes = 'SearchButton ' + (className || '');

  return (
    <img onClick={()=>dispatch(searchModalToggle())} className={classes} src={Search} alt=""/>
  );
};

export default SearchButton;
