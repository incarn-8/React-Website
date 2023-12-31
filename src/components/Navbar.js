import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import { RewardProgramButton } from './RewardProgramButton';


function NavBar() {
  const [click, setClick] = useState(false);
  const [icon, setIcon] = useState(faBars);
  const [rewardbutton, setRewardProgramButton] = useState(true);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setRewardProgramButton(false);
    } else {
      setRewardProgramButton(true);
    }
  };

  useEffect(() => {
    showButton();
  },[])

  window.addEventListener('resize', showButton);

  const toggleMenu = () => {
    setClick(!click);
    setIcon(icon === faBars ? faXmark : faBars);
  };

  const [scrollData,setScrollData] = useState({
    y: 0,
    lastY: 0
  })

  const[showNav,setShowNav] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setScrollData(prevState => {
        return {
          y:window.scrollY,
          lastY: prevState.y
        }
      })
    }

   window.addEventListener('scroll', handleScroll)

   return() => window.removeEventListener('scroll', handleScroll)

  }, [])

  useEffect(() => {
    console.log(scrollData);

    if(scrollData.y > 150){
      setShowNav(true);
    } else{
      setShowNav(false);
    }
  }, [scrollData])

  return (
    <>
      <nav className={showNav ? 'navBar hideNav' : 'navbar hover'}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Evora <FontAwesomeIcon icon={faHippo} size="lg" />
          </Link>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fragrances"
                className="nav-links" onClick={closeMobileMenu}>
                Fragrances
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/jewlery" className="nav-links" onClick={closeMobileMenu}>
                Jewlery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reward-Program" className="nav-links-mobile" onClick={closeMobileMenu}>
                Reward Program
              </Link>
            </li>
          </ul>
          {rewardbutton && <RewardProgramButton buttonStyle='btn--outline'>Sign Up</RewardProgramButton>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
