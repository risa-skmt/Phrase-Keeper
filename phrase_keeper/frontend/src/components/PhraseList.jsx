import React from 'react'

const WordsList = ({phraseList, setPhraseList}) => {

   const handleDelete = (id) => {
    // タスクの削除
    // phraseList  phrase.idで一つずつ見ていき、idと同じならばそのphraseを削除する。それ以外なら残す
    setPhraseList(phraseList.filter((phrase) => phrase.id !== id));
   }




  return (
    <div className='wordsList'>
      <div className='words'>
        {/* phraseListの中身一つずつをphraseとする */}
        {phraseList.map((phrase, index) =>(
          // wordを識別するためにkeyをindexという名前で識別
                <div className='word' key={index}>
                <div className='wordText'>
                  {/* InputFormのsetPhraseListでtextに定義したinputTextを表示させる */}
                    <span>{phrase.text}</span>
          
                </div>

                <div className='icons'>
                    <button><i className="fa-regular fa-pen-to-square"></i></button>
                    <button onClick={() => handleDelete(phrase.id)}><i className="fa-solid fa-trash"></i></button>
                </div>
              </div>
        ))}
      

      </div>
    </div>
  )
}

export default WordsList
