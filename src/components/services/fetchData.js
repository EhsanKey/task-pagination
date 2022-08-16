const BASE_URL = "https://jsonplaceholder.typicode.com";

const fetchData = async (number, route) => {
  if (route === "photo") {
    const res = await fetch(`${BASE_URL}/photos/${number}`);
    return await res.json();
  } else {
    const res = await fetch(`${BASE_URL}/comments?_page=${number}&_limit=15`);
    return await res.json();
  }
};

export default fetchData;
