import React from 'react' ;
import AddIcon from '@mui/icons-material/Add';


 const Abcd = () => {
  
    function message(){
        open("https://www.youtube.com/")
    }
  return(
    <div>
        <span onMouseEnter={message}>
          <AddIcon />
        </span>
    </div>
  )
}
export default Abcd;
