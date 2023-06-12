

function DB({ data }) {      //App.jsのsetDataとdataを受け取っている
  return (
    <div className="phrase-container">
      {data.map(item => (
        <p key={item.id}>{item.phrase}</p>
      ))}
    </div>
  );
}



export default DB
