"use client";
import React, {useEffect, useState} from "react";
import {useRouter, useParams} from "next/navigation";
import {IoIosCloseCircleOutline} from "react-icons/io";
import {read, update} from "../../../../functions/product";

const EditPage = () => {
  const [data, setData] = useState(null);
  const [inputData, setInputData] = useState();
  const router = useRouter();
  const params = useParams(); // ใช้ useParams() แทน router.query
  const slug = params.slug; // ดึง slug จาก params

  useEffect(() => {
    if (slug) {
      loadData(slug);
    }
  }, [slug]);

  const loadData = async (id) => {
    await read(id)
      .then((res) => {
        setData(res.data);
        setInputData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ป้องกันการ refresh หน้าเว็บ
    await update(data.id, inputData)
      .then((res) => {
        console.log("Update successful:", res.data);
        router.push("/admin/viewtable"); // กลับไปที่หน้า manageaccount หลังจากอัปเดตสำเร็จ
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="justify-center items-center flex">
      <div className="bg-white w-[700px] py-8 rounded-lg text-center relative">
        <IoIosCloseCircleOutline
          className="absolute text-2xl right-0 top-0 m-4 cursor-pointer hover:text-red-600"
          onClick={() => router.push("/admin/viewtable")} // ปิด popup และกลับไปที่หน้า manageaccount
        />
        {data ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Edit {data.name}</h2>
            {/* เพิ่มฟอร์มสำหรับแก้ไขข้อมูล */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-left mb-2">Name</label>
                <input
                  type="text"
                  value={inputData.name}
                  onChange={(e) =>
                    setInputData({...inputData, name: e.target.value})
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">Category</label>
                <input
                  type="text"
                  value={inputData.category}
                  onChange={(e) =>
                    setInputData({...inputData, category: e.target.value})
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">Detail</label>
                <textarea
                  value={inputData.detail}
                  onChange={(e) =>
                    setInputData({...inputData, detail: e.target.value})
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">Original Price</label>
                <input
                  type="text"
                  value={inputData.originalPrice}
                  onChange={(e) =>
                    setInputData({...inputData, originalPrice: e.target.value})
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">Price</label>
                <input
                  type="text"
                  value={inputData.price}
                  onChange={(e) =>
                    setInputData({...inputData, price: e.target.value})
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">Sale Amount</label>
                <input
                  type="text"
                  value={inputData.sale_amount}
                  onChange={(e) =>
                    setInputData({...inputData, sale_amount: e.target.value})
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">Colors</label>
                {inputData.colors.map((color, index) => (
                  <div key={index} className="mb-2">
                    <input
                      type="text"
                      value={color.color}
                      onChange={(e) =>
                        handleColorChange(index, "color", e.target.value)
                      }
                      className="w-full p-2 border rounded mb-2"
                      placeholder="Color"
                    />
                    <select
                      value={color.enabled}
                      onChange={(e) =>
                        handleColorChange(
                          index,
                          "enabled",
                          e.target.value === "true"
                        )
                      }
                      className="w-full p-2 border rounded"
                    >
                      <option value="true">Enabled</option>
                      <option value="false">Disabled</option>
                    </select>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">Sizes</label>
                {inputData.sizes.map((size, index) => (
                  <div key={index} className="mb-2">
                    <input
                      type="text"
                      value={size.size}
                      onChange={(e) =>
                        handleSizeChange(index, "size", e.target.value)
                      }
                      className="w-full p-2 border rounded mb-2"
                      placeholder="Size"
                    />
                    <select
                      value={size.enabled}
                      onChange={(e) =>
                        handleSizeChange(
                          index,
                          "enabled",
                          e.target.value === "true"
                        )
                      }
                      className="w-full p-2 border rounded"
                    >
                      <option value="true">Enabled</option>
                      <option value="false">Disabled</option>
                    </select>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">Files</label>
                {inputData.files.map((file, index) => (
                  <div key={index} className="mb-2">
                    <input
                      type="text"
                      value={file}
                      onChange={(e) => handleFileChange(index, e.target.value)}
                      className="w-full p-2 border rounded"
                      placeholder="File URL"
                    />
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </form>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default EditPage;
