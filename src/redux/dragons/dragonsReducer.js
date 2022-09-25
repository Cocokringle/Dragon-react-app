import { createReducer, combineReducers  } from '@reduxjs/toolkit';
import {fetchDragons, fetchDragonById} from './dragonsOperations'

const entities = createReducer([], {
    [fetchDragons.fulfilled]: (_, action) => action.payload,
    // [fetchDragonById.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
    [fetchDragons.pending]: () => true,
    [fetchDragons.fulfilled]: () => false,
    [fetchDragons.rejected]: () => false,
    // [fetchDragonById.pending]: () => true,
    // [fetchDragonById.fulfilled]: () => false,
    // [fetchDragonById.rejected]: () => false,
})

const error = createReducer(null, {
    [fetchDragons.rejected]: (_, action) => action.payload,
    [fetchDragons.pending]: () => null,
    // [fetchDragonById.rejected]: (_, action) => action.payload,
    // [fetchDragonById.pending]: () => null,
});


export default combineReducers({
    entities,
    isLoading,
    error,
});