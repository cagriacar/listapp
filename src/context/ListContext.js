import React, { createContext, useContext, useReducer } from "react";

export const ListLayerContext = createContext();

export const ListLayer = ({ initialState, reducer, children }) => (
  <ListLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </ListLayerContext.Provider>
);

export const useListLayerValue = () => useContext(ListLayerContext);
