import './section2.css';
import s11 from '../assets/s11.ashx';
import s12 from '../assets/s12.ashx';
import s13 from '../assets/s13.ashx';


function Section2() {
  return (
    <>

      {/* 3 images in line */}
      <div className="three">
        <h2>Product Portfolio</h2>
        <div className="threeimg">
          <a href="https://example.com/project1">
            <img src={s11} alt="img1" className="thimg" />
          </a>
          <a href="https://example.com/project1">
            <img src= {s12} alt="img2" className="thimg" />
          </a>
          <a href="https://example.com/project1">
            <img src={s13} alt="img3" className="thimg" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Section2;
