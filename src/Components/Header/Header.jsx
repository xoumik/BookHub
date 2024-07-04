import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Reading books offers a multitude of benefits, from expanding
            knowledge and enhancing vocabulary to stimulating imagination and
            reducing stress. It fosters empathy by exposing us to diverse
            perspectives and cultures, making it a powerful tool for personal
            growth and understanding the world around us.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};
export default Header;
