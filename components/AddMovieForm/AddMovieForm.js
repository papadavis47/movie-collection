const movieCategories = [
  { id: 'dvd', title: 'DVD' },
  { id: 'blu-ray', title: 'Blu-Ray' },
  { id: 'digital', title: 'Digital' },
]

function AddMovieForm() {
  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto mb-10">
      <div className="w-full px-6 py-10 mt-4 bg-gray-100 shadow-sm shadow-gray-500 md:max-w-3xl md:px-10 md:py-12">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Film Title
            </label>
            <div className="mt-1">
              <input
                id="title"
                name="title"
                type="text"
                required
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
                className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm resize-none outline-blue-500 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                defaultValue={''}
              />
            </div>
          </div>

          <div>
            <label className="text-base font-medium text-gray-900">
              Media Type
            </label>
            <fieldset className="mt-4">
              <legend className="sr-only">Notification method</legend>
              <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                {movieCategories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <input
                      id={category.id}
                      name="category"
                      type="radio"
                      defaultChecked={category.id === 'dvd'}
                      className="w-4 h-4 text-blue-600 border-gray-300 outline-blue-500 focus:ring-blue-500"
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

          <div className=" md:mx-auto md:w-1/2 md:pt-8">
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:py-4 md:text-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddMovieForm
