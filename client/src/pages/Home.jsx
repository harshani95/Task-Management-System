import Navbar from "../components/Navbar";
import cover from "../assets/cover.png";

const Home = () => {
  const coverStyle = {
    display: "block",
    margin: "0 auto",
    width: "55%",
    maxWidth: "800px",
  };

  return (
    <>
      <Navbar />
      <br />
      <h1 className="text-center">Welcome to Task Management System</h1>
      <br />
      <img src={cover} alt="cover image" style={coverStyle} />;
    </>
  );
};

export default Home;
