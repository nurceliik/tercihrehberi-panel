import styles from "@/app/ui/dashboard/departments/singleDepartment.module.css";
import Image from "next/image";
import { updateDepartment } from "@/app/lib/actions";
import { fetchDepartment } from "@/app/lib/data";

const SingleDepartmentPage = async ({ params }) => {
  const { id } = params;
  const department = await fetchDepartment(id);

  const currentYear = new Date().getFullYear();
  const futureYears = Array.from(
    { length: 50 },
    (_, index) => currentYear + index - 2
  );

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {department.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateDepartment} className={styles.form}>
          <input type="hidden" name="id" value={department.id} />
          <label> Bölüm Adı</label>
          <input type="text" name="title" placeholder={department.title} />
          <label>Program Kodu</label>
          <input
            type="number"
            name="progKodu"
            placeholder={department.progKodu}
          />
          <label>Program Türü</label>
          <select
            name="progTuru"
            id="progTuru"
            placeholder={department.progTuru}
          >
            <option value="lisans">Lisans</option>
            <option value="onlisans">Önlisans</option>
          </select>
          <label>Puan Türü</label>
          <select
            name="puanTuru"
            id="puanTuru"
            placeholder={department.puanTuru}
          >
            <option value="tyt">Tyt</option>
            <option value="sayisal">Sayısal</option>
            <option value="esitagirlik">Eşit Ağırlık</option>
            <option value="sozel">Sözel</option>
            <option value="dil">Dil</option>
          </select>
          <label>Fakülte/Yüksekokul Adı</label>
          <select name="fakAdi" id="fakAdi" placeholder={department.fakAdi}>
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
          <select name="ogrDili" id="ogrDili" placeholder={department.ogrDili}>
            <option value="turkce">Türkçe</option>
            <option value="yuzIng"> İngilizce</option>
          </select>
          <label>Yıl Seçiniz</label>
          <select
            name="yillar"
            id="yillar"
            required
            placeholder={department.yil}
          >
            {futureYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <label>Toplam Yerleşen Sayısı</label>
          <input
            type="number"
            name="toplamYerlesen"
            placeholder={department.toplamYerlesen}
          />
          <label>Taban Puan</label>
          <input
            type="number"
            name="tabanPuan"
            placeholder={department.tabanPuan}
          />
          <label>Tavan Puan</label>
          <input
            type="number"
            name="tavanPuan"
            placeholder={department.tavanPuan}
          />
          <label>Taban Sıralama</label>
          <input
            type="number"
            name="tabanSiralama"
            placeholder={department.tabanSiralama}
          />
          <label>Tavan Sıralama</label>
          <input
            type="number"
            name="tavanSiralama"
            placeholder={department.tavanSiralama}
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleDepartmentPage;
