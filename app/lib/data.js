import {
  User,
  Faculty,
  Department,
  Yuksekokul,
  Meslekyuksekokul,
} from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 20;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users");
  }
};

//to fetch single user data
export const fetchUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 20;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch prodycts");
  }
};

export const fetchFaculties = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 20;

  try {
    connectToDB();
    const count = await Faculty.find({ title: { $regex: regex } }).count();
    const faculties = await Faculty.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, faculties };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch faculties");
  }
};

export const fetchFaculty = async (id) => {
  try {
    connectToDB();
    const faculty = await Faculty.findById(id);
    return faculty;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch faculty");
  }
};

export const fetchYuksekokullar = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 20;

  try {
    connectToDB();
    const count = await Yuksekokul.find({ title: { $regex: regex } }).count();
    const yuksekokullar = await Yuksekokul.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, yuksekokullar };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch yuksekokullar");
  }
};

export const fetchYuksekokul = async (id) => {
  try {
    connectToDB();
    const yuksekokul = await Yuksekokul.findById(id);
    return yuksekokul;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch yuksekokul");
  }
};

export const fetchMeslekyuksekokullar = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 20;

  try {
    connectToDB();
    const count = await Meslekyuksekokul.find({
      title: { $regex: regex },
    }).count();
    const meslekyuksekokullar = await Meslekyuksekokul.find({
      title: { $regex: regex },
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, meslekyuksekokullar };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch meslek yuksekokullar");
  }
};

export const fetchMeslekyuksekokul = async (id) => {
  try {
    connectToDB();
    const meslekyuksekokul = await Meslekyuksekokul.findById(id);
    return meslekyuksekokul;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch meslek yuksekokul");
  }
};

export const fetchDepartments = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 20;

  try {
    connectToDB();
    const count = await Department.find({ title: { $regex: regex } }).count();
    const departments = await Department.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, departments };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch departments");
  }
};

export const fetchDepartment = async (id) => {
  try {
    connectToDB();
    const department = await Department.findById(id);
    return department;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch department");
  }
};
