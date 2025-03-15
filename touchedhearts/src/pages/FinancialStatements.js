import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import Chart from "chart.js/auto";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/financial-statements.css";

const financialData = [
  { year: "2023", revenue: 50000000, expenses: 35000000, netIncome: 15000000 },
  { year: "2022", revenue: 45000000, expenses: 30000000, netIncome: 15000000 },
  { year: "2021", revenue: 40000000, expenses: 32000000, netIncome: 8000000 },
];

const FinancialStatementsPage = () => {
  const [selectedYear, setSelectedYear] = useState("all");
  const [filteredData, setFilteredData] = useState(financialData);

  useEffect(() => {
    if (selectedYear === "all") {
      setFilteredData(financialData);
    } else {
      setFilteredData(financialData.filter((item) => item.year === selectedYear));
    }
  }, [selectedYear]);

  useEffect(() => {
    const ctx = document.getElementById("financialChart");
    if (ctx) {
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: filteredData.map((item) => item.year),
          datasets: [
            {
              label: "Revenue (UGX)",
              data: filteredData.map((item) => item.revenue),
              backgroundColor: "blue",
            },
            {
              label: "Expenses (UGX)",
              data: filteredData.map((item) => item.expenses),
              backgroundColor: "red",
            },
            {
              label: "Net Income (UGX)",
              data: filteredData.map((item) => item.netIncome),
              backgroundColor: "green",
            },
          ],
        },
      });
    }
  }, [filteredData]);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Financial Summary", 20, 10);
    filteredData.forEach((item, index) => {
      doc.text(`${item.year}: Revenue - UGX ${item.revenue}, Expenses - UGX ${item.expenses}, Net Income - UGX ${item.netIncome}`, 10, 20 + index * 10);
    });
    doc.save("Financial_Summary.pdf");
  };

  return (
    <>
      <Header />
      <section className="page-header">
        <h1>Financial Statements</h1>
        <p className="header-subtitle">Transparency in every shilling</p>
      </section>

      <section className="financial-section">
        <div className="financial-filter">
          <select onChange={(e) => setSelectedYear(e.target.value)} value={selectedYear}>
            <option value="all">All Years</option>
            {financialData.map((item) => (
              <option key={item.year} value={item.year}>
                {item.year}
              </option>
            ))}
          </select>
        </div>

        <div className="financial-container">
          <div className="financial-table">
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Revenue (UGX)</th>
                  <th>Expenses (UGX)</th>
                  <th>Net Income (UGX)</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.year}>
                    <td>{item.year}</td>
                    <td>{item.revenue.toLocaleString()}</td>
                    <td>{item.expenses.toLocaleString()}</td>
                    <td>{item.netIncome.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="financial-chart">
            <canvas id="financialChart"></canvas>
          </div>
        </div>

        <div className="financial-download">
          <button onClick={downloadPDF}>Download Summary (PDF)</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FinancialStatementsPage;