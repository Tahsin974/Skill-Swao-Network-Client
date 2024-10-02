const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-[#111111] text-[#DDDDDD] p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Skill-Swap-Network
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
