const defaultState = {
  products: [],
};
export const product = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD__PRODUCT":
      return { ...state, products: [...state.products, action.payload] };
    case "REMOVE__PRODUCT":
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

{
  /*

    import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      })
    },
    todoToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload)
      todo.completed = !todo.completed
    },
  },
})

export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer
*/
}
