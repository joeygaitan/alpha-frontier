import React, { Component } from 'react';

export default React.createContext({
    user: '',
    pending: true,
    item:[],
    logIn:()=>{},
    logOut:()=>{},
    addItem:(itemId)=>{},
    updateItem:(itemId)=>{},
    removeItem:(itemId)=>{}
})