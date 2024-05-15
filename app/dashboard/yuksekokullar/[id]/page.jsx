import styles from "@/app/ui/dashboard/faculties/singleFaculty.module.css";
import Image from "next/image";
import { updateYuksekokul } from "@/app/lib/actions";
import { fetchYuksekokul } from "@/app/lib/data";

const SingleYuksekokulPage = async ({ params }) => {
  const { id } = params;
  const yuksekokul = await fetchYuksekokul(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {yuksekokul.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateYuksekokul} className={styles.form}>
          <input type="hidden" name="id" value={yuksekokul.id} />
          <label>Yüksekokul Adı</label>
          <input type="text" name="title" placeholder={yuksekokul.title} />
          <label>Tanıtım Video Url</label>
          <input
            type="text"
            name="videoUrl"
            placeholder={yuksekokul.videoUrl}
          />
          <label>Website Url</label>
          <input type="text" name={yuksekokul.webSiteUrl} />
          <label>Pdf Url</label>
          <input type="text" name="pdfUrl" placeholder={yuksekokul.pdfUrl} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleYuksekokulPage;
