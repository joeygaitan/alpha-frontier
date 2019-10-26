import React from 'react'

export default React.createContext({
    user: '',
    pending: true,
    item:[],
    signUp:()=>{},
    logIn:()=>{},
    logOut:()=>{},
    addToCart: (itemId)=>{},
    removeFromCart: (itemId)=>{},
    checkOut: ()=>{}
})