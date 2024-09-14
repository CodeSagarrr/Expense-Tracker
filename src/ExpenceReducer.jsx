export const initialState = {
    expenses: [],
} // initial state empty array

export const expensesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': // action type
            return {
                ...state,
                expenses: [...state.expenses, action.payload] 
            };

        case 'EDIT_EXPENSE': // action type
            return {
                ...state,
                expenses: state.expenses.map(expenses => {
                    expenses.id === action.payload.id ? action.payload : expenses;
                })
            }
        
        case 'DELETE_EXPENSE': // action type
            return {
                ...state,
                expenses: state.expenses.filter(expenses => expenses.id !== action.payload),
            }
        default :
            return state;
    }
}
