const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
};

const get = key => {
  try {
    const notes = localStorage.getItem(key);

    return notes ? JSON.parse(notes) : null;
  } catch (e) {
    console.log('err');
  }

  return null;
};
export default {
  save,
  get,
};
