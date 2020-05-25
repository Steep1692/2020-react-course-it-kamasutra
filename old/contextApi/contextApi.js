import * as React from "react";

const MyContext = React.createContext(null);

const Provider = ({store, children}) => {
  return (
      <MyContext.Provider value={store}>
          {children}
      </MyContext.Provider>
  )  ;
};

export {
    MyContext as MyContext,
    Provider as Provider,
};