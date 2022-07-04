import React, { useState, createContext, useEffect, useMemo } from "react";
import { restaurantRequest, restaurantTransform } from "./restaurant.services";

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = ({ children }) => {
    return (
        <RestaurantsContext.Provider>
            {children}
        </RestaurantsContext.Provider>
    )
}