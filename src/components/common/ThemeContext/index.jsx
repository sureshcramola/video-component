import React, { useState } from "react";

export const ThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
  const [darkTheme, changeTheme] = useState(false)

  const toggleTheme = () => {
    changeTheme(!darkTheme)
  };


 return <ThemeContext.Provider value={{theme: darkTheme, toggleTheme}}>{props.children}</ThemeContext.Provider>;

}

export default ThemeContextProvider;