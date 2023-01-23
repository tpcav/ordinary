import Draggable from 'react-draggable';
import React from 'react'

export default function Keyboard() {
  const keyboard = ['ABCDEFG','HIJKLMN','OPQRSTU','VWXYZ']

  return (
    <div>
      
        <div>
          {keyboard.map((row) => (
            <div className="flex justify-center font-semibold">
              {row.split('').map((key) => (
                <Draggable>
                  <div className="flex text-lg h-12 w-12 m-1 mt-4 items-center justify-center bg-gray-200 border-2 border-gray-300">{key}</div>
                </Draggable>
              ))}
            </div>
          ))}
        </div>
    </div>
  )
}