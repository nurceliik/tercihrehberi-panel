import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

const facultySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      min: 3,
    },
    img: {
      type: String,
    },
    videoUrl: {
      type: String,
    },
    webSiteUrl: {
      type: String,
    },
    pdfUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const yuksekokulSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      min: 3,
    },
    img: {
      type: String,
    },
    videoUrl: {
      type: String,
    },
    webSiteUrl: {
      type: String,
    },
    pdfUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const meslekyuksekokulSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      min: 3,
    },
    img: {
      type: String,
    },
    videoUrl: {
      type: String,
    },
    webSiteUrl: {
      type: String,
    },
    pdfUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const departmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      min: 3,
    },
    img: {
      type: String,
    },
    progKodu: {
      type: Number,
    },
    progTuru: {
      type: String,
    },
    puanTuru: {
      type: String,
    },
    fakAdi: {
      type: String,
    },
    ogrDili: {
      type: String,
    },

    yillar: [
      {
        yil: {
          type: Number,
        },
        toplamYerlesen: {
          type: Number,
        },
        tabanPuan: {
          type: Number,
        },
        tavanPuan: {
          type: Number,
        },
        tabanSiralama: {
          type: Number,
        },
        tavanSiralama: {
          type: Number,
        },
        genelKont: {
          type: Number,
        },
        okulBirKont: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export const Faculty =
  mongoose.models.Faculty || mongoose.model("Faculty", facultySchema);

export const Department =
  mongoose.models.Department || mongoose.model("Department", departmentSchema);

export const Yuksekokul =
  mongoose.models.Yuksekokul || mongoose.model("Yuksekokul", yuksekokulSchema);

export const Meslekyuksekokul =
  mongoose.models.Meslekyuksekokul ||
  mongoose.model("Meslekyuksekokul", meslekyuksekokulSchema);
