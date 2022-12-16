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

      <footer className='w-full p-4 pb-8
            fixed left-0 bottom-0
            flex justify-center items-center bg-gray-200
            rounded-tl-3xl
            rounded-tr-3xl
            text-white
            '>
            <p className='p-2 bg-black rounded-full w-48 text-center'>
              <Link href="/game">Play</Link>
            </p>
      </footer>

      <Footer/>
    </div>
  )
}
