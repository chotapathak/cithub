import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {},
    repos: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.user = action.payload
            state.login = action.payload.login
        },
        setRepos: (state, action) => {
            state.repos = action.payload
            state.stars = action.payload.map((repo) => {
                return `${repo.name} has ${repo.stargazers_count} stars`
            })
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    },
})


export const { setUsers, setRepos , setLoading, setError} = userSlice.actions;

export default userSlice.reducer;