import React from 'react';
import Card from './Card'
import './index.css';
import './Card.css';
import './List.css';
import './App.css';



export default App;




function App() {
    return (
        <main className="App">
            <header className="App-header">
                <h1>Trelloyes!</h1>
            </header>
            <div className="App-list">
                <section className="List">
                    <header className="List-header">
                        <h2>First list</h2>
                    </header>
                    <div className="List-cards">
                        <Card title='First card' content='lorem impsum' />
                        <Card title='Second card' content='lorem impsum'/>
                        <Card title='Fifth card' content='lorem impsum'/>
                        <Card title='Sixth card' content='lorem impsum'/>
                        <Card title='Seventh card' content='lorem impsum'/>
                        <Card title='Tenth card' content='lorem impsum'/>
                        <Card title='Twelth card' content='lorem impsum'/>
                        <Card title='Thirteenth card' content='lorem impsum'/>
                        <button type="button" className="List-add-button">
                            + Add Random Card
                        </button>
                    </div>
                </section>
                <section className="List">
                    <header className="List-header">
                        <h2>Second list</h2>
                    </header>
                    <div className="List-cards">
                        <Card title='Second card' content='lorem impsum' />
                        <Card title='Third card' content='lorem impsum'/>
                        <Card title='Fourth card' content='lorem impsum'/>
                        <Card title='Sixth card' content='lorem impsum'/>
                        <Card title='Eighth card' content='lorem impsum'/>
                        <Card title='Ninth card' content='lorem impsum'/>
                        <Card title='Eleventh card' content='lorem impsum'/>
                        <button type="button" className="List-add-button">
                            + Add Random Card
                        </button>
                    </div>
                </section>
                <section className="List">
                    <header className="List-header">
                        <h2>Third list</h2>
                    </header>
                    <div className="List-cards">
                        <Card title='First card' content='lorem impsum' />
                        <Card title='Second card' content='lorem impsum'/>
                        <Card title='Third card' content='lorem impsum'/>
                        <Card title='Fourth card' content='lorem impsum'/>
                        <Card title='Fifth card' content='lorem impsum'/>
                        <Card title='Sixth card' content='lorem impsum'/>
                        <Card title='Seventh card' content='lorem impsum'/>
                        <Card title='Eighth card' content='lorem impsum'/>
                        <Card title='Ninth card' content='lorem impsum'/>
                        <Card title='Tenth card' content='lorem impsum'/>
                        <Card title='Eleventh card' content='lorem impsum'/>
                        <Card title='Twelfth card' content='lorem impsum'/>
                        <Card title='Thirteenth card' content='lorem impsum'/>
                        <button type="button" className="List-add-button">
                            + Add Random Card
                        </button>
                    </div>
                </section>
                <section className="List">
                    <header className="List-header">
                        <h2>Fourth list</h2>
                    </header>
                    <div className="List-cards">
                    <Card title='Second card' content='lorem impsum' />
                        <Card title='Third card' content='lorem impsum'/>
                        <Card title='Fourth card' content='lorem impsum'/>
                        <Card title='Sixth card' content='lorem impsum'/>
                        <Card title='Eighth card' content='lorem impsum'/>
                        <Card title='Ninth card' content='lorem impsum'/>
                        <Card title='Eleventh card' content='lorem impsum'/>
                        <button type="button" className="List-add-button">
                            + Add Random Card
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
}