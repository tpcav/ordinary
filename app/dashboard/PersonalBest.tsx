import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from "react";

export default function PersonalBest() {

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

  const people = [
    { title: highStreak, email: highScore},
    // More people...
  ]


  return (
    <div className="p-10 m-4 sm:px-6 lg:px-8 bg-white rounded-3xl mb-10">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Personal Best</h1>
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
                      Streak
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email}>
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