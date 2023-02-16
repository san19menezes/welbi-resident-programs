import { useState, useEffect } from 'react';

function getSavedToken(key, initialToken) {
  const savedToken = JSON.parse(localStorage.getItem(key));
  if (savedToken) return savedToken;
  if (initialToken instanceof Function) return initialToken();
  return initialToken;
}
// Hook definition  to fetch and store bearer token to local storage
export function useBearerTokenFromLocalStorage(key, initialToken) {
  const [token, setToken] = useState(() => {
    return getSavedToken(key, initialToken);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(token));
  }, [token, key]);
  return [token, setToken];
}
