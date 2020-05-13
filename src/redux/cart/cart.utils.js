export const addItem = (items, itemToAdd) => {
    const existingCartItem = items.find(
        cartItem => cartItem.id === itemToAdd.id
    );

    if (existingCartItem) {
        return items.map(
            cartItem => cartItem.id === itemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }

    return [{...itemToAdd, quantity: 1}, ...items];
};

export const incrementItemQuantity = (items, item) => {
    return items.map(
        cartItem => cartItem.id === item.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
    );
};

export const decrementItemQuantity = (items, item) => {
    return items.map(
        cartItem => cartItem.id === item.id && cartItem.quantity > 1
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    );
};

export const removeItem = (items, itemToRemove) => {
    return items.filter(cartItem => cartItem.id !== itemToRemove.id);
};
