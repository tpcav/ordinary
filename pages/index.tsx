import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from "react";

import Navbar from "../app/dashboard/Navbar";
import Modal from '../app/dashboard/modal';

export default function Example() {
  
  return (
    <div className="overflow-hidden h-screen">
      <Head>
        <title>Ordinary. Word Guessing Game.</title>
        <meta name="description" content="Word guessing game that test your knowledge of the alphabet."></meta>
      
      </Head>

      <Navbar/>

      <main className='overflow-hidden flex flex-col items-center justify-center h-screen overflow-y-hidden pb-64'>
        <div className='overflow-hidden flex flex-col justify-center items-center overflow-y-hidden'>

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
