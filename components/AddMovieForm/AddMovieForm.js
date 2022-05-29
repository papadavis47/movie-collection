import { movieCategories } from '../../globals/data.js'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

function AddMovieForm() {
  const [filmTitle, setFilmTitle] = useState('')
  const [filmDirector, setFilmDirector] = useState('')
  const [filmNote, setFilmNote] = useState('')
  const [filmCategory, setFilmCategory] = useState('DVD')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = { filmTitle, filmDirector, filmNote, filmCategory }
    try {
      const response = await fetch('/api/movie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (response.status !== 200) {
        console.log('something went wrong')
      } else {
        resetForm()
        toast.success('Added film to collection!')
        console.log('Form submitted well')
      }
    } catch (error) {
      console.log('There was an error submitting', error)
    }
  }

  const resetForm = () => {
    setFilmDirector('')
    setFilmTitle('')
    setFilmNote('')
    setFilmCategory('DVD')
  }

  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto mb-10">
      <div className="w-full px-6 py-10 mt-4 bg-gray-200 shadow-md shadow-gray-500 md:max-w-3xl md:px-10 md:py-8">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Film Title
            </label>
            <div className="mt-1">
              <input
                onChange={(e) => setFilmTitle(e.target.value)}
                value={filmTitle}
                id="title"
                name="title"
                type="text"
                required
                autoFocus
                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="director"
              className="block text-sm font-medium text-gray-700"
            >
              Director
            </label>
            <div className="mt-1">
              <input
                onChange={(e) => setFilmDirector(e.target.value)}
                value={filmDirector}
                id="director"
                name="director"
                type="text"
                required
                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="note"
              className="block text-sm font-medium text-gray-700"
            >
              Add Notes
            </label>
            <div className="mt-1">
              <textarea
                rows={4}
                name="note"
                id="note"
                onChange={(e) => setFilmNote(e.target.value)}
                value={filmNote}
                className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm resize-none outline-blue-600 focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="text-base font-medium text-gray-900">
              Media Type
            </label>
            <fieldset className="mt-4">
              <legend className="sr-only">Media Type</legend>
              <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                {movieCategories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <input
                      onChange={(e) => setFilmCategory(category.title)}
                      id={category.id}
                      value={filmCategory}
                      name="category"
                      type="radio"
                      defaultChecked={category.title === 'DVD'}
                      className="w-4 h-4 text-blue-600 border-gray-300 outline-blue-600 focus:ring-blue-600"
                    />
                    <label
                      htmlFor={category.id}
                      className="block ml-3 text-sm font-medium text-gray-700"
                    >
                      {category.title}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
          <Toaster />
        </form>
      </div>
    </div>
  )
}

export default AddMovieForm
