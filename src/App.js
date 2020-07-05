import React from "react";
import { useNotesStore } from "./notesContext";
import NewNoteForm from "./NewNoteForm";
import { useObserver } from "mobx-react";

function App() {
  const notesStore = useNotesStore();
  return useObserver(() => (
    <div className="App">
      <ul>
        {notesStore.notes.map((note) => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
      <NewNoteForm />
    </div>
  ));
}

export default App;
