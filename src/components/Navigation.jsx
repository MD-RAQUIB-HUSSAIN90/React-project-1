const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png"  alt="logo"   className="btn"/>
        </div>
        <ul>
          <li href="#" className="btn">MENU</li>
          <li href="#"  className="btn">LOCATION</li>
          <li href="#"  className="btn">ABOUT</li>
          <li href="#"  className="btn">CONTACT</li>
        </ul>
        <button className="btn">Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
