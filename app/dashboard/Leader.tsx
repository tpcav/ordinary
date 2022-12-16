import Head from 'next/head'
import Link from 'next/link'
import LeaderboardDataService from "../../services/leaderboard.service";
import LeaderboardType from "../../types/leaderboard.type";
import { useState, useEffect } from "react";

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

            tmpTopTenStreaks.reverse();

            setLeaderboard(tmpTopTenStreaks);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

  return (
    <div className="p-10 m-4 sm:px-6 lg:px-8 bg-white rounded-3xl mb-10" id="leaderboard">

      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Global Leaderboard</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of the top players by streak and score. Try to beat the top players on the leaderboard. Reach your way to the top.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                   <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Rank
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Username
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Streak
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {
                      leaderboard.map((item: LeaderboardType, index: number) => (
                        <tr key={item.key?.toString()}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {item.userName}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.streak.toString()}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.score.toString()}</td>

                        </tr>
                      ))
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
