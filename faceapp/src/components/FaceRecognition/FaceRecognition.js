import React from 'react';

import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
   return(
       <div className='center ma'>
           <div className='absolute mt2'>
            <img alt="" src={ imageUrl } width='500px' height='auto' id='inputImage'/>
            <div className='bounding-box' style={{ top: box.topCol, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
           </div>
       </div>
   ) 
}

export default FaceRecognition;