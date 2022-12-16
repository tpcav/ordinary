import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from "react";
import Leaderboard from '../app/dashboard/Leader';

import Menu from '../app/dashboard/Menu';
import PersonalBest from '../app/dashboard/PersonalBest';
import Hero from '../app/dashboard/Hero';
import Footer from '../app/dashboard/Footer';


export default function Example() {

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Ordinary. Word Guessing Game.</title>
        <meta name="description" content="Word guessing game that test your knowledge of the alphabet."></meta>
      
      </Head>

      <Menu/>
      
      <Hero/>

      <PersonalBest/>

      <Leaderboard/>

      <footer className='w-full
            fixed left-0 bottom-0
            flex justify-center items-center
            rounded-tl-3xl
            rounded-tr-3xl
            text-white
            shadow-xl
            '>
            <div className='rounded-tl-3xl rounded-tr-3xl flex justify-center items-center w-1/2 fixed'>
              <p className='pb-20 backdrop-blur-sm bg-gray/80 border-2 border-blue-500 rounded-full w-48 h-48 text-center'>
                <Link className="text-lg bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full" href="/game">Play</Link>
              </p>
            </div>

      </footer>

      <Footer/>
    </div>
  )
}
