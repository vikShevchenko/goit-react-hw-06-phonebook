import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setContacts: (state, action) => {
            state.contacts.push(action.payload)
        },

        setFilter: (state, action) => {
            state.filter = action.payload
        },

        removeItem: (state, action) => {

            state.contacts = state.contacts.filter((contact => contact.id !== action.payload))
        },
    }
})
export const { setContacts, removeItem, filteredList, setFilter } = userSlice.actions
export default userSlice.reducer