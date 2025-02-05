import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";

const AdminPage = () => {
  return (
    <div>
      <Wrapper>
        <div className=" text-center text-2xl font-extrabold">Admin Page</div>

        <Link
          href={"/admin/manageaccount"}
          className="border-2 border-gray-500 rounded-md p-4 mx-2"
        >
          Manage Account
        </Link>
        <Link
          href={"/admin/viewtable"}
          className="border-2 border-gray-500 rounded-md p-4 mx-2"
        >
          View Table
        </Link>
      </Wrapper>
    </div>
  );
};

export default AdminPage;
