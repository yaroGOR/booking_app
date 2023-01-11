import React, { useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "./datatablesource";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, userRows } from "react";
import axios from "axios";

const Datatable = ({columns}) => {
  console.log(document.cookie);
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const dataReq = `http://localhost:8800/${path}`;
  console.log(dataReq);
  const { data, loading, err } = useFetch(dataReq);

  const [list, setList] = useState([
    {
      _id: 0,
      username: "",
      img: "",
      email: "",
      age: undefined,
    },
  ]);

  useEffect(() => {}, [list]);
  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              style={{ zIndex: 10 }}
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New `{path}`
        <Link
          to={`/${path}/new`}
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        className="datagrid"
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
