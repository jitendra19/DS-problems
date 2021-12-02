const summary = [
  {
    id: 0,
    summary:
      "The Book in Three Sentences: Practicing meditation and mindfulness will make you at least 10 percent happier. Being mindful doesn\u2019t change the problems in your life, but mindfulness does help you respond to your problems rather than react to them. Mindfulness helps you realize that striving for success is fine as long as you accept that the outcome is outside your control."
  },
  {
    id: 1,
    summary:
      "The Book in Three Sentences: The 10X Rule says that 1) you should set targets for yourself that are 10X greater than what you believe you can achieve and 2) you should take actions that are 10X greater than what you believe are necessary to achieve your goals. The biggest mistake most people make in life is not setting goals high enough. Taking massive action is the only way to fulfill your true potential."
  },
  {
    id: 2,
    summary:
      "The Book in Three Sentences: The only thing you have that nobody else has is control of your life. The hardest thing of all is to learn to love the journey, not the destination. Get a real life rather than frantically chasing the next level of success."
  },
  {
    id: 3,
    summary:
      "The Book in Three Sentences:\u00a0An idea occurs when you develop a new combination of old elements.\u00a0The capacity to bring old elements into new combinations depends largely on your ability to see relationships. All ideas follow a five-step process of 1) gathering material, 2) intensely working over the material in your mind, 3) stepping away from the problem, 4) allowing the idea to come back to you naturally, and 5) testing your idea in the real world and adjusting it based on feedback."
  },
  {
    id: 4,
    summary:
      "The Book in Three Sentences:\u00a0Seek out new ideas and try new things.\u00a0When trying something new, do it on a scale where failure is survivable.\u00a0Seek out feedback and learn from your mistakes as you go along."
  },
  {
    id: 5,
    summary:
      "The Book in Three Sentences:\u00a0Too many people spend their life pursuing things that don\u2019t actually make them happy. When you make a business, you get to make a little universe where you create all the laws. Never forget that absolutely everything you do is for your customers."
  },
  {
    id: 6,
    summary:
      "The Book in Three Sentences: There are three keys to being fully charged each day: doing work that provides meaning to your life, having positive social interactions with others, and taking care of yourself so you have the energy you need to do the first two things. Trying to maximize your own happiness can actually make you feel self-absorbed and lonely, but giving more can drive meaning and happiness in your life. People who spend money on experiences are happier than those who spend on material things."
  },
  {
    id: 7,
    summary:
      "The Book in Three Sentences: Everything in life is an invention. If you choose to look at your life in a new way, then suddenly your problems fade away. One of the best ways to do this is to focus on the possibilities surrounding you in any situation rather than slipping into the default mode of measuring and comparing your life to others."
  },
  {
    id: 8,
    summary:
      "The Book in Three Sentences: There are many ways to make profit and it is unlikely that your business does all of them. People will pay different prices for the same thing in different situations (think: Coke in the grocery store vs. Coke in a nice restaurant). Good profit models are easy to brainstorm and hard to execute."
  },
  {
    id: 9,
    summary:
      "The Book in Three Sentences: Know when to fight and when not to fight: avoid what is strong and strike at what is weak. Know how to deceive the enemy: appear weak when you are strong, and strong when you are weak. Know your strengths and weaknesses: if you know the enemy and know yourself, you need not fear the result of a hundred battles."
  },
  {
    id: 10,
    summary:
      "The Book Book in Three Sentences: To become a better writer, you have to write more. Writing reveals the story because you have to write to figure out what you\u2019re writing about. Don\u2019t judge your initial work too harshly because every writer has terrible first drafts."
  }
];
const ingoreWords = ["The", "the", "in", "In"];
const temp = {};
summary.forEach((a) => {
  const texts = a.summary.split(" ");
  const frequentKeywords = texts.filter(
    (text) => ingoreWords.indexOf(text) < 0
  );
  frequentKeywords.forEach((word) => {
    if (temp[word]) {
      const objs = temp[word].filter((obj) => obj.id === a.id);
      if (objs && objs.length) {
        objs[0].count++;
      } else {
        temp[word].push({ id: a.id, count: 1 });
      }
    } else {
      temp[word] = [{ id: a.id, count: 1 }];
    }
  });
});
for (let i in temp) {
  temp[i].sort((a, b) => b.count - a.count);
}

function search(query, k = 3) {
  const searchableTexts = query
    .split(" ")
    .filter((text) => ingoreWords.indexOf(text) < 0);
  const interOutput = {};
  const output = {};
  for (let i in searchableTexts) {
    if (temp[searchableTexts[i]]) {
      interOutput[searchableTexts[i]] = temp[searchableTexts[i]];
    }
  }
  console.log(interOutput);
  for (let i in interOutput) {
  }
}
export default function testSearch() {
  search("The Book in Three Sentences");
}
