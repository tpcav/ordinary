const faqs = [
  {
    question: '📝 List of 4-letter nouns.',
    answer:
      'There is a list of 4-letter nouns sorted in alphabetical order.',
  },
  {
    question: '⏳ Once the game starts...',
    answer:
      'A 60 second timer will begin to count down and a random word will be displayed from the list.',
  },
  {
    question: '🎲 Guess the next word.',
    answer:
      'Guess the next word after the random word shown. Think in alphabetial order. One letter after another.',
  },
  {
    question: '🔥 Keep going on a streak.',
    answer:
      'If your guess is correct, the 60 second timer will reset. Keep going. If you are wrong, the game will end. Try again.',
  },
  // More questions...
]

export default function Hero() {
  return (
    <div className="bg-gray-100 px-5 mx-4">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Ordinary Word Game</h2>
            <p className="mt-4 text-lg text-gray-500">
              Guessing game that test your test your knowledge of the alphabet and vocabulary. Guess the words by thinking in alphabetical order.
            </p>
          </div>
          <div className="mt-12 lg:col-span-2 lg:mt-0">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg font-bold leading-6 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
