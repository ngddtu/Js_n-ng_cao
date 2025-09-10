// import { createStore } from 'https://cdn.skypack.dev/redux';
////////////////// MY REDUX //////////////////////
function createStore(reducer){
    let state = reducer(undefined, {}); //init state
    const subscribers = [];
    console.log(state);
    return{
        getState(){
            return state;
        },
        dispatch(action){
            state = reducer(state, action);
            subscribers.forEach(a => a());
        },
        subscribe(subscriber){
            subscribers.push(subscriber);
        }
    }
}







////////////////// MY APP //////////////////////
const initState = 0
//reducer
function reducer(state = initState, action){
    switch(action.type){
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;
        default:
            return state    
    }
}

//store
const store = window.store = createStore(reducer);
console.log(store);

//Actions 
function actionDeposit(payload){
    return {
        type: 'DEPOSIT',
        payload
    }
}
function actionWithdraw(payload){
    return {
        type: 'WITHDRAW',
        payload
    }
}

//Dom events
const depositBtn = document.querySelector('#deposit');
const withdrawBtn = document.querySelector('#withdraw');
console.log(depositBtn);


//Event handler
depositBtn.onclick = function(){
    store.dispatch(actionDeposit(10));
    // render();    
}
withdrawBtn.onclick = function(){
    store.dispatch(actionWithdraw(10));
    // render(); 
}


//Listener
store.subscribe(function(){
    console.log('State updated: ', store.getState());
    render();
});


//render
function render (){
    const output = document.querySelector('#output');
    output.innerText = store.getState();
}

render();