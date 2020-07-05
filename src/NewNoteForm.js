import React, { useState, useRef } from "react";
import { useNotesStore } from "./notesContext";

export default function NewNoteForm() {
  const [noteText, setNoteText] = useState("");
  const noteStore = useNotesStore();
  const addBtn = useRef();
  return (
    <div>
      <input
        type="text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? addBtn.current.click() : null)}
      />
      <button
        ref={addBtn}
        onClick={() => {
          noteStore.createNote(noteText);
          setNoteText("");
        }}
      >
        Save
      </button>
    </div>
  );
}
