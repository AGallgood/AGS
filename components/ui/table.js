import React from 'react';
import { TableRow, TableHead, TableBody, TableCell } from './';

export const Table = ({ items, quantities, updateQuantity }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <TableHead>Item Code</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Sell Price</TableHead>
          <TableHead>Quantity</TableHead>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TableRow key={item.code}>
            <TableCell>{item.code}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.sellPrice}</TableCell>
            <TableCell>
              <input
                type="number"
                value={quantities[item.code]}
                onChange={e => updateQuantity(item.code, e.target.value)}
              />
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
};

export const TableHeader = ({ children }) => {
  return <th>{children}</th>;
};

export const TableRow = ({ children }) => {
  return <tr>{children}</tr>;
};

export const TableCell = ({ children }) => {
  return <td>{children}</td>;
};
