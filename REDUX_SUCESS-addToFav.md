## 🌈 Redux Add to fav success

<br>

- Creating a single reducer for buttons that are nested in the same **slice** isn't difficult (like an add to cart + remove + clear the cart + increase and decrease), **but** creating a second button that will show other saved products in a different page or modal was quite a challenge

<br>
<br>

### 🥥 After a couple of test, i learned that i need 2 separated reducers

- and that if i wanted to give them both the possibility to be saved on the storage of the persistor, i needed a different approach

<br>

##### example of a store for a single reducer

- This is the basic

```javascript
// store.js
// default , with this the app will work again
import cartReducer from "./cartReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
```

<br>
<br>

### This is the completed version for a single reducer

- Keep in mind that this version below is the one that ended up giving me a HUGE issue with the **store**, at the end i ended up replacing it for another redux , read all the details of the issue here: [ERROR-terrible-PERSISTOR.md](./ERROR-terrible-PERSISTOR.md)

<br>

```javascript
// ---------- This is the completed version
//              for a single reducer
//
import cartReducer from "./cartReducer";
import favReducer from "./cartReducer";
import { configureStore } from "@reduxjs/toolkit";

//

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
//
// 🔴 this line below will go on the index.js, once you use it there, you will have to wrap the app with it like you did it with the Provider
// import { PersistGate } from "redux-persist/integration/react";
//
//
//
//
// const { STRIPE_KEY } = process.env;
// const stripe = require("stripe")(`{STRIPE_KEY}`);

// ------------
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

//
// reducer 🔴 here below you can see that we wrap the 2 reducers: persistConfig and cartReducer
//
const persistedReducer = persistReducer(persistConfig, cartReducer);

//
// ✋ very important to export it, as otherwise you will have errors, mostly inside the idex.js as its imported there, and its wrapping the app.js
//
export const store = configureStore({
  reducer: {
    // second reducer 🔴
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
//
//
//
//-------------------

// index.js
import React from "react";

import ReactDOM from "react-dom/client";
import { store } from "./redux/store";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

//
//
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

//
//
```

<br>
<br>
<br>

## SOLUTION 🍨



i will be adding the solution soon 🍫