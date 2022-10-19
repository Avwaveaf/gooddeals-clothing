import { createContext, useState } from "react";

import SHOP_DATA from '../../shop-data.json'

export const ProductContext = createContext()

export const ShopItemProvider = ({children})=>{
    const [shopData] =useState(SHOP_DATA)
    const value = {shopData}
    return(<ProductContext.Provider value={value}>{children}</ProductContext.Provider>)
    
}