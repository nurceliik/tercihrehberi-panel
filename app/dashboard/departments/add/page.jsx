import { addDepartment } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/departments/addDepartment/addDepartment.module.css";
import { fetchDepartments } from "@/app/lib/data";

const AddDepartmentPage = () => {
  let formData = fetchDepartments;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStateFormData({ ...formStateData, [name]: value });
  };

  const handleYearChange = (e) => {
    const { value } = e.target;
    setSelectedYear(value);

    const selectedYearData = bolum.yillar.find(
      (item) => item.yil === parseInt(value)
    );
    if (selectedYearData) {
      setStateFormData({
        ...formStateData,
        genelKont: selectedYearData.genelKont,
        okulBirKont: selectedYearData.okulBirKont,
        toplamYerlesen: selectedYearData.toplamYerlesen,
        tabanPuan: selectedYearData.tabanPuan,
        tavanPuan: selectedYearData.tavanPuan,
        tabanSiralama: selectedYearData.tabanSiralama,
        tavanSiralama: selectedYearData.tavanSiralama,
      });
    } else {
      setStateFormData({
        ...formStateData,
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
  const currentYear = new Date().getFullYear();
  const futureYears = Array.from(
    { length: 50 },
    (_, index) => currentYear + index - 2
  );

  let bolum = fetchDepartments;

  const yil =
    bolum && bolum.yillar && bolum.yillar.length > 0
      ? bolum.yillar[bolum.yillar.length - 1].yil
      : "Veri yok";

  return (
    <div className={styles.container}>
      <form action={addDepartment} className={styles.form}>
        <input type="hidden" name="id" />
        <label> Bölüm Adı</label>
        <input type="text" name="title" />
        <label>Program Kodu</label>
        <input type="number" name="progKodu" />
        <label>Program Türü</label>
        <select name="progTuru" id="progTuru">
          <option value="lisans">Lisans</option>
          <option value="onlisans">Önlisans</option>
        </select>
        <label>Puan Türü</label>
        <select name="puanTuru" id="puanTuru">
          <option value="tyt">Tyt</option>
          <option value="sayisal">Sayısal</option>
          <option value="esitagirlik">Eşit Ağırlık</option>
          <option value="sozel">Sözel</option>
          <option value="dil">Dil</option>
        </select>
        <label>Fakülte/Yüksekokul Adı</label>
        <select name="fakAdi" id="fakAdi">
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
        <select name="ogrDili" id="ogrDili">
          <option value="turkce">Türkçe</option>
          <option value="yuzIng"> İngilizce</option>
        </select>

        <label>Yıl Seçiniz</label>

        <select name="yil" id={yil}>
          {futureYears.map((yil) => (
            <option key={yil} value={yil}>
              {yil}
            </option>
          ))}
        </select>

        <label>Genel Kontenjan</label>
        <input type="number" name="genelKont" />
        <label>Okul Birinci Kontenjan</label>
        <input type="number" name="okulBirKont" />
        <label>Toplam Yerleşen Sayısı</label>
        <input type="number" name="toplamYerlesen" />
        <label>Taban Puan</label>
        <input type="number" name="tabanPuan" />
        <label>Tavan Puan</label>
        <input type="number" name="tavanPuan" />
        <label>Taban Sıralama</label>
        <input type="number" name="tabanSiralama" />
        <label>Tavan Sıralama</label>
        <input type="number" name="tavanSiralama" />
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
};

export default AddDepartmentPage;
