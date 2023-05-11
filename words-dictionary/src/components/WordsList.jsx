import React from 'react'

const WordsList = () => {
  return (
    <div className='wordsList'>
      <div className='words'>
        <div className='word'>
            <div className='wordsText'>
                <span>done is better than perfect</span>
            </div>

            <div className='icons'>
                 <button><i className="fa-regular fa-pen-to-square"></i></button>
                 <button><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>

        
      </div>
    </div>
  )
}

export default WordsList
