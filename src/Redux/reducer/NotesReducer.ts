import { createSlice,PayloadAction} from "@reduxjs/toolkit"


export interface Prop {
    id:number,
    content:string,
    date:string
}

export interface AppState {
    notes: Prop[];
  }
  const initialState: AppState = {
    notes: [],
  };

  interface list {
    data:object[]
  }
const NoteReducer =  createSlice ({
    name:"notesList",
    initialState,
    reducers:{
        addNote: (state, action: PayloadAction<Prop>) => {
            state.notes.push(action.payload);
          },
         addAllNote: (state, action: PayloadAction<any>) => {
          //console.log("hello it woriking1",action.payload);
          state.notes=[]
          state.notes.push(...action.payload);
            
          },
          updateNote: (state, action: PayloadAction<Prop>) => {
            const index = state.notes.findIndex(note => note.id === action.payload.id);
            if (index !== -1) {
              state.notes[index] = action.payload;
            }
          },
          deleteNote: (state, action: PayloadAction<number>) => {
            let value =[]
            value.push(action.payload)
            state.notes = state.notes.filter(note => note.id !== action.payload);
          },

        },
    
})



export const { addNote,updateNote,deleteNote,addAllNote} = NoteReducer.actions;

export default NoteReducer.reducer;