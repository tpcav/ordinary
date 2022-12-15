import React from 'react';

const Modal = ({ isOpen: , onClose: any }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="absolute w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded-lg shadow-xl">
        <button onClick={onClose} className="text-black hover:bg-gray-300 p-2 bg-gray-200 rounded-full w-10 h-10">
          x
        </button>
        <p className='text-black text-2xl font-bold text-center pb-4'>How to Play?</p>
        <p className='p-4 text-black'>1. There a list of 4-letter nouns sorted in alphabetical order.</p>
        <p className='p-4 text-black'>2. You will be given a random word from the list.</p>
        <p className='p-4 text-black'>3. There will be a 60 second timer going once the game starts.</p>
        <p className='p-4 text-black'>4. Given the random word from the list, guess the word that comes after that word.</p>
        <p className='p-4 text-black'>5. If you guess correctly, the timer will reset back to 60 seconds, and a new random word will be generated. Keep going.</p>
      </div>
    </div>
  );
};

export default Modal;