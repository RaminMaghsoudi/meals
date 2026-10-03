"use client";

import { Box, Button } from "@mui/material";
import classess from "./image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const ImageInputRef = useRef();
  function handlePickClick() {
    ImageInputRef.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <Box className={classess.picker}>
      <label htmlFor={name}>{label}</label>
      <Box className={classess.controls}>
        <Box className={classess.preview}>
          {!pickedImage && <p>no image picked yet!!!</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The Image selected by the user."
              fill
            />
          )}
        </Box>
        <input
          className={classess.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg, image/jpg, image/webp"
          name={name}
          ref={ImageInputRef}
          //   multiple
          onChange={handleImageChange}
          required
        />
        <Button
          className={classess.button}
          type="button"
          onClick={handlePickClick}
        >
          Pck an Image
        </Button>
      </Box>
    </Box>
  );
}
