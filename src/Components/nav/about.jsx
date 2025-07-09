import './about.css'; 

function About() {
  return (
    <div className="aboutus">
      <h2>About Us</h2>
      <div className="ifr">
        <iframe
          width="1060"
          height="515"
          src="https://www.youtube.com/embed/5c-Iv60MzNk?si=WX84jQtvYJPzx47c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="para">
        <p className="para1">
          In 1977, a dream was realized - to manufacture high-quality luminaires and Architectural lighting poles with a deep-rooted pursuit for excellence.
          With this vision, K-LITE was born. Every idea begins with an objective to achieve. Ours was to put a new spin on lighting products, keeping quality,
          sustainability, and energy efficiency at the core of everything we do. A registered trademark in India, UK, and Europe, K-LITE works with the mission to add tangible value to the world of lighting.
        </p>
        <br />

        <p className="para1">
          To consolidate our commitment for excellence, we perform all our processes internally - from design and development to production and assembly,
          and we take great pride in being the manufacturer of choice for all lighting need.
        </p>
        <br />

        <p className="para1"><i>Architectural Luminaires</i> Inspired by You</p>
        <p className="para1">
          Guided by a culture of continuous improvement and customer focus, our collection of finely crafted lighting is made using the
          highest quality materials. Over the years, our innovative architectural luminaires have lit several commercial, retail, and
          institutional establishments, and we could not be happier. As we continue to partner with architects, lighting designers and
          electrical contractors, our focus lies in bringing life to their lighting ideas. With seven state-of-the-art manufacturing
          plants, located in Chennai and Bhopal in India, we deliver high-quality architectural lighting solutions worldwide.
          And we do this with the support of over 750 passionately driven employees. A strong team. Incomparable performance.
          Client-centric approach defines us. This is what makes K-LITE an industry leader that aims to deliver nothing but the best.
        </p>
        <br />

        <p className="para1">Your Go-To Resource for <i>Architectural Lighting</i></p>
        <p className="para1">
          With a growing global footprint, K-LITE has successfully grown into one of India’s leading manufacturers of architectural
          lighting poles & luminaires, be it contemporary or decorative. And we have done this by capitalizing on our industry
          knowledge and combining it with advanced optical engineering. Building the foundation of a solid interplay between architecture
          and luminaire, all our innovations and designs are shaped to enrich people’s lives. Lighting refined.
        </p>
      </div>
    </div>
  );
}

export default About;
