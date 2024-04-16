import { useMemo } from "react";
import "@mantine/core/styles.css"; //import Mantine V7 styles needed by MRT
import "@mantine/dates/styles.css"; //if using mantine date picker features
import "mantine-react-table/styles.css"; //import MRT styles
import "./App.css";

import { useMantineReactTable, MantineReactTable } from "mantine-react-table";

import data from "./students.json";

function App() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Full Name",
      },
      {
        accessorKey: "email",
        header: "E-mail Address",
      },

      {
        accessorKey: "phone",
        header: "Phone Number",
      },
      {
        accessorKey: "standard",
        header: "Class",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "date_of_birth",
        header: "DOB",
      },
      {
        accessorKey: "date_of_admission",
        header: "DOA",
      },

      {
        accessorKey: "address.pincode",
        header: "Zip Code",
      },
      {
        accessorKey: "address.city",
        header: "City",
      },
      {
        accessorKey: "address.street",
        header: "Street Address",
      },
      {
        accessorKey: "address.state",
        header: "State Name",
      },
    ],
    []
  );
  const table = useMantineReactTable({
    columns,
    data,
    enableStickyHeader: true,
    enableStickyFooter: true,
    mantineTableContainerProps: {
      style: {
        maxHeight: "500px",
      },
    },
    // initialState: { pagination: { pageSize: 5, pageIndex: 0 } },
  });

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "80%" }}>
          <MantineReactTable table={table} />
        </div>
      </div>
    </>
  );
}

export default App;
