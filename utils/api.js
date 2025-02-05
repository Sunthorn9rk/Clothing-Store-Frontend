import axios from "axios";
export const fetchDataFromApi = async (endpoint) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_API}${endpoint}`);
  const data = await res.json();

  console.log(res);
  return data;
};

export const makePaymentRequest = async (endpoint, data) => {
  try {
    const res = await axios.post(`http://localhost:5000${endpoint}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
