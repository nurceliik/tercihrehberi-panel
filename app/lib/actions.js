"use server";

import { connectToDB } from "./utils";
import { User } from "./models";
import { Faculty } from "./models";
import { Yuksekokul } from "./models";
import { Meslekyuksekokul } from "./models";
import { Department } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

//User actions
export const addUser = async (formData) => {
  const { username, email, password } = Object.fromEntries(formData);

  try {
    connectToDB;
    const salt = await bcrypt.genSalt(10); //to hash password
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create a new user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password } = Object.fromEntries(formData);

  try {
    connectToDB;

    const updateFields = {
      username,
      email,
      password,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create a new user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB;
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete the user ");
  }

  revalidatePath("/dashboard/users");
};

//Fakülte actions

export const addFaculty = async (formData) => {
  const { title, img, videoUrl, webSiteUrl, pdfUrl } =
    Object.fromEntries(formData);

  try {
    connectToDB;
    const newFaculty = new Faculty({
      title,
      img,
      videoUrl,
      webSiteUrl,
      pdfUrl,
    });

    await newFaculty.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create a new faculty");
  }

  revalidatePath("/dashboard/faculties");
  redirect("/dashboard/faculties");
};

export const deleteFaculty = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB;
    await Faculty.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete the Faculty ");
  }

  revalidatePath("/dashboard/faculties");
};

export const updateFaculty = async (formData) => {
  const { id, title, img, videoUrl, webSiteUrl, pdfUrl } =
    Object.fromEntries(formData);
  try {
    connectToDB;

    const updateFields = {
      id,
      title,
      img,
      videoUrl,
      webSiteUrl,
      pdfUrl,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Faculty.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update faculty");
  }

  revalidatePath("/dashboard/faculties");
  redirect("/dashboard/faculties");
};

//yüksekokul actions

export const addYuksekokul = async (formData) => {
  const { title, videoUrl, webSiteUrl, pdfUrl } = Object.fromEntries(formData);

  try {
    connectToDB;
    const newYuksekokul = new Yuksekokul({
      title,
      videoUrl,
      webSiteUrl,
      pdfUrl,
    });

    await newYuksekokul.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create a new Yuksekokul");
  }

  revalidatePath("/dashboard/yuksekokullar");
  redirect("/dashboard/yuksekokullar");
};

export const deleteYuksekokul = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB;
    await Yuksekokul.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete the Yuksekokul ");
  }

  revalidatePath("/dashboard/yuksekokul");
};

export const updateYuksekokul = async (formData) => {
  const { id, title, img, videoUrl, webSiteUrl, pdfUrl } =
    Object.fromEntries(formData);
  try {
    connectToDB;

    const updateFields = {
      id,
      title,
      img,
      videoUrl,
      webSiteUrl,
      pdfUrl,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Yuksekokul.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update yuksekokul");
  }

  revalidatePath("/dashboard/yuksekokullar");
  redirect("/dashboard/yuksekokullar");
};

//meslek yüksekokul actions
export const addMeslekyuksekokul = async (formData) => {
  const { title, videoUrl, webSiteUrl, pdfUrl } = Object.fromEntries(formData);

  try {
    connectToDB;
    const newMeslekyuksekokul = new Meslekyuksekokul({
      title,
      videoUrl,
      webSiteUrl,
      pdfUrl,
    });

    await newMeslekyuksekokul.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create a new Meslek Yuksekokul");
  }

  revalidatePath("/dashboard/meslek-yuksekokullar");
  redirect("/dashboard/meslek-yuksekokullar");
};

export const deleteMeslekYuksekokul = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB;
    await Meslekyuksekokul.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete the Meslek Yuksekokul ");
  }

  revalidatePath("/dashboard/meslek-yuksekokul");
};

export const updateMeslekyuksekokul = async (formData) => {
  const { id, title, img, videoUrl, webSiteUrl, pdfUrl } =
    Object.fromEntries(formData);
  try {
    connectToDB;

    const updateFields = {
      id,
      title,
      img,
      videoUrl,
      webSiteUrl,
      pdfUrl,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Meslekyuksekokul.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update Meslek yuksekokul");
  }

  revalidatePath("/dashboard/meslek-yuksekokullar");
  redirect("/dashboard/meslek-yuksekokullar");
};

//Department actions
export const addDepartment = async (formData) => {
  const {
    title,
    img,
    progKodu,
    progTuru,
    puanTuru,
    fakAdi,
    ogrDili,
    yil,
    toplamYerlesen,
    tabanPuan,
    tavanPuan,
    tabanSiralama,
    tavanSiralama,
    genelKont,
    okulBirKont,
  } = formData;

  try {
    connectToDB;

    const newDepartment = new Department({
      title,
      img,
      progKodu,
      progTuru,
      puanTuru,
      fakAdi,
      ogrDili,
      yillar: [
        {
          yil,
          toplamYerlesen,
          tabanPuan,
          tavanPuan,
          tabanSiralama,
          tavanSiralama,
          genelKont,
          okulBirKont,
        },
      ],
    });
    await newDepartment.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create a new Department");
  }
  revalidatePath("/dashboard/departments");
  redirect("/dashboard/departments");
};

export const deleteDepartment = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB;
    await Department.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete the Department");
  }

  revalidatePath("/dashboard/departments");
};

export const updateDepartment = async (formData) => {
  console.log("updateDepartment called with formData:", formData);
  try {
    await connectToDB();

    const department = await Department.findById(formData.id);
    console.log("Department fetched:", department);

    if (!department) {
      throw new Error("Department not found");
    }

    const updateFields = {
      title: formData.title,
      img: formData.img,
      progKodu: formData.progKodu,
      progTuru: formData.progTuru,
      puanTuru: formData.puanTuru,
      fakAdi: formData.fakAdi,
      ogrDili: formData.ogrDili,
    };

    // Boş veya tanımsız alanları temizleyin

    for (const key in updateFields) {
      if (updateFields[key] === "" || updateFields[key] === undefined) {
        delete updateFields[key];
      }
    }

    const yearData = {
      yil: formData.yil,
      genelKont: formData.genelKont,
      okulBirKont: formData.okulBirKont,
      toplamYerlesen: formData.toplamYerlesen,
      tabanPuan: formData.tabanPuan,
      tavanPuan: formData.tavanPuan,
      tabanSiralama: formData.tabanSiralama,
      tavanSiralama: formData.tavanSiralama,
    };

    // for (const key in yearData) {
    //   if (isNaN(yearData[key]) || yearData[key] === undefined) {
    //     delete yearData[key];
    //   }
    // }

    // Object.keys(yearData).forEach(
    //   (key) => (yearData[key] === "" || undefined) && delete yearData[key]
    // );

    // const existingYearIndex = department.yillar.findIndex(
    //   (item) => item.yil === yearData.yil
    // );

    // if (existingYearIndex !== -1) {
    //   department.yillar[existingYearIndex] = {
    //     ...department.yillar[existingYearIndex],
    //     ...yearData,
    //   };
    // } else {
    //   department.yillar.push(yearData);
    // }
    const existingYearIndex = department.yillar.findIndex(
      (item) => item.yil === formData.yil
    );

    if (existingYearIndex !== -1) {
      department.yillar[existingYearIndex] = yearData;
    } else {
      department.yillar.push(yearData);
    }
    // Diğer alanları güncelle
    Object.assign(department, updateFields);

    await department.save();
    // revalidatePath ve redirect fonksiyonlarını nasıl kullanıyorsanız, burada tekrar ekleyin
  } catch (err) {
    console.error(err); // Hata mesajını konsola yazdır
    throw new Error("Failed to update Department");
  }
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Böyle bir kullanıcı bulunmamakta";
    }
    throw err;
  }
};
