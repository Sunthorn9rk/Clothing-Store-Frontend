"use client";
import axios from "axios";
// import {appCheck, getToken} from "../firebase";

// const generateToken = async () => {
//   try {
//     //code
//     const token = await getToken(appCheck);
//     return token;
//   } catch (err) {
//     //err
//     console.log(err);
//     return null;
//   }
// };

export const remove = async (id) =>
  await axios.delete(process.env.NEXT_PUBLIC_APP_API + "/product/" + id);

export const create = async (data) =>
  await axios.post(process.env.NEXT_PUBLIC_APP_API + "/product", data);

export const listby = async (sort, order) =>
  await axios.post(process.env.NEXT_PUBLIC_APP_API + "/productby", {
    sort,
    order,
  });

export const getdata = async () =>
  await axios.get(process.env.NEXT_PUBLIC_APP_API + "/products");

// for test firebase middlewawre

// export const getdata = async () => {
//   const stamp = await generateToken();
//   console.log("stamp token:", stamp);
//   return await axios.get(process.env.REACT_APP_API + "/product", {
//     headers: {
//       "X-Firebase-AppCheck": stamp.token,
//     },
//   });
// };

export const read = async (id) => {
  return await axios.get(process.env.NEXT_PUBLIC_APP_API + "/product/" + id);
};
export const update = async (id, data) => {
  return await axios.put(
    process.env.NEXT_PUBLIC_APP_API + "/product/" + id,
    data
  );
};
