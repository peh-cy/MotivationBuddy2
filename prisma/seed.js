const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function main() {
  await prisma.message.createMany({
    data: [
      { interest_area: 'Foodie', message_text: 'When the kitchen gets messy, it’s a sign something delicious is coming — don’t fear a little chaos at work! 🍳🧑‍🍳😋' },
      // Add more messages here
    ]
  });
  console.log('Messages seeded!');
}

// existing messages
// { interest_area: 'Foodie', message_text: 'Just like the best recipes require patience and the right ingredients, your success is a blend of hard work and passion. Keep stirring the pot! 🥄🧑‍🍳💪' },
// { interest_area: 'Foodie', message_text: 'Remember, even the richest flavors take time to develop. Your hard work is the secret sauce that will make your dreams irresistible. ⏳🍲🔥' },
// { interest_area: 'Foodie', message_text: 'When work feels tough, think of it as a recipe-sometimes you need to add a little patience and a pinch of perseverance to create something truly unforgettable. 📝🧂💪' },
// { interest_area: 'Sports and Fitness', message_text: 'Champions aren’t born; they’re made through sweat, dedication, and heart. Keep training hard and play your best game! 🏆💦💪' },
// { interest_area: 'Sports and Fitness', message_text: 'Just like every rep counts in the gym, every small effort today builds the strength you need for tomorrow’s victory. Keep pushing forward! 🏋️‍♂️💪🚀' },
// { interest_area: 'Sports and Fitness', message_text: 'Just like training for a big game, success at work requires persistence, discipline, and pushing through the tough moments. Keep your eyes on the goal-you’re winning every day! 🎯💪🏅' },
// { interest_area: 'Sports and Fitness', message_text: 'When work feels like a marathon, remember that every step forward builds your strength and endurance. Keep going-you’re building a champion mindset! 🏃‍♂️💪🏅' },
// { interest_area: 'Travelling', message_text: 'Life is a journey filled with new paths and adventures. Embrace every step and discover the amazing places your dreams can take you! 🌄🚶‍♀️✨' },
// { interest_area: 'Travelling', message_text: 'Your passion for travel shows your courage to explore the unknown. Bring that same spirit to work, and you’ll discover new horizons in your career. 🌍✈️🌈' },
// { interest_area: 'Travelling', message_text: 'Work might feel like a long journey through rough terrain, but every step forward brings you closer to your next big adventure. Keep moving-you’re on the path to amazing destinations. 🥾🧭🗺️' },
// { interest_area: 'Travelling', message_text: 'Just like every trip has its bumps and detours, your career has challenges that make the journey worthwhile. Embrace the journey, and the views will be spectacular. 🚌⛰️🌅' },
// { interest_area: 'Travelling', message_text: 'Every challenge at work is like a new destination on your journey-sometimes the road is bumpy, but the view at the end is always worth it. Keep exploring and moving forward! 🗺️💪🌄' },

// { interest_area: 'Foodie', message_text: 'Just like a recipe, sometimes you need to adjust and try again at work — don’t give up! 🔄💪❤️' },
// { interest_area: 'Foodie', message_text: 'Even the best chefs have off days—take a break, then come back stronger. 👨‍🍳⏸️💪' },
// { interest_area: 'Foodie', message_text: 'Like a slow-cooked stew, some things take time—be patient with yourself. 🍲⏳🧘‍♂️' },
// { interest_area: 'Foodie', message_text: 'Don’t be afraid to ask for help—every great meal is a team effort. 🤝👥💪' },
// { interest_area: 'Foodie', message_text: 'Just as flavours balance out, so do good and tough days. 😌🌶️❤️' },
// { interest_area: 'Foodie', message_text: 'If you’re feeling stuck, take a break and come back with a new appetite. ⏸️🔄💡' },
// { interest_area: 'Sports and Fitness', message_text: 'Every workout counts, just like every effort at work — keep working at it. 🏋️‍♂️💪🔥' },
// { interest_area: 'Sports and Fitness', message_text: 'Setbacks in sports and work are just setups for comebacks. 🔄💪🆙' },
// { interest_area: 'Sports and Fitness', message_text: 'Let your love for fitness remind you: you’re stronger than you think. ❤️🏋️‍♂️💪' },
// { interest_area: 'Sports and Fitness', message_text: 'It’s not about being perfect—it’s about giving your best, every day. 💯💪✨' },
// { interest_area: 'Sports and Fitness', message_text: 'When motivation dips, remember why you started—and keep moving. 🤔🏃‍♂️🔄' },
// { interest_area: 'Sports and Fitness', message_text: 'Teamwork matters — lean on your colleagues when you need support. 🤝👥✨' },
// { interest_area: 'Sports and Fitness', message_text: 'Every step forward, no matter how small, is progress. 👣➡️🌟' },
// { interest_area: 'Sports and Fitness', message_text: 'Let your competitive spirit remind you to keep going, even when it’s hard. 🔥🏃‍♂️🏆' },
// { interest_area: 'Sports and Fitness', message_text: 'Just like a workout, work challenges make you stronger over time. 🏋️‍♂️💪🔄' },
// { interest_area: 'Sports and Fitness', message_text: 'Take a deep breath, stretch, and tackle your next task with fresh energy. 🧘‍♂️⚡🚀' },
// { interest_area: 'Sports and Fitness', message_text: 'Every effort, no matter how small, brings you closer to your goals. 👣🎯💪' },
// { interest_area: 'Sports and Fitness', message_text: 'Stay strong, stay resilient — you’ve got this! 🔥🔥🔥' },
// { interest_area: 'Travelling', message_text: 'If work feels routine, remember: every journey has its ups and downs. 🧗‍♂️🏔️' },
// { interest_area: 'Travelling', message_text: 'Let your wanderlust remind you that new opportunities are always ahead. 🔭🔮💡' },
// { interest_area: 'Travelling', message_text: 'It’s okay to take a detour — sometimes the best paths aren’t straight. 🛤️🧭' },
// { interest_area: 'Travelling', message_text: 'Every trip teaches resilience — so does every workday. 💪💪💪' },
// { interest_area: 'Travelling', message_text: 'If today was tough, tomorrow is a new destination. 🌅' },
// { interest_area: 'Travelling', message_text: 'Let your love for travel inspire you to keep exploring new ideas. 🌏💡' },
// { interest_area: 'Travelling', message_text: 'Rest when you need to — even travelers need breaks. ⏸️🧘‍♂️🛌' },
// { interest_area: 'Travelling', message_text: 'Remember, every journey starts with a single step—keep moving forward. 👣' },
// { interest_area: 'Travelling', message_text: 'When you feel lost, take a deep breath and look for new directions. 🧘‍♂️🧭' },
// { interest_area: 'Travelling', message_text: 'You’ve overcome challenges before. This challenge too shall pass! 💪' },
// { interest_area: 'Travelling', message_text: 'Don’t be afraid to ask for directions—support is always available. 🤝🫂' },
// { interest_area: 'Travelling', message_text: 'Every adventure has its bumps — so does every career. 🛣️' },
// { interest_area: 'Travelling', message_text: 'Let your travels remind you to stay curious and open-minded. 🌍💡' },
// { interest_area: 'Travelling', message_text: 'If you’re feeling stuck, take a break and come back with a fresh perspective. ⏸️🧘‍♂️💡' },
// { interest_area: 'Travelling', message_text: 'Remember, the best views come after the hardest climbs. 🧗‍♂️🌄😊' },
// { interest_area: 'Travelling', message_text: 'Let your passion for travel inspire you to keep moving forward, no matter what. ✈️👣' },
// { interest_area: 'Travelling', message_text: 'Every journey is worth it — so is every effort you make at work! 💪' },
// { interest_area: 'Mindfulness', message_text: 'Mindfulness teaches us that every moment is a chance to start fresh. 🧘‍♂️🌱🔄' },
// { interest_area: 'Mindfulness', message_text: 'Let go of yesterday’s stress — today is a new day. 🌅🔄' },
// { interest_area: 'Mindfulness', message_text: 'It’s okay to take a break and reset—your mind and body will thank you. ⏸️🧘‍♂️😌' },
// { interest_area: 'Mindfulness', message_text: 'Let mindfulness remind you to focus on what you can control. 🧘‍♂️' },
// { interest_area: 'Mindfulness', message_text: 'When motivation dips, take a moment to reflect and recharge. 🛌⚡🔋' },
// { interest_area: 'Mindfulness', message_text: 'A calm mind is a powerful mind — nurture it with rest and self-care. 🧘‍♂️🛌' },
// { interest_area: 'Mindfulness', message_text: 'Let your practice of mindfulness guide you through tough days. 🧘‍♂️' },
// { interest_area: 'Mindfulness', message_text: 'It’s okay to step back and regroup — you’ll come back stronger. ⏸️🔄💪' },
// { interest_area: 'Mindfulness', message_text: 'Every breath is a reminder that you can handle whatever comes your way. 💪' },
// { interest_area: 'Mindfulness', message_text: 'Let your mindfulness practice inspire you to stay present and resilient. 🌟💪' },
// { interest_area: 'Mindfulness', message_text: 'When you feel lost, return to your breath — it will ground you. 🧘‍♂️🔄' },
// { interest_area: 'Mindfulness', message_text: 'Stay mindful, stay strong—you’re capable of more than you think. 💪🌟✨' },

main()
  .catch(e => { throw e })
  .finally(async () => { await prisma.$disconnect() });