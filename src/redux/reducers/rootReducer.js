const initialState = {
    items: [
        {
            id: 3,
            name: "Translucent Loose Setting Powder",
            price: 3900,
            quantity: 1,
        },
        {
            id: 4,
            name: "Mini Summer Makeup Essentials Set",
            price: 8800,
            quantity: 2,
        }
    ],
    note: '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_NOTE':
            return {
                ...state,
                note: action.payload,
            }
        case 'INCREMENT_ITEM_QUANTITY':
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload) {
                        item.quantity += 1;
                    }

                    return item;
                }),
            }
        case 'DECREMENT_ITEM_QUANTITY':
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload && item.quantity > 1) {
                        item.quantity -= 1;
                    }

                    return item;
                }),
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            }
        default:
            return state;
    }
}

export default rootReducer;
