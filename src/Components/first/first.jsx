import './first.css';
import one from '../assets/one.ashx';

function First() {
  return (
    <div>
      {/* one img */}
      <a href="https://example.com/project1">
        <img src={one} alt="k-lite" className="oneimg" />
      </a>
    </div>
  );
}

export default First;
