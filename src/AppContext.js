import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = localStorage.getItem('watchlist');
    if (storedWatchlist) {
      setWatchlist(JSON.parse(storedWatchlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (anime) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, anime]);
  };

  const removeFromWatchlist = (id) => {
    const updatedWatchlist = watchlist.filter((anime) => anime.mal_id !== id);
    setWatchlist(updatedWatchlist);
  };

  return (
    <AppContext.Provider
      value={{
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
