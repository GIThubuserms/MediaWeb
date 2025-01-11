import React from 'react'

function Upload() {
  return (
    <div className='w-full h-screen flex  items-center'>
      <form className='flex flex-col justify-start items-center mx-auto w-[50%] space-y-7'>
       
        <div className='text-start flex space-x-3 justify-between items-center'>
          <p className="font-semibold font-sans">Discription</p>
          <textarea className="textarea textarea-bordered  w-[200px]  md:w-[300px] outline-none resize-none" placeholder=""></textarea>
        </div>

        <div className='text-start flex space-x-3 justify-between items-center'>
          <p className=" font-semibold font-sans">Upload Post</p>
          <div class="flex items-center justify-center ">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-[200px] md:w-[300px] h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 d dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>

        </div>

        <div className='ml-14 '>
          <button type="button" class="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
            Post
          </button>
        </div>

      </form>
    </div>
  )
}

export default Upload
