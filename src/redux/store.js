import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';

export default configureStore({
    reducer: {
        counter: counterReducer,
        //someReducer: someReducer
    }
})


/*
1. For this example we only have one reducer within our store
    A. But as we continue to scale our application our reducer could increase and any reducer we add will go within the reducer key,
    B. For example with Amazon we may have one where it logs the user's cart OR it could have a list of items recommended to the end-user.

2. Now we add the reducer from our counterReducer to the configureStore objection within the reducer object.
*/