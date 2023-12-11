import React from 'react'
import { useParams } from 'react-router-dom';
import './Viewer.css';

const Viewer = () => {
    const { link } = useParams();
  return (
    <div className='viewer'>
    <iframe title='Book Viewer' src={decodeURIComponent(link)} />
    </div>
  )
}

export default Viewer
