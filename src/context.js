import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movie, setmovie] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchMovie = async (url) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${url ? url : "popular"}?api_key=${
          process.env.REACT_APP_API_KEY
        }`
      );

      setmovie(data?.results);
      setloading(false);
    } catch (error) {

    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <AppContext.Provider
      value={{
        movie,
        setmovie,
        loading,
        setloading,
        fetchMovie,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
