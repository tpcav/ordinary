import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Test</title>
      </Head>

      <div className="">

        <div className="flex items-center justify-center h-screen">


          <div className="block text-lg font-semibold mt-72"> 
            <div><button className="text-2xl bg-green-500 w-72 mb-16 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-lg">Play</button></div>
            <div><button className="text-2xl bg-sky-500 w-72 mb-4 hover:bg-sky-400 text-white font-bold py-2 px-4 border-b-4 border-sky-700 hover:border-sky-500 rounded-lg">How to play?</button></div>
            <div><button className="text-2xl bg-sky-500 w-72 hover:bg-sky-400 text-white font-bold py-2 px-4 border-b-4 border-sky-700 hover:border-sky-500 rounded-lg">Leaderboard</button></div>
          </div>
        </div>



      </div>


    </div>
  )
}