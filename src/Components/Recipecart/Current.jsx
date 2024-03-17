
import PropTypes from 'prop-types';
const Current = () => {

    
  const [current, setCurrent]=useState([]);

  const handleCurrent=(sidebar)=>{
    setCurrent([...current,sidebar]);
  }
     console.log(current);
    return (
        <div>
            
        </div>
    );
};

export default Current;