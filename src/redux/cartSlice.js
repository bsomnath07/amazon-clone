import { createSlice } from '@reduxjs/toolkit'

const initialState={
    products: [],
    productsNumber:0
};
export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers : {
        addToCart:(state,action)=>{    
      
        const addProductExists=state.products.find((product)=>product.id===action.payload.id);
   
        if(addProductExists)    {
        addProductExists.quantity += parseInt(action.payload.quantity);
        }
         else{
            state.products.push({...action.payload, quantity: parseInt(action.payload.quantity)})
         }
        state.productsNumber =state.productsNumber + parseInt(action.payload.quantity)
        localStorage.setItem('cart', JSON.stringify({ products: state.products, productsNumber: state.productsNumber }));
        console.log('Data being stored in localStorage:', { products: state.products, productsNumber: state.productsNumber });
        
        },
        removeFromCart:(state,action)=>{
            const productToRemove = state.products.find(
                (product) => product.id === action.payload
              );
              // remove the quantity from product number
              state.productsNumber = state.productsNumber - productToRemove.quantity;
              // find index of the product removing
              const index = state.products.findIndex(
                (product) => product.id === action.payload
              );
              // remove from the array
              state.products.splice(index, 1)
              localStorage.setItem('cart', JSON.stringify({ products: state.products, productsNumber: state.productsNumber }));

        },
        incrementInCart: (state, action) => {
            const itemInc = state.products.find((item) => item.id === action.payload);
            if (itemInc.quantity >= 1) {
              itemInc.quantity = itemInc.quantity + 1;
            }
            state.productsNumber = state.productsNumber + 1;
            localStorage.setItem('cart', JSON.stringify({ products: state.products, productsNumber: state.productsNumber }));
        

          },

          decrementInCart: (state, action) => {
            const itemDec = state.products.find((item) => item.id === action.payload);
            if (itemDec.quantity === 1) {
              const index = state.products.findIndex(
                (item) => item.id === action.payload
              );
              state.products.splice(index, 1);
            } else {
              itemDec.quantity--;
            }
            state.productsNumber = state.productsNumber - 1;
            localStorage.setItem('cart', JSON.stringify({ products: state.products, productsNumber: state.productsNumber }));
         
          },
          reduceCartToZero: (state) => {
            // This action sets the cart products and productsNumber to zero
            state.products = [];
            state.productsNumber = 0;
            localStorage.setItem('cart', JSON.stringify({ products: state.products, productsNumber: state.productsNumber }));
        },
        },
});

export const{addToCart, removeFromCart , incrementInCart, decrementInCart,reduceCartToZero  } = cartSlice.actions;
export default cartSlice.reducer;
