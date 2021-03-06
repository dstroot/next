import React, { useEffect } from 'react';

// Components
import HeroCarousel from '../../components/HeroCarousel';
import SectionBestLife from '../../components/Sections/SectionTwoColumns/SectionBestLife';
import SectionManageUncertainty from '../../components/Sections/SectionTwoColumns/SectionManageUncertainty';
import SectionFirstProduct from '../../components/Sections/SectionOneColumn/SectionFirstProduct';
import SectionDesignWithYouInMind from '../../components/Sections/SectionTwoColumns/SectionDesignWithYouInMind';
import SectionAskUs from '../../components/Sections/SectionTwoColumns/SectionAskUs';
import Footer from '../../components/Footer';

const Home = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT by Pacific Life - What's your next?`;
    window.scrollTo(0, 0);
  });

  return (
    <>
      <HeroCarousel />
      <SectionBestLife />
      <SectionManageUncertainty />
      <SectionFirstProduct />
      <SectionDesignWithYouInMind />
      <SectionAskUs />
      <Footer />
    </>
  );
};

export default Home;
