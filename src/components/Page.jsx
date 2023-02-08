import { useState } from "react";

const pageStyle = {
  width: "100%",
  backgroundColor: "white",
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  gap: "16px"
};

const sectionStyle = {
    textAlign: "center",
    padding: "10px"
};

const imageStyle = {
  maxHight: "250px",
  width: "100%"
};

const buttonStyle = {
    border: "none",
    borderRadius: "10px",
    padding: "10px",
    color: "beige",
    backgroundColor: "grey",
    cursor: "pointer"
};

const Page = () => {
    const [value, setValue] = useState()
    const onClick = () => {
        setValue("Sveiki atvykę!")
    }
  return (
    <main style={pageStyle}>
      <section>
        <img
          style={imageStyle}
          src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="image"
        ></img>
      </section>
      <section style={sectionStyle}>
        <button style={buttonStyle} onClick={onClick}>Spustelk</button>
      </section>
      <section style={sectionStyle}>{value}</section>
    </main>
  );
};

export default Page;
