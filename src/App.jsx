import React , {useState} from 'react';
import './styles.css';
import Images from './Images.js'

const App = () => {

const [selectedImg , setSelectedImg] = useState(Images[0]);

  return(
    <div className='App'>

      <div className='container'>
    <img src={selectedImg} alt='selected' className='selected'/>
      <div className='imgContainer'>
      {
        Images.map((img,index) => ( 
        <img key={index} src={img} 
          alt='YemekResmi' 
          onClick={() => setSelectedImg(img)} />
        ))
      }
      </div>
      </div>

    </div>
  )
}


export default App;