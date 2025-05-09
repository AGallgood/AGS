import React, { useState, useRef } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./components/ui/table";

// The items you want to quote
const ITEMS = [
  { code: "OUTLET01", description: "Ceiling Outlet", sellPrice: 55, costPrice: 30 },
  { code: "RETURN01", description: "Return Air Grille", sellPrice: 95, costPrice: 50 },
  { code: "ZONE01", description: "Zone Damper", sellPrice: 120, costPrice: 65 },
  { code: "CTRL01", description: "Smart Thermostat", sellPrice: 340, costPrice: 210 },
  { code: "UNIT01", description: "14kW Ducted System - Mitsubishi", sellPrice: 4800, costPrice: 3750 }
];

export default function QuoteBuilder() {
  const [quantities, setQuantities] = useState(() => {
    const initial = {};
    ITEMS.forEach(item => {
      initial[item.code] = 0;
    });
    return initial;
  });

  const fileInputRef = useRef(null);

  const updateQuantity = (code, qty) => {
    setQuantities(prev => ({ ...prev, [code]: parseInt(qty) || 0 }));
  };

  const generatePrintableForm = () => {
    const printableWindow = window.open("", "_blank");
    const htmlContent = `
      <html>
        <head>
          <title>Take-Off Sheet</title>
        </head>
        <body>
          <h1>Take-Off Sheet</h1>
          <table>
            <thead>
              <tr>
                <th>Item Code</th>
                <th>Description</th>
                <th>Sell Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              ${ITEMS.map(item => `
                <tr>
                  <td>${item.code}</td>
                  <td>${item.description}</td>
                  <td>${item.sellPrice}</td>
                  <td>${quantities[item.code]}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </body>
      </html>
    `;
    printableWindow.document.write(htmlContent);
    printableWindow.document.close();
    printableWindow.print();
  };

  return (
    <div>
      <h1>Quote Builder</h1>
      <Table items={ITEMS} quantities={quantities} updateQuantity={updateQuantity} />
      <Button onClick={generatePrintableForm}>Generate Printable Form</Button>
    </div>
  );
}
