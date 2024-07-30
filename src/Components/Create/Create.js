import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { FirebaseContext, AuthContext } from "../../store/Context";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Create = () => {
  const navigate = useNavigate();
  const { db, storage } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    if (!name || !category || !price || !image) {
      alert("Please fill in all fields and select an image.");
      return;
    }

    if (!storage) {
      console.error("Firebase storage is not initialized");
      alert("Error: Firebase storage is not available");
      return;
    }

    try {
      // Upload the image to Firebase Storage
      const imageRef = ref(storage, `images/${image.name}`);
      const snapshot = await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(snapshot.ref);

      await addDoc(collection(db, "products"), {
        name,
        category,
        price,
        imageUrl,
        userId: user.uid,
        createdAt: new Date(),
      });

      console.log("Image URL:", imageUrl);
      navigate("/")
    } catch (error) {
      console.error("Error uploading image:", error.message);
      alert("Error uploading image");
    }
  };
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="fname"
            name="Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <br />
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>
          <br />
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
          />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">
            upload and Submit
          </button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
