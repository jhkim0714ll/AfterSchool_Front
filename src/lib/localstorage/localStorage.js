class LocalStorage {
  getItem(key) {
    let item = null;
    if (localStorage.getItem(key)) {
      item = localStorage.getItem(key);
    }
    return item;
  }

  setItem(key, value) {
    localStorage.setItem(key, value);
  }

  removeItem(key) {
    localStorage.remove(key);
  }

  clearItem() {
    localStorage.clear();
  }
}

export default new LocalStorage();
