const matchesElement = document.getElementById('matches');
const totalDiv = document.getElementById('total');
const addNewMatch = document.getElementById('add_new_match');
const resetTrigger = document.getElementById('reset');

// create action type
const INCREMENT_SCORE = 'INCREMENT_SCORE';
const DECREMENT_SCORE = 'DECREMENT_SCORE';
const CREATE_MATCH = 'CREATE_MATCH';
const RESET_SCORES = 'RESET_SCORES';


const initialState = {
    matches: [
        {
            id: 1,
            score: 120,
        }
    ]
}


const matchReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MATCH: {
            const id = state.matches.length + 1;
            const score = 0;
            const newMatch = {
                id,
                score,
            };
            const matches = [...state.matches, newMatch];
            return { ...state, matches };
        }
        case INCREMENT_SCORE: {
            const { id, value } = action.payload;
            const matches = state.matches.map((match) => {
                if (match.id === parseInt(id)) {
                    return {
                        ...match,
                        score: match.score + value
                    }
                } else {
                    return match;
                }
            });
            return { ...state, matches };
        }
        case DECREMENT_SCORE: {
            const { id, value } = action.payload;
            const matches = state.matches.map((match) => {
                if (match.id === id) {
                    const newScore = match.score - value;
                    return {
                        ...match,
                        score: newScore < 0 ? 0 : newScore
                    }
                } else {
                    return match;
                }
            });
            return { ...state, matches };
        }
        case RESET_SCORES: {
            const matches = state.matches.map((match) => {
                return {
                    ...match,
                    score: 0
                }
            });
            return { ...state, matches };
        }
        // Existing cases
        default:
            return state;
    }
};

const store = Redux.createStore(matchReducer);

const renderMatch = (match) => {

};

const renderMatches = () => {
    const matches = store.getState().matches;
    matchesElement.innerHTML = "";
    matches.forEach((match) => {
        const matchDiv = document.createElement('div');
        matchDiv.classList.add("match");
        matchDiv.dataset.id = match.id;
        matchInnerHtml = `
            <div class="wrapper">
                <button class="lws-delete">
                    <img src="./image/delete.svg" alt="" />
                </button>
                <h3 class="lws-matchName">Match ${match.id}</h3>
            </div>
            <div class="inc-dec">
                <form class="incrementForm" onsubmit="handleIncrementValue(event)">
                    <h4>Increment</h4>
                    <input
                        type="number"
                        name="increment"
                        class="lws-increment"
                    />
                </form>
                <form class="decrementForm" onsubmit="handleDecrementValue(event)">
                    <h4>Decrement</h4>
                    <input
                        type="number"
                        name="decrement"
                        class="lws-decrement"
                    />
                </form>
            </div>
            <div class="numbers">
                <h2 class="lws-singleResult" id="total">${match.score}</h2>
            </div>`
        matchDiv.innerHTML = matchInnerHtml;
        matchesElement.append(matchDiv);
    });
};

// default render for matches
renderMatches();

// Rerender after state update
store.subscribe(renderMatches);

// Add new match dispatch
addNewMatch.addEventListener("click", () => {
    store.dispatch(createMatch());
});

// handle increment function
function handleIncrementValue(e) {
    e.preventDefault();
    const parent = e.target.closest('[data-id]');
    const id = parseInt(parent.dataset.id);
    const inputName = "increment";
    const value = parseInt(getInputData(e, inputName));
    store.dispatch(incrementScore(id, value))
}

// handle decrement function
function handleDecrementValue(e) {
    e.preventDefault();
    const parent = e.target.closest('[data-id]');
    const id = parseInt(parent.dataset.id);
    const inputName = "decrement";
    const value = parseInt(getInputData(e, inputName));
    store.dispatch(decrementScore(id, value))
}

// handle reset scores
resetTrigger.addEventListener('click', () => {
    store.dispatch(resetScores())
});


const createMatch = () => {
    return ({
        type: CREATE_MATCH,
    });
};

const incrementScore = (id, value) => ({
    type: INCREMENT_SCORE,
    payload: { id, value }
})

const decrementScore = (id, value) => ({
    type: DECREMENT_SCORE,
    payload: { id, value }
})

const resetScores = () => ({
    type: RESET_SCORES
})

// handle the get input the from the input field from both increment and decrement
function getInputData(e, inputName) {
    const formData = new FormData(e.target);
    const submittedValue = formData.get(inputName);
    return submittedValue;
}
