import { createAsyncThunk } from '@reduxjs/toolkit';
import * as dragonsAPI from '../../services/DragonsApi/dragons-api'


export const fetchDragons = createAsyncThunk(
    'dragons/fetchDragons', async (_, {rejectWithValue}) => {
        try {
            const dragons = await dragonsAPI.fetchDragons();
            return dragons;    
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

// export const fetchDragonById = createAsyncThunk(
//     'dragons/fetchDragonById', async (_, {rejectWithValue}) => {
//         try {
//             const dragon = await dragonsAPI.fetchDragonById();
//             return dragon;    
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// );