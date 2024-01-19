export const reducer = (state, action) => {
    switch (action.type){
        case 'TOGGLE' : return {
            ...state,
            sections : state.sections.map((section) => section.id === action.payload ? {...section, isOpen : !section.isOpen} : {...section, isOpen : false})
        }
        default : return state;
    }
}

