"use client";
import React, {useState, useEffect} from "react";
// import axios from "axios";
// import {Link} from "react-router-dom";
import Link from "next/link";

import {remove, create, getdata} from "@/functions/product";
// import {remove, create, getdata} from "../../../functions/product";

// material UI
import {Button, TextField} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// notify
import {toast} from "react-toastify";
import Wrapper from "@/components/Wrapper";

const ViewTable = () => {
  // javascript
  //   const tam = "tam roitai";
  const [data, setData] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    // code
    loadData();
  }, []);

  const loadData = async () => {
    getdata()
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setForm({
        // ...form คือเอาค่าเดิมของ form มาก่อนแล้วค่อยเอาค่าใหม่เขียนทับ
        ...form,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setForm({
        // ...form คือเอาค่าเดิมของ form มาก่อนแล้วค่อยเอาค่าใหม่เขียนทับ
        ...form,
        [e.target.name]: e.target.value,
      });
    }
    console.log(form);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault(); //ตั้งให้ตอนกด submit แล้วไม่ refresh เว็บ
    const formWithImageData = new FormData();
    // console.log(form);
    // ลูปทุกๆตัวใน form
    for (const key in form) {
      formWithImageData.append(key, form[key]);
    }

    console.log([...formWithImageData]); // ดูข้อมูลที่ส่ง

    // ส่งข้อมูลฟอร์มที่มีการกรอกไปยัง backend
    create(formWithImageData)
      .then((res) => {
        console.log(res.data);
        toast.success("Add " + res.data.name + " Success");
        loadData();

        // ล้างค่าฟอร์มหลังจากส่งข้อมูลสำเร็จ
        setForm({});
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to add product");
      });
  };

  const handleRemove = async (id) => {
    // เรียกและส่งคำขอไปยัง backend เพื่อลบสินค้านั้น
    remove(id)
      .then((res) => {
        console.log(res);
        toast.error("Delete " + res.data.name + " Success");
        loadData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Wrapper>
        {/* HTML */}
        FormProduct
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <TextField
              id="outlined-basic"
              label="name"
              variant="outlined"
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="detail"
              variant="outlined"
              name="detail"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="price"
              variant="outlined"
              name="price"
              type="number"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="file"
              variant="outlined"
              name="file"
              type="file"
              onChange={(e) => handleChange(e)}
              focused
            />
          </div>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
        <TableContainer component={Paper}>
          <Table sx={{minWidth: 650}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell scope="col">ID</TableCell>
                <TableCell scope="col">Image</TableCell>
                <TableCell scope="col">Name</TableCell>
                <TableCell scope="col">Category</TableCell>
                <TableCell scope="col">detail</TableCell>
                <TableCell scope="col">Original Price</TableCell>
                <TableCell scope="col">Price</TableCell>
                <TableCell scope="col">Sale Amount</TableCell>
                <TableCell scope="col">Delete</TableCell>
                <TableCell scope="col">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* ลูปเอาitem แต่ละอันมาโชว์ */}
              {data
                ? data.map((item, index) => (
                    <TableRow
                      key={index}
                      sx={{"&:last-child td, &:last-child th": {border: 0}}}
                    >
                      <TableCell>{item.id}</TableCell>
                      <TableCell>
                        <img
                          src={"http://localhost:5000/uploads/" + item.files[0]}
                          alt={item.name}
                          width="50"
                        />
                      </TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.detail}</TableCell>
                      <TableCell>{item.originalPrice}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.sale_amount}</TableCell>

                      <TableCell>
                        <DeleteIcon
                          color="error"
                          cursor="pointer"
                          onClick={() => handleRemove(item.id)}
                        >
                          delete
                        </DeleteIcon>
                      </TableCell>
                      <TableCell>
                        <Link href={`/admin/edit/${item.id}`}>
                          <EditIcon />
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Wrapper>
    </div>
  );
};

export default ViewTable;
