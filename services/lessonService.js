const { prisma } = require('../config/prisma');
async function getAllLesson(){
    try{
        const lessons = await prisma.lesson.findMany()

        return lessons;
    }
    catch (error) {
        console.error(error);

        throw new Error()
    }
}

async function createLesson(lesson){
    try {
        const mappedLesson = {
            data: {
                image: lesson.image,
                title: lesson.title,
                creator: lesson.creator,
                desc: lesson.desc,
                level: lesson.level,
                age: lesson.age,
                tags: lesson.tags
            }
        }
        const createdLesson = await prisma.lesson.create(mappedLesson);

        return createdLesson
    }

    catch (error) {
        console.error(error);

        throw new Error()
    }
}

async function getLessonById(lesson_id){
    try {
        const getLesson = await prisma.lesson.findUnique({
            where: {
                id: lesson_id
            }
        })

        return getLesson
    }

    catch (error) {
        console.error(error);

        throw new Error()
    }
}

module.exports = {
    getAllLesson,
    createLesson,
    getLessonById
};