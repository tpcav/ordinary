import Draggable from 'react-draggable';
import React from 'react'

export default function Keyboard() {
  const keyboard = ['ABCDEFG','HIJKLM','NOPQRS','TUVWXYZ']

  return (
    <div>
      
        <div>
          {keyboard.map((row) => (
            <div className="flex justify-center">
              {row.split('').map((key) => (
                <Draggable>
                  <div className="flex h-12 w-12 m-1 mt-4 items-center justify-center bg-gray-300 border-2 border-gray-400">{key}</div>
                </Draggable>
              ))}
            </div>
          ))}
        </div>
    </div>
  )
}