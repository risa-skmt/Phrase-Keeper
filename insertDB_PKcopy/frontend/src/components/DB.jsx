import React, { useEffect }  from 'react';



const DB = ({data, setData})  => {

    useEffect(() => {
        //fetchでバックエンドExpressのサーバーを指定
        fetch('/api')
          //レスポンスをjsonとして受け取りjsオブジェクトを生成
          .then((res) => res.json())
          //生成したjsオブジェクトをdataに代入
          //data.messageで取り出したデータをuseStateに保存
          .then((data) => setData(data.data))
          //追加
          .catch((error) => console.log(error));
      },[]);


  return (
   
       
    //   useStateに保存した値を表示
    //   <p>{ message }</p> 
    //  バックエンドから取得した全てのデータをdataステートに保存し、map関数で表示 
     data.map((item) => (
        <p key={item.id} className="phrase-container">{item.phrase}</p>
      ))
  );
}

export default DB
