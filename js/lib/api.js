const BASE_URL = "https://js-todo-list-9ca3a.df.r.appspot.com";

export const apiCall = async (url, option = {}) => {
  const response = await fetch(`${BASE_URL}${url}`, option);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("server error");
  }
};

export const fetchUserList = () => {
  return apiCall("/api/users");
};
