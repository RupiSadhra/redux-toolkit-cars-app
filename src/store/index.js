import { configureStore } from "@reduxjs/toolkit";
import { changeSearchTerm, addCar, removeCar, carsReducer } from "./slices/carsSlice";
import { changeCost, changeName, formReducer } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    carsList: carsReducer,
    form: formReducer,
  },
});

export { store, changeSearchTerm, addCar, removeCar, changeCost, changeName };
