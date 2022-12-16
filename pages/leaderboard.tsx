import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from "react";

import Menu from '../app/dashboard/Menu';
import LeaderboardDataService from "../services/leaderboard.service";
import LeaderboardType from "../types/leaderboard.type";

export default function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        LeaderboardDataService.getTopTenStreaks().then((snapshot) => {
            let tmpTopTenStreaks: any = [];

            snapshot.forEach(childSnapshot => {
                if (childSnapshot.exists()) {
                    tmpTopTenStreaks.push(childSnapshot.val());
                }
            });

            setLeaderboard(tmpTopTenStreaks);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

  return (
    <div className="overflow-hidden h-screen bg-gray-100">
      <Head>
        <title>Leaderboard | Ordinary</title>
        <meta name="description" content="Word guessing game testing your ABCs."></meta>
      </Head>

      <Menu/>

      <main className='overflow-hidden flex flex-col items-center justify-center h-screen overflow-y-hidden pb-64'>
        <div className='overflow-hidden flex flex-col justify-center items-center overflow-y-hidden'>

          <div className='bg-gray-300 p-8 m-4 rounded-lg'>
            <p className='font-bold text-2xl text-center'>Top 10 Leaderboard</p>
            <div className='p-2'>
                <p className='pt-2 text-lg text-center'>Username - Streak, Score</p>
                <ol className="list-none">
                    {
                        leaderboard.map((item: LeaderboardType, index: number) => <li key={item.key?.toString()} className='pt-2 text-lg text-center'>{(index + 1) + ". " + item.userName + " - " + item.streak + " | " + item.score}</li>)
                    }
                </ol>
            </div>
          </div>

        </div>
      </main>
      <footer className="w-full p-4
            fixed left-0 bottom-0
            flex justify-center items-center
            text-white">
      </footer>
    </div>
  )
}
