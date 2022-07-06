import axios from "axios";

export const apiRequest = async (url) => {
  const res = await axios({
    method: "get",
    responseType: "json",
    url: url,
  });

  return await res.data;
};
