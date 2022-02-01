
import { useState } from 'react';
import { data } from './data';
import logo from './logo.png';
import './App.css';
import circles from './circles.gif'
 
 
 
function App() {
  
const [photos, setPhotos] = useState(data);
const [t, setT] = useState(0);
const [datas, setDatas] = useState(data);
let newArr = [...datas];
 
// remove object//
const removeObject =  (id) => { 
let newPhotos = photos.filter(photos =>photos.id !==id);
setPhotos(newPhotos)
}

const[showMore, setShowMore] = useState(false) // Show more//
  
  const nextPhoto = (e, index) => {
    setDatas(newArr);

      const slide = document.querySelectorAll("#slide");
      newArr[index] = photos[index];
    
      setT ((t => {
        t ++ ;
        if (t > 2 ) {
        t = 0;
        }
        return t;
        
      }));
      slide[index].setAttribute('src', newArr[index].image[t] );
      return slide;
    };

    const prevPhoto = (e, index) => {
      
        const slide = document.querySelectorAll("#slide");
        newArr[index] = photos[index];
        setDatas(newArr);
        setT ((t => {
        t -- ;
        if (t <0 ) {
        t = 2;
        }
        return t;
      }));

      slide[index].setAttribute('src', newArr[index].image[t] );
      return slide;
    };

   

  return (
    <div className="App">
    <div className="container "> 
       
      <img src={ logo } className='App-logo' alt='logo'/>
      <h1>Top {photos.length} Travel Destinations <br>
      </br> to Visit  in the World </h1>
     

    {photos.map((element => {
        const {id, destination, image, description} = element;
        const index = photos.indexOf(element);

        return (

 
          <div className='item' key={ id } data-id={data.id}>
            
              <div className='App'>
               <p className='number'>   { id  }   </p>
               <img className='gif' src={circles} alt="loading..."  width="40px" /> 
                <h3 className='destination' >  { destination } </h3>
                 </div>
                
            <div className='App'>
          <img id="slide"  src={ image[2] }  width = "400px"alt='nature'/>
 
</div>
<div className='App'>
          {/* / / Show more// */}
        
     <p className='description' > {showMore ? description : description.substring (0,100) + "....."}
     <button className='show' onClick={() => setShowMore(!showMore)}>{showMore? "Show less" : "Show more"} </button></p>
</div>

          <div className='btn'>
            <button className='btnSlide' onClick={ (e)=> prevPhoto(e, index)  } id = { id } >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
</svg>
                </button>
            <button className='btnSlide' onClick={ (e)=> nextPhoto(e, index)} id = { id } > 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg>  </button>
 
 {/* // remove object// */}
 
 <button className='btnSlide' onClick= {( ) => removeObject(id)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>
  
          </div>
          
          </div>     
         
        )    
    }))}

 {/* //  Delete All // */}
<div className='App'>
    
    <button className='delete' onClick={() =>setPhotos([])}> Delete All</button>
    </div>
    </div>
   
    </div>
    
    );
}

export default App;
