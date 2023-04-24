import {configureStore} from '@reduxjs/toolkit'
import rootreducer from './rootReducer'

export const store = configureStore({
    reducer: rootreducer
})

