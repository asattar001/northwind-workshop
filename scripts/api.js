async function getData(type, id = "") {
    return fetch(`http://localhost:8081/api/${type}/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  }
  