import React,{useState} from 'react'
const Efgh =()=>{
    const[like,setLike]=useState(10)
    
    function Decrement (){
    
        if (like==0){
            setLike(0)
        }     
        else{
            setLike(like-1)
        }    
    }
    function Increment()
    {
        setLike(like+1)
    }
    return(
        <div>
        <p>
            <img src ="https://static.vecteezy.com/system/resources/previews/013/951/373/large_2x/awesome-nature-landscape-beautiful-scene-with-high-tatra-mountain-peaks-stones-in-mountain-lake-calm-lake-water-reflection-colorful-sunset-sky-amazing-nature-background-autumn-adventure-hiking-photo.jpg"></img>
        {like}
        
        </p>
        <button onClick={Increment}>Like</button>
        <button onClick={Decrement}>Disike</button>
        </div>
    )

    }

export default Efgh;