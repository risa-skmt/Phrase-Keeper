import React from 'react'



const List = ({phraseList, setPhraseList}) => {


  return (
    <div className='wordsList'>
      <div className='words'>
        {/* phraseListの中身一つずつをphraseとする */}
        {phraseList.map((phrase, index) =>(
          // wordを識別するためにkeyをindexという名前で識別
                <div className='word' key={index}>
                <div className='wordText'>
                  {/* InputFormのsetPhraseListでtextに定義したinputTextを表示させる */}
                    <p className="phrase-container">{phrase.text}</p>
                </div>

                
        
              </div>
        ))}
      

      </div>
    </div>
  )




}

export default List
