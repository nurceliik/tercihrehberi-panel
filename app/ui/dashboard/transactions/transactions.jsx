"use client";

import React from "react";
import styles from "./transactions.module.css";
import Image from "next/image";

const Transactions = () => (
  <div className={styles.container}>
    <h2>Hoşgeldiniz</h2>
    {/* <table className={styles.table}>
      <thead>
        <tr>
          <td>Adı</td>
          <td>Program Kodu</td>
          <td>Öğrenim Dili</td>
          <td>Program Türü</td>
          <td>Puan Türü</td>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(departments) &&
          departments.slice(0, 15).map(
            (
              department // Sadece ilk 15 bölümü göster
            ) => (
              <tr key={department.id}>
                <td>{department.title}</td>
                <td>{department.progKodu}</td>
                <td>{department.ogrDili}</td>
                <td>{department.progTuru}</td>
                <td>{department.puanTuru}</td>
              </tr>
            )
          )}
      </tbody>
    </table> */}
  </div>
);

export default Transactions;
