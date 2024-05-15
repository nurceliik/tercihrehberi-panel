import styles from "@/app/ui/dashboard/faculties/singleFaculty.module.css";
import Image from "next/image";
import { updateMeslekyuksekokul } from "@/app/lib/actions";
import { fetchMeslekyuksekokul } from "@/app/lib/data";

const SingleMyoPage = async ({ params }) => {
  const { id } = params;
  const myo = await fetchMeslekyuksekokul(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {myo.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateMeslekyuksekokul} className={styles.form}>
          <input type="hidden" name="id" value={myo.id} />
          <label>Meslek Yüksekokul Adı</label>
          <input type="text" name="title" placeholder={myo.title} />
          <label>Tanıtım Video Url</label>
          <input type="text" name="videoUrl" placeholder={myo.videoUrl} />
          <label>Website Url</label>
          <input type="text" name={myo.webSiteUrl} />
          <label>Pdf Url</label>
          <input type="text" name="pdfUrl" placeholder={myo.pdfUrl} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleMyoPage;
