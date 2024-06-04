import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addToReviews: (state: any, action) => {
      state.items = [...state.items, action.payload];
     
      
     
    },
    removeFromReviews: (state, action) => {
  
      const index = state.items.findIndex(
        (reviewItem: any) => reviewItem.id === action.payload.id
      );
      let newReviews = [...state.items];
      if (index >= 0) {
        newReviews.splice(index, 1);
      } else {
        console.warn(
          `Can't Remove Review (id: ${action.payload.id}) as it's not in the state`
        );
      }
      state.items = newReviews;
  
    },
  },
});

export const { addToReviews, removeFromReviews } = reviewsSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state: any) => state.reviews.items;
// console.log(selectItems);


export const selectTotal = (state: any) =>
  state.reviews.items.reduce((total: any, item: any) => total + item.price, 0);

export default reviewsSlice.reducer;


