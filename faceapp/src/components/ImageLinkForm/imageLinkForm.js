import React from 'react';
import './imageLinkForm.css'
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3 center'>
                {'This magic brain will detect your faces in your picture. Give it a try.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit} >DETECT</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;