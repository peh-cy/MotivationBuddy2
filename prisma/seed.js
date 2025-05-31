const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function main() {
  await prisma.message.createMany({
    data: [
      { interest_area: 'Foodie', message_text: 'Just like the best recipes require patience and the right ingredients, your success is a blend of hard work and passion. Keep stirring the pot! 🥄🧑‍🍳💪' },
      { interest_area: 'Foodie', message_text: 'Remember, even the richest flavors take time to develop. Your hard work is the secret sauce that will make your dreams irresistible. ⏳🍲🔥' },
      { interest_area: 'Foodie', message_text: 'When work feels tough, think of it as a recipe-sometimes you need to add a little patience and a pinch of perseverance to create something truly unforgettable. 📝🧂💪' },
      { interest_area: 'Sports and Fitness', message_text: 'Champions aren’t born; they’re made through sweat, dedication, and heart. Keep training hard and play your best game! 🏆💦💪' },
      { interest_area: 'Sports and Fitness', message_text: 'Just like every rep counts in the gym, every small effort today builds the strength you need for tomorrow’s victory. Keep pushing forward! 🏋️‍♂️💪🚀' },
      { interest_area: 'Sports and Fitness', message_text: 'Just like training for a big game, success at work requires persistence, discipline, and pushing through the tough moments. Keep your eyes on the goal-you’re winning every day! 🎯💪🏅' },
      { interest_area: 'Sports and Fitness', message_text: 'When work feels like a marathon, remember that every step forward builds your strength and endurance. Keep going-you’re building a champion mindset! 🏃‍♂️💪🏅' },
      { interest_area: 'Travelling', message_text: 'Life is a journey filled with new paths and adventures. Embrace every step and discover the amazing places your dreams can take you! 🌄🚶‍♀️✨' },
      { interest_area: 'Travelling', message_text: 'Your passion for travel shows your courage to explore the unknown. Bring that same spirit to work, and you’ll discover new horizons in your career. 🌍✈️🌈' },
      { interest_area: 'Travelling', message_text: 'Work might feel like a long journey through rough terrain, but every step forward brings you closer to your next big adventure. Keep moving-you’re on the path to amazing destinations. 🥾🧭🗺️' },
      { interest_area: 'Travelling', message_text: 'Just like every trip has its bumps and detours, your career has challenges that make the journey worthwhile. Embrace the journey, and the views will be spectacular. 🚌⛰️🌅' },
      { interest_area: 'Travelling', message_text: 'Every challenge at work is like a new destination on your journey-sometimes the road is bumpy, but the view at the end is always worth it. Keep exploring and moving forward! 🗺️💪🌄' },
      // Add more messages here
    ]
  });
  console.log('Messages seeded!');
}

main()
  .catch(e => { throw e })
  .finally(async () => { await prisma.$disconnect() });