const {configureStore} = require("@reduxjs/toolkit");
const counterReducer = require("../features/counter/counterSlice");
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice");
const postReducer = require("../features/post/postSlice");

// Create and configure a store
const store = configureStore({
    reducer: {
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer,
        post: postReducer
    },
    middleware: (defaultMiddlewares) => defaultMiddlewares()
})

module.exports = store;