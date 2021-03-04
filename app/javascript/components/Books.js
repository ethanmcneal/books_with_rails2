import React from 'react';

const Books = (props) => {
    const {books} = props
    return (
      <div>
        <h1>Books Component {books.length} items</h1>
      </div>
    );

}

export default Books;