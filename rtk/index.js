const store = require("./app/store");
const {counterActions} = require("./features/counter/counterSlice");
const {dynamicCounterActions} = require("./features/dynamicCounter/dynamicCounterSlice");
const {postActions} = require("./features/post/postSlice");

const {increment, decrement} = counterActions;
const {increment:dynamicIncrement, decrement:dynamicDecrement} = dynamicCounterActions;

store.subscribe(()=>{
    console.log(store.getState());
})

// console.log("state is: ", store.getState())
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(dynamicIncrement());
// store.dispatch(dynamicIncrement());
// store.dispatch(dynamicIncrement());

// store.dispatch(postActions());