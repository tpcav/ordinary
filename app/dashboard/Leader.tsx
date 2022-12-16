import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from "react";

const people = [
  { rank: '1', name: 'tcav', title: '8', email: '10'},
  { rank: '2', name: 'sissy', title: '8', email: '10'},
  { rank: '3', name: 'Andrew', title: '8', email: '10'},
  { rank: '4', name: 'magikTrickz', title: '8', email: '10'},
  { rank: '5', name: 'tcav', title: '8', email: '10'},
  { rank: '6', name: 'tcav', title: '8', email: '10'},
  { rank: '7', name: 'tcav', title: '8', email: '10'},
  { rank: '8', name: 'tcav', title: '8', email: '10'},
  { rank: '9', name: 'tcav', title: '8', email: '10'},
  { rank: '10', name: 'tcav', title: '8', email: '10'},
  // More people...
]

export default function Leaderboard() {

  return (
    <div className="p-10 m-4 sm:px-6 lg:px-8 bg-white rounded-lg mb-10">

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
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.rank}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
