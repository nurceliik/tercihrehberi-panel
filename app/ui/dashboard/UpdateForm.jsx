"use client";
import React, { useState } from "react";
import styles from "@/app/ui/dashboard/departments/singleDepartment.module.css";

const UpdateForm = ({
  id,
  title,
  progKodu,
  progTuru,
  puanTuru,
  fakAdi,
  ogrDili,
  updateDepartment,
}) => {
  const [formData, setFormData] = useState({
    id,
    title,
    progKodu,
    progTuru,
    puanTuru,
    fakAdi,
    ogrDili,
  });
  const [selectedYear, setSelectedYear] = useState("");
  const currentYear = new Date().getFullYear();
  const futureYears = Array.from(
    { length: 50 },
    (_, index) => currentYear + index - 2
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDepartment = (formData, selectedYear);
  };
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
        <label>Bölüm Adı</label>
        <input
          type="text"
          name="title"
          placeholder={formData.title}
          onChange={handleChange}
        />
        <label>Program Kodu</label>
        <input
          onChange={handleChange}
          type="number"
          name="progKodu"
          placeholder={formData.progKodu}
        />
        <label>Program Türü</label>
        <select
          name="progTuru"
          placeholder={formData.progTuru}
          onChange={handleChange}
          value={formData.progTuru}
        >
          <option value="lisans">Lisans</option>
          <option value="onlisans">Önlisans</option>
        </select>
        <label>Puan Türü</label>
        <select
          name="puanTuru"
          placeholder={formData.puanTuru}
          value={formData.puanTuru}
          onChange={handleChange}
        >
          <option value="tyt">Tyt</option>
          <option value="sayisal">Sayısal</option>
          <option value="esitagirlik">Eşit Ağırlık</option>
          <option value="sozel">Sözel</option>
          <option value="dil">Dil</option>
        </select>
        <label>Fakülte/Yüksekokul Adı</label>
        <select
          name="fakAdi"
          placeholder={formData.fakAdi}
          value={formData.fakAdi}
        >
          <option value="bucaEgitim">Buca Eğitim Fakültesi</option>
          <option value="denizcilik">Denizcilik Fakültesi</option>
          <option value="edebiyat">Edebiyat Fakültesi</option>
          <option value="fen">Fen Fakültesi</option>
          <option value="müh">Mühendislik Fakültesi</option>
          <option value="mimarlik">Mimarlık Fakültesi</option>
          <option value="isletme">İşletme Fakültesi</option>
          <option value="guzelsanat">Güzel Sanatlar Fakültesi</option>
          <option value="tip">Tıp Fakültesi</option>
        </select>
        <label>Öğrenim Dili</label>
        <select
          name="ogrDili"
          placeholder={formData.ogrDili}
          value={formData.ogrDili}
        >
          <option value="">Seçiniz</option>
          <option value="turkce">Türkçe</option>
          <option value="ingilizce"> İngilizce</option>
        </select>
        <label>Yıl Seçiniz</label>
        <select
          name="yil"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {futureYears?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
