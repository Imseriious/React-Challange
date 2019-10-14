const initialState = {
    requests: [{
        id: 1,
        kind: "Geriatric",
        name: "Andrew Anderson",
        start: "10.10.19",
        end: "12.10.19",
        info: "Leaving town for 3 days need help for my grandpa"
    },
    {
        id: 2,
        kind: "SomethingHurts",
        name: "Jeff Bezos",
        start: "12.10.19",
        end: "13.10.19",
        info: "Some more information"
    },
    {
        id: 3,
        kind: "Medical",
        name: "Mark Musk",
        start: "14.10.19",
        end: "14.10.19",
        info: "Injecctions"
    }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_REQUEST":
            return {
                ...state,

            }
        case "COMPLETE_REQUEST":
            return {
                ...state,

            }
    }
    return state;
};

export default reducer;