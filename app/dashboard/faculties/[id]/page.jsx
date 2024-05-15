import { updateFaculty } from "@/app/lib/actions";
import { fetchFaculty } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/faculties/singleFaculty.module.css";
import Image from "next/image";

const SingleFacultyPage = async ({ params }) => {
  const { id } = params;
  const faculty = await fetchFaculty(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {faculty.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateFaculty} className={styles.form}>
          <input type="hidden" name="id" value={faculty.id} />
          <label>Fakülte Adı</label>
          <input type="text" name="title" placeholder={faculty.title} />
          <label>Tanıtım Video Url</label>
          <input type="text" name="videoUrl" placeholder={faculty.videoUrl} />
          <label>Website Url</label>
          <input type="text" name={faculty.webSiteUrl} />
          <label>Pdf Url</label>
          <input type="text" name="pdfUrl" placeholder={faculty.pdfUrl} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleFacultyPage;
