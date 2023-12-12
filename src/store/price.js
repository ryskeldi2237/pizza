const defaultPrice = {
    price: 0
}
export const price = (state = defaultPrice, {type, payload}) => {
    switch (type) {
        case 'ADD__PRICE':
            return {...state, price: state.price + payload.price}
        case 'REMOVE__PRICE':
            return {...state, price: state.price - payload}
        default:
          return state
      }
}