import "../nav/nav.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span>Trung Tran</span>
      </div>
      <div className="navbar-right">
        <span className="navbar-text">Home</span>
        <span className="navbar-text">About</span>
        <span className="navbar-text">Skills</span>
        <span className="navbar-text">Projects</span>
        <span className="navbar-text">Contacts</span>
      </div>
    </div>
  );
}
