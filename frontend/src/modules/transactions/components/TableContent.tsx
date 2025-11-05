import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import type { TableComponents } from "react-virtuoso";
import type { Transaction } from "../types/transaction";
import React from "react";
export const TableContent: TableComponents<Transaction> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer
      component={Paper}
      {...props}
      ref={ref}
      sx={{
         borderRadius: 3, 
        width: "100%",
        overflowX: "auto", 
      }}
    />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{
        borderCollapse: "separate",
        tableLayout: "fixed",
        width: "100%",
        minWidth: 900, 
      }}
    />
  ),
  TableHead: TableHead,
  TableRow: (props) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),

};
