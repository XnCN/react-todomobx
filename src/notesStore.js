import { nanoid } from "nanoid";
export function createNotesStore() {
  return {
    notes: [],
    createNote(text) {
      this.notes.push({ text, id: nanoid() });
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id != id);
    },
  };
}
