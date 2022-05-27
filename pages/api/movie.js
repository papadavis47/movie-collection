import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await addMovie(req, res)
  } else if (req.method === 'GET') {
    return await readMovies(req, res)
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false })
  }
}

async function readMovies(req, res) {
  try {
    const allMovies = await prisma.movie.findMany()
    return res.status(200).json(allMovies, { success: true })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: 'Problem reading from database. Try again!',
      success: false,
    })
  }
}

async function addMovie(req, res) {
  const body = req.body
  try {
    const newEntry = await prisma.movie.create({
      data: {
        title: body.filmTitle,
        director: body.filmDirector,
        note: body.filmNote,
        category: body.filmCategory,
      },
    })
    return res.status(200).json(newEntry, { success: true })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error creating question', success: false })
  }
}
