import styles from "@/app/ui/dashboard/products/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Urun
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Nur Celik" />
          <label>Price</label>
          <input type="number" name="Price" placeholder="55" />
          <label>Stock</label>
          <input type="number" name="stock" />
          <label>Color</label>
          <input type="text" name="size" placeholder="2566" />
          <label>Size</label>
          <input type="text" name="address" placeholder="BURSA" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="k">Kitchen</option>
            <option value="comp">Computer</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="desc"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
