const {createSlice, createAsyncThunk} = require("@reduxjs/toolkit");

const fetchPost = createAsyncThunk("post/fetchPost", async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return data;
})

const initialState = {
    error: "",
    posts: [],
    loading: false
}

const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.posts = action.payload;
        })

        builder.addCase(fetchPost.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

module.exports = postSlice.reducer;
module.exports.postActions = fetchPost;