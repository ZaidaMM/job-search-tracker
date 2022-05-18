import main from '../assets/images/main-resume.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <h5>
          <span>JST</span> JobSearchTracker
        </h5>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1 className='under'>
            Job <span>Search</span> Tracker
          </h1>
          <hr></hr>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
          <button className='btn btn-hero'>Login/SignUp</button>
        </div>
        <img src={main} alt='job search' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
