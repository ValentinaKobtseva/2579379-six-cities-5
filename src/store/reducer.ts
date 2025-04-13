import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers, setLoading, setError, setFavorites } from './actions.ts';
import { cities } from '../consts/cities.ts';
import { City, OfferType } from '../types.ts';

type State = {
  city: City;
  offers: OfferType[];
  isLoading: boolean;
  error: string | null;
  favorites: OfferType[];
}

const initialState: State = {
  city: cities.Paris,
  offers: [],
  isLoading: false,
  error: null,
  favorites: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  }).addCase(setOffers, (state, action) => {
    state.offers = action.payload;
  }).addCase(setLoading, (state, action) => {
    state.isLoading = action.payload;
  }).addCase(setError, (state, action) => {
    state.error = action.payload;
  }).addCase(setFavorites, (state, action) => {
    state.favorites = action.payload;
  });
});
