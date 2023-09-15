import React, {useState} from 'react';
import ImageCont from './ImageCont';
import Button from '@mui/material/Button';

function createGalleryList() {
    let arr = [];
    for (let index = 0; index < 5; index++) {
        arr[index] = (<div style={{ padding: 8 }}>
            <ImageCont key={index} ></ImageCont>
        </div>)
    }
    return arr;
}

const Gallery = () => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div style={{ textAlign: 'center', paddingTop: '50%' }}>
            <div style={{ padding: 16 }}>
                <Button onClick={() => setIsClicked(!isClicked)} variant='contained' size='large'>HI</Button>
            </div>
            {isClicked && createGalleryList()}
        </div>
    )
}

export default Gallery;