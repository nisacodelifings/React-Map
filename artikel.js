import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Artikel extends Component{
    render(){
  
        return(
            <div>
            <h1>{this.props.judul}</h1>
            <p>{this.props.paragraf}</p>
            <button>{this.props.simpan}</button>
            </div>
        )
    }
}

Artikel.defaultProps = {
    simpan : "Simpan Dan Lanjutkan"
}
export default Artikel;