import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { createNotEmittedStatement, idText } from "typescript";

function App() {

    const [items, setItems] = useState([]);

    function addItem(addNewNote) {
        setItems(prevItems => {
            return [...prevItems, addNewNote];
        });
    }

    function deleteNote(id) {
        setItems(prevItems => {
            return prevItems.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }


    return (
        <div>
            <Header />
            <CreateArea onAdd={addItem} />
            {items.map((noteItem, index) => {
                return <Note 
                title={noteItem.title} 
                content={noteItem.content} 
                onDelete={deleteNote} 
                key={index}
                id={index} />;
            })}

            <Footer />
        </div>
    );
}

export default App;
