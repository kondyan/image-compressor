const uploadBox = document.querySelector(".upload-box");
const previewImg = uploadBox.querySelector("img");
fileInput = uploadBox.querySelector("input");

const loadFile = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  previewImg.src = URL.createObjectURL(file);
  previewImg.addEventListener("load", () => {
    document.querySelector(".wrapper").classList.add("active");
  });
  console.log(file);
};

fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => fileInput.click());
