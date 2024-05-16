"use client";
import React, { useState } from "react";
import styles from "@/app/ui/dashboard/departments/addDepartment/addDepartment.module.css";

const DepartmentForm = ({ addDepartment }) => {
  const [formData, setFormData] = useState({});
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

  const handleYearChange = (e) => {
    const { value } = e.target;
    setSelectedYear(value);

    const selectedYearData = formData?.yillar?.find(
      (item) => item.yil === parseInt(value)
    );

    if (selectedYearData) {
      setFormData({
        ...formData,
        yil: selectedYearData.yil,
        genelKont: selectedYearData.genelKont,
        okulBirKont: selectedYearData.okulBirKont,
        toplamYerlesen: selectedYearData.toplamYerlesen,
        tabanPuan: selectedYearData.tabanPuan,
        tavanPuan: selectedYearData.tavanPuan,
        tabanSiralama: selectedYearData.tabanSiralama,
        tavanSiralama: selectedYearData.tavanSiralama,
      });
    } else {
      setFormData({
        ...formData,
        yil: parseInt(value),
        genelKont: "",
        okulBirKont: "",
        toplamYerlesen: "",
        tabanPuan: "",
        tavanPuan: "",
        tabanSiralama: "",
        tavanSiralama: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDepartment(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="hidden" name="id" onChange={handleChange} />
      <label> Bölüm Adı</label>
      <input type="text" name="title" onChange={handleChange} />
      <label>Program Kodu</label>
      <input type="number" name="progKodu" onChange={handleChange} />
      <label>Program Türü</label>
      <select name="progTuru" id="progTuru" onChange={handleChange}>
        <option value="">Seçiniz</option>
        <option value="lisans">Lisans</option>
        <option value="onlisans">Önlisans</option>
      </select>
      <label>Puan Türü</label>
      <select name="puanTuru" id="puanTuru" onChange={handleChange}>
        <option value="">Seçiniz</option>
        <option value="sayisal">Sayısal</option>
        <option value="esitagirlik">Eşit Ağırlık</option>
        <option value="tyt">Tyt</option>
        <option value="sozel">Sözel</option>
        <option value="dil">Dil</option>
      </select>
      <label>Fakülte/Yüksekokul Adı</label>
      <select name="fakAdi" id="fakAdi" onChange={handleChange}>
        <option value="">Seçiniz</option>
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
      <select name="ogrDili" id="ogrDili" onChange={handleChange}>
        <option value="">Seçiniz</option>
        <option value="turkce">Türkçe</option>
        <option value="ingilizce"> İngilizce</option>
      </select>

      <label>Yıl Seçiniz</label>
      <select name="yil" onChange={handleYearChange}>
        {futureYears?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <label>Genel Kontenjan</label>
      <input type="number" name="genelKont" onChange={handleChange} />
      <label>Okul Birinci Kontenjan</label>
      <input type="number" name="okulBirKont" onChange={handleChange} />
      <label>Toplam Yerleşen Sayısı</label>
      <input type="number" name="toplamYerlesen" onChange={handleChange} />
      <label>Taban Puan</label>
      <input type="number" name="tabanPuan" onChange={handleChange} />
      <label>Tavan Puan</label>
      <input type="number" name="tavanPuan" onChange={handleChange} />
      <label>Taban Sıralama</label>
      <input type="number" name="tabanSiralama" onChange={handleChange} />
      <label>Tavan Sıralama</label>
      <input type="number" name="tavanSiralama" onChange={handleChange} />
      <button type="submit">Ekle</button>
    </form>
  );
};

export default DepartmentForm;
