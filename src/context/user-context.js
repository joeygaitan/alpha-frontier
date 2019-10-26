import React from 'react'

export default React.createContext({
    user: '',
    pending: true,
    items: [],
    addToCart: (cartItemId)=>{},
    removeFromCart: (cartItemId)=>{}
})