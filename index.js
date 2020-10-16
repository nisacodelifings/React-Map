import React from 'react';
import ReactDOM from 'react-dom';
import List from "./list";
import Artikel from "./artikel";

class Main extends React.Component {
  render() {
  const myLists = ['A', 'B', 'C', 'D', 'D'];  
  const artikel =[
    "apakah itu js?",
    "apakah itu js?",
    "apakah itu js?",
    "apakah itu js?"    
  ]
  const listArtikel = artikel.map((tikel)=>{
    return (<p>{tikel}</p>)
  })
      
    return (
      <div>
      <Artikel judul="Ini Artikel" paragraf={listArtikel} />
      <List myLists={myLists} />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));