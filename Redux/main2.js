function createStore(reducer){
    let state = reducer(undefined, {});
    let subscribers = []
    return{
        getState(){
            return state
        },
        disPatch(action){
            state = reducer(state, action)
            subscribers.forEach(function(subscribe){
                subscribe();
            })
        },
        subscribe(subscriber){
            subscribers.push(subscriber)
        }
    }
}

initState = 0 

function reducer(state = initState, action){
    switch(action.type){
        case 'DEPOSIT':
            return state = state + action.payload
        case 'WITHDRAW':
            return state = state - action.payload
        default:
            return state
    }
}


//tạo store
let store = createStore(reducer)


//actions
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



//events
const $ = document.querySelector.bind(document)

const depositBtn = $('#deposit')
console.log(depositBtn);
const withdrawBtn = $('#withdraw')


depositBtn.onclick = function(){
    store.disPatch(actionDeposit(10))
}

store.subscribe(render)

//render
function render(){
    const output = $('#output')
    output.innerText = store.getState()
}
render()