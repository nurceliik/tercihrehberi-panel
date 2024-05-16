"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/ui/dashboard/departments/singleDepartment.module.css";

const UpdateForm = ({ formData: initialFormData, updateDepartment }) => {
  const [formData, setFormData] = useState({});
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    setFormState(initialFormData);
  }, [initialFormData]);

  const handleYearChange = (e) => {
    const { value } = e.target;
    setSelectedYear(value);

    const selectedYearData = forinitialFormDatamData?.yillar?.find(
      (item) => item.yil === parseInt(value)
    );

    if (selectedYearData) {
      setFormState((prevFormState) => ({
        ...prevFormState,
        yil: selectedYearData.yil,
        genelKont: selectedYearData.genelKont,
        okulBirKont: selectedYearData.okulBirKont,
        toplamYerlesen: selectedYearData.toplamYerlesen,
        tabanPuan: selectedYearData.tabanPuan,
        tavanPuan: selectedYearData.tavanPuan,
        tabanSiralama: selectedYearData.tabanSiralama,
        tavanSiralama: selectedYearData.tavanSiralama,
      }));
    } else {
      setFormState((prevFormState) => ({
        ...prevFormState,
        yil: parseInt(value),
        genelKont: "",
        okulBirKont: "",
        toplamYerlesen: "",
        tabanPuan: "",
        tavanPuan: "",
        tabanSiralama: "",
        tavanSiralama: "",
      }));
    }
  };

  const currentYear = new Date().getFullYear();
  const futureYears = Array.from(
    { length: 50 },
    (_, index) => currentYear + index - 2
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDepartment(formState);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="hidden" name="id" key={FormState.id} value={FormState.id} />
      <label>Bölüm Adı</label>
      <input
        type="text"
        name="title"
        value={FormState.title}
        onChange={handleChange}
        placeholder="Bölüm Adı"
      />
      <label>Program Kodu</label>
      <input
        type="number"
        name="progKodu"
        value={FormState.progKodu}
        onChange={handleChange}
        placeholder="Program Kodu"
      />
      <label>Program Türü</label>
      <select
        name="progTuru"
        value={FormState.progTuru}
        onChange={handleChange}
      >
        <option value="lisans">Lisans</option>
        <option value="onlisans">Önlisans</option>
      </select>
      <label>Puan Türü</label>
      <select
        name="puanTuru"
        value={FormState.puanTuru}
        onChange={handleChange}
      >
        <option value="tyt">Tyt</option>
        <option value="sayisal">Sayısal</option>
        <option value="esitagirlik">Eşit Ağırlık</option>
        <option value="sozel">Sözel</option>
        <option value="dil">Dil</option>
      </select>
      <label>Fakülte/Yüksekokul Adı</label>
      <select name="fakAdi" value={FormState.fakAdi} onChange={handleChange}>
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
      <select name="ogrDili" value={FormState.ogrDili} onChange={handleChange}>
        <option value="turkce">Türkçe</option>
        <option value="ingilizce"> İngilizce</option>
      </select>
      <label>Yıl Seçiniz</label>
      <select
        name="yil"
        value={FormState.yil || ""}
        onChange={handleYearChange}
      >
        {futureYears.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <label>Toplam Yerleşen Sayısı</label>
      <input
        type="number"
        name="toplamYerlesen"
        value={FormState.toplamYerlesen}
        onChange={handleChange}
        placeholder="Toplam Yerleşen Sayısı"
      />
      <label>Taban Puan</label>
      <input
        type="number"
        name="tabanPuan"
        value={FormState.tabanPuan}
        onChange={handleChange}
        placeholder="Taban Puan"
      />
      <label>Tavan Puan</label>
      <input
        type="number"
        name="tavanPuan"
        value={FormState.tavanPuan}
        onChange={handleChange}
        placeholder="Tavan Puan"
      />
      <label>Taban Sıralama</label>
      <input
        type="number"
        name="tabanSiralama"
        value={FormState.tabanSiralama}
        onChange={handleChange}
        placeholder="Taban Sıralama"
      />
      <label>Tavan Sıralama</label>
      <input
        type="number"
        name="tavanSiralama"
        value={FormState.tavanSiralama}
        onChange={handleChange}
        placeholder="Tavan Sıralama"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;
