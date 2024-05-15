import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "../search/search.jsx";
import Link from "next/link.js";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination.jsx";
import { fetchMeslekyuksekokullar } from "@/app/lib/data.js";
import { deleteMeslekYuksekokul } from "@/app/lib/actions.js";

const MeslekyuksekokullarPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, meslekyuksekokullar } = await fetchMeslekyuksekokullar(
    q,
    page
  );

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Meslek Yüksekokul arama.." />
        <Link href="/dashboard/meslek-yuksekokullar/add">
          <button className={styles.addButton}>Yeni Ekle</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Adı</td>
            <td>Tanıtım Video</td>
            <td>Web Sitesi</td>
            <td>Tanıtım Pdf</td>
          </tr>
        </thead>
        <tbody>
          {meslekyuksekokullar.map((myo) => (
            <tr key={myo.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={myo.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {myo.title}
                </div>
              </td>
              <td>{myo.videoUrl}</td>
              <td>{myo.webSiteUrl}</td>
              <td>{myo.pdfUrl}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/meslek-yuksekokullar/${myo.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      Görüntüle
                    </button>
                  </Link>
                  <form action={deleteMeslekYuksekokul}>
                    <input type="hidden" name="id" value={myo.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Sil
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default MeslekyuksekokullarPage;
