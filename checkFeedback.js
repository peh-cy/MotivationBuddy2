const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function main() {
    // Get all feedback (filter for dislikes)
    const feedbacks = await prisma.feedback.findMany({    // Queries the feedback table
        where: {
        feedback: 'dislike',                              // Only show dislikes; remove this line to see all
        },
        include: {
        user: true,                                       // Query will also fetch the related user info for each feedback info
        }
    });

    console.dir(feedbacks, { depth: null });              // Prints the full details of the feedbacks (including nested user info) to the console
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());