import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from "react";

import Navbar from "../app/dashboard/Navbar";
import Modal from '../app/dashboard/modal';

export default function Example() {

  const [highStreak, setHighStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const savedHighStreak = localStorage.getItem("highStreak");
    const savedHighScore = localStorage.getItem("highScore");
    if (savedHighStreak && savedHighScore) {
      setHighStreak(parseInt(savedHighStreak));
      setHighScore(parseInt(savedHighScore));
    }
  }, []);
  
  return (
    <div className="overflow-hidden h-screen">
      <Head>
        <title>Home | Ordinary</title>
        <meta name="description" content="Word guessing game testing your ABCs."></meta>
      </Head>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-C7F4B824RJ"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-C7F4B824RJ');
      </script>

      <Navbar/>
      <div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>

      <main className='overflow-hidden flex flex-col items-center justify-center h-screen overflow-y-hidden pb-64'>
        <div className='overflow-hidden flex flex-col justify-center items-center overflow-y-hidden'>

          <div className='bg-gray-800 p-4 m-4 rounded-lg'>
            <p className='font-bold text-2xl text-center'>Personal Best</p>
            <div className='p-2'>
              <p className='pt-2 text-lg text-center'>Streak: {highStreak}</p>
              <p className='text-lg text-center'>Score: {highScore} </p>
            </div>
        
          </div>

        </div>
        <button className='bg-gray-600 mt-2 p-2 px-6 rounded-full'>
          <Link href="/game">Start Game</Link>
        </button>
      </main>
      <footer className="w-full p-4
            fixed left-0 bottom-0
            flex justify-center items-center
            text-white"><p>Made with ❤️ by <Link href="https://www.instagram.com/" className='underline'>Thomas Cavalcante</Link></p>
      </footer>
    </div>
  )
}
