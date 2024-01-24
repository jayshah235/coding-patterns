import logo from "../../assests/images/logo.jpeg";

export const InitialLoadUi = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: `translate(${-50}%, ${-50}%)`,
        width: '60px'
      }}
    >
      <img src={logo} alt="logo" />
    </div>
  );
};
