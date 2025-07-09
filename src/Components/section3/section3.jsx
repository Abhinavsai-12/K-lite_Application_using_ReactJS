import './section3.css';
import wn1 from '../assets/wn1.ashx';
import wn2 from '../assets/wn2.ashx';
import wn3 from '../assets/wn3.ashx';
import wn4 from '../assets/wn4.ashx';
import wn5 from '../assets/wn5.ashx';


function Section3() {
  return (
    <>
        {/* five images in line */}
     <div class="five">
        <h2>What's new</h2>
        <div class="fiveimg">

            <a href="https://example.com/project1">
                <img src={wn1} alt="img1" className="fimg"/>
            </a>

            <a href="https://example.com/project1">
                <img src={wn2} alt="img" className="fimg"/>
            </a>

            <a href="https://example.com/project1">
                <img src={wn3} alt="img2" className="fimg"/>
            </a>

            <a href="https://example.com/project1">
                <img src={wn4} alt="img3" className="fimg"/>
            </a>

            <a href="https://example.com/project1">
                <img src={wn5} alt="img4" className="fimg"/>
            </a>
        </div>
     </div>


    </>
  );
}

export default Section3;
