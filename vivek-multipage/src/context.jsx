// The context hook is simple a combination of
// create a context
// create a Provider
// create a consumer / useContext

// Using Context Api
// ----------------------------------

import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ fname: "Vivek", age: "25" }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };


// --------------------------------

// Using Use Reducer hook

// import React, { useReducer } from "react";
// import reducer from "./reducer"

// const AppContext = React.createContext();


// const intialState = {
//   name: "",
//   image: "",

// };

// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, intialState);

//   const updateHomePage = () => {
//     return dispatch({
//       type: "HOME_UPDATE",
//       payload: {
//         name: "Vivek Vadher",
//         image: "./images/hero.svg",
//       },
//     });
//   };

//   const udpateAboutPage = () => {
//     return dispatch({
//       type: "ABOUT_UPDATE",
//       payload: {
//         name: "Vivek Rockss",
//         image: "./images/about1.svg",
//       },
//     });
//   };



//   return (
//     <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
//       {children}
//     </AppContext.Provider>
//   );
// };



// export { AppProvider, AppContext  };
