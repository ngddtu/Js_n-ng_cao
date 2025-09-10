function createStore(reducer){
    let state = reducer(undefined, {}); //init state
    console.log(state);
    
    const subscribers = [];
    return{
        getState(){
            return state;
        },
        dispatch(action){
            state = reducer(state, action);
            subscribers.forEach(function(subscriber){
                subscriber();
            })
        },
        subscribe(subscriber){
            subscribers.push(subscriber)
        }
    }
}


let initState = 0;

function reducer(state = initState, action){
    switch(action.type){
        case 'DEPOSIT':
            return state = state + action.payload
        case 'WITHDRAW':
            return state = state - action.payload
        default:
            return state;
    }
}
const store= window.store = createStore(reducer)
console.log(store);


function actionDeposit(payload){
    return{
        type: 'DEPOSIT',
        payload
    }
}
function actionWithdraw(payload){
    return{
        type: 'WITHDRAW',
        payload
    }
}


const depositBtn = document.querySelector('#deposit')
const withdrawBtn = document.querySelector('#withdraw')


depositBtn.onclick = function(){
    store.dispatch(actionDeposit(10))
}
withdrawBtn.onclick = function(){
    store.dispatch(actionWithdraw(10))
}


store.subscribe(function(){
    render();
})
function render(){
    const ouput = document.querySelector('#output')
    ouput.innerText = store.getState()
}


