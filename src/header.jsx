import "./css/header.css";

function Header() {
  return (
    <header id="home-header">
      <div id="logo">
        <a href="">
          <img src="/images/logo.png" alt="" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <li>
              <a href="/reservation.html" target="_blank">
                Online Reservation
              </a>
            </li>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
