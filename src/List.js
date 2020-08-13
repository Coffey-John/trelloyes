import React from 'react';
import Card from './Card'
import './List.css';
import listData from './store'

function List (props) {
// list needs to call card 8 times in the first list
console.log(props)
const cardComponents = props.cards.map(card => <Card
  key={card.id}
  title={card.title}
  content={card.content}
/>)

  console.log(props)
  return (
    <section className='List'>
     <header className="List-header">
          <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cardComponents}
      </div>
    </section>
  )
}



      export default List;