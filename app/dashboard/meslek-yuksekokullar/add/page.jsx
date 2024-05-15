import { addMeslekyuksekokul } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddMeslekyuksekokulPage = () => {
  return (
    <div className={styles.container}>
      <form action={addMeslekyuksekokul} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <input type="text" placeholder="videoUrl" name="videoUrl" />
        <input type="text" placeholder="webSiteUrl" name="webSiteUrl" />
        <input type="text" placeholder="pdfUrl" name="pdfUrl" />
        <button type="submit">Güncelle</button>
      </form>
    </div>
  );
};

export default AddMeslekyuksekokulPage;
