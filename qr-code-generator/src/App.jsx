import {QRCodeSVG} from 'qrcode.react';
import React, { useState } from 'react';
import './App.css'

function App() {
  const [url, setUrl] = useState(' ')
  const [qrCode, setQrCode] = useState(' ')
  const handleSubmit = (e) => {

  }
 

  return (
    <div className='justify-items-center'>
     <h1 className="text-3xl font-bold justify-center">
      QR Code Generator
    </h1>
    <form>
      <input type="url" name="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder='Enter URL' className='border-2 border-gray-300 p-2 m-2 border-r-amber-50' />
      <button type='submit' onClick={handleSubmit} className='bg-blue-500 text-white p-2 m-2'>Generate QRCode</button>
    </form>
    
    </div>
  )
}

export default App
