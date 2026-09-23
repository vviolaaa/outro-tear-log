export const HAPPY_RESULT_QUOTES = [
  'now put your phone down and get all the fun!',
  'we are young forever, so obviously we have to be dramatic about it!',
  "you really said borahae and expected me to remain emotionally stable.",
  'you\'re so fine whenever you cry',
  'COME ON WING!!!!!',
  'life is sweet as honey, i guess',
  'something apparently got the best of you',
  'you got no jams, but you definitely got tears!',
  'you can call me artist, you can call me idol, you can call me when you’re done crying.'
];

export const SAD_RESULT_QUOTES = [
  'yeah, we call this shit normal...',
  "you worth it, you perfect. Deserve it, just work it!",
  "i say LOVE YOURSELF, you say - LOVE MYSELF",
  "everything lit is FYA",
  'fine. have your little shot glass of tears.',
  'did you see my bag? because apparently it’s full of emotional baggage.',
  'you don\'t need permission to cry. clearly.',
  'fake love, very real breakdown.',
  'don\'t you give up your liiiiife',
  'hello, hello imma give it to you girl right now!',
  'you and me baby you know, we got it'
];

export function pickRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}