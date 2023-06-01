const LocalStorage = () => {
  const getItem = (key) => {
    let item = null;
    if (localStorage.getItem(key)) {
      item = localStorage.getItem(key);
    }
    return item;
  };

  const setItem = (key, value) => {
    localStorage.setItem(key, value);
  };

  const removeItem = (key) => {
    localStorage.remove(key);
  };

  const clearItem = () => {
    localStorage.clear();
  };
};

export default LocalStorage;
