import React from 'react';
import Card from './Card'
import './List.css';

// function List(props) {
//   return (
//     <section className="List">
//       <header>{props.header}</header>
//       <div>{props.content}</div>
//     </section>
//   );
// }



function List(props) {
    const array =

    return (
        <section className="List">
            <header className="List-header">
                <h2>First list</h2>
            </header>
            <div className="List-cards">
                <Card title="First card" content="lorem impsum" />
                <Card title="Second card" content="lorem impsum" />
                <Card title="Fifth card" content="lorem impsum" />
                <Card title="Sixth card" content="lorem impsum" />
                <Card title="Seventh card" content="lorem impsum" />
                <Card title="Tenth card" content="lorem impsum" />
                <Card title="Twelth card" content="lorem impsum" />
                <Card title="Thirteenth card" content="lorem impsum" />
            </div>
        </section>
    );
}

export default List;