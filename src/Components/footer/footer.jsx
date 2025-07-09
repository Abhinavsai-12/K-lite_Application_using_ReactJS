import './footer.css';

function Footer() {
  return (
    <>
      {/* Footer */}
      <footer id="footer">
            <div style={{ fontSize: '14px' }} className="footer1">
              K-LITE 2025 | All Rights Reserved by{' '}
              <a href="https://brvteck.com/">BRV Technologies Pvt Limited</a>
            </div>

            <div className="social-icons">
              <a href="https://brvteck.com/"><i className="fab fa-facebook-f"></i></a>
              <a href="https://brvteck.com/"><i className="fab fa-twitter"></i></a>
              <a href="https://brvteck.com/"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://brvteck.com/"><i className="fab fa-youtube"></i></a>
              <a href="https://brvteck.com/"><i className="fab fa-instagram"></i></a>
              <a href="https://brvteck.com/"><i className="fab fa-pinterest"></i></a>
              <a href="https://brvteck.com/"><i className="fas fa-map-marker-alt"></i></a>
            </div>
      </footer>
    </>
  );
}

export default Footer;
