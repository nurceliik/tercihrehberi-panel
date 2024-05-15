import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "../search/search.jsx";
import Link from "next/link.js";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination.jsx";
import { fetchYuksekokullar } from "@/app/lib/data.js";
import { deleteYuksekokul } from "@/app/lib/actions.js";

const YuksekokullarPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, yuksekokullar } = await fetchYuksekokullar(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Fakülte arama.." />
        <Link href="/dashboard/yuksekokullar/add">
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
          {yuksekokullar.map((yuksekokul) => (
            <tr key={yuksekokul.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={yuksekokul.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {yuksekokul.title}
                </div>
              </td>
              <td>{yuksekokul.videoUrl}</td>
              <td>{yuksekokul.webSiteUrl}</td>
              <td>{yuksekokul.pdfUrl}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/yuksekokullar/${yuksekokul.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      Görüntüle
                    </button>
                  </Link>
                  <form action={deleteYuksekokul}>
                    <input type="hidden" name="id" value={yuksekokul.id} />
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

export default YuksekokullarPage;
