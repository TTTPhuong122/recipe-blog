import { AsyncThunk, createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import Recipe from '../types/Recipe.type'
import { http } from '../utils/http'
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

interface BlogState {
  breakfasts: Recipe[] | null
  snacks: Recipe[] | null
  mainfoods: Recipe[] | null
  id: string | null
  loading: boolean
  currentBlog: Recipe | null
  currentRequestId: string | undefined
}
const initialState: BlogState = {
  breakfasts: null,
  snacks: null,
  mainfoods: null,
  id: null,
  loading: false,
  currentBlog: null,
  currentRequestId: undefined
}
export const getBreakfasts = createAsyncThunk('blog/getBreakfasts', async (_, thunkAPI) => {
  const response = await http.get<Recipe[]>('breakfast', {
    signal: thunkAPI.signal
  })
  return response.data
})
export const getSnackfs = createAsyncThunk('blog/getSnackfs', async (_, thunkAPI) => {
  const response = await http.get<Recipe[]>('snack', {
    signal: thunkAPI.signal
  })
  return response.data
})
export const getMainFoods = createAsyncThunk('blog/getMainFood', async (_, thunkAPI) => {
  const response = await http.get<Recipe[]>('mainfood', {
    signal: thunkAPI.signal
  })
  return response.data
})
export const getBreakfast = createAsyncThunk('blog/getBreakfast', async (id: string, thunkAPI) => {
  const response = await http.get<Recipe>(`breakfast/${id}`, {
    signal: thunkAPI.signal
  })
  return response.data
})
export const getMainfood = createAsyncThunk('blog/getMainfood', async (id: string, thunkAPI) => {
  const response = await http.get<Recipe>(`mainfood/${id}`, {
    signal: thunkAPI.signal
  })
  return response.data
})
export const getSnack = createAsyncThunk('blog/getSnack', async (id: string, thunkAPI) => {
  const response = await http.get<Recipe>(`snack/${id}`, {
    signal: thunkAPI.signal
  })
  return response.data
})
const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBreakfasts.fulfilled, (state, action) => {
        state.breakfasts = action.payload
      })
      .addCase(getSnackfs.fulfilled, (state, action) => {
        state.snacks = action.payload
      })
      .addCase(getMainFoods.fulfilled, (state, action) => {
        state.mainfoods = action.payload
      })
      .addCase(getBreakfast.fulfilled, (state, action) => {
        state.currentBlog = action.payload
      })
      .addCase(getMainfood.fulfilled, (state, action) => {
        state.currentBlog = action.payload
      })
      .addCase(getSnack.fulfilled, (state, action) => {
        state.currentBlog = action.payload
        console.log(state.currentBlog);
      })
      .addMatcher(
        (action) => action.type.includes('cancel'),
        (state, action) => {
          console.log(current(state))
        }
      )
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith('/pending'),
        (state, action) => {
          state.loading = true
          state.currentRequestId = action.meta.requestId
        }
      )
      .addMatcher<RejectedAction>(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          if (state.loading && state.currentRequestId === action.meta.requestId) {
            state.loading = false
            state.currentRequestId = undefined
          }
        }
      )
      .addMatcher<FulfilledAction>(
        (action) => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.loading = false
        }
      )
      .addDefaultCase((state, action) => {
        console.log(`action type: ${action.type}`, current(state))
      })
  }
})

export const {} = blogSlice.actions
const blogReducer = blogSlice.reducer

export default blogReducer
