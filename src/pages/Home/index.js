import React, { useEffect } from 'react';
import './styles.scss';

// Components
import Section from '../../components/Sections/SectionHero';
import SectionBestLife from '../../components/Sections/SectionBestLife';
import SectionManageUncertainty from '../../components/Sections/SectionManageUncertainty';
import SectionFirstProduct from '../../components/Sections/SectionFirstProduct';
import SectionDesignWithYouInMind from '../../components/Sections/SectionDesignWithYouInMind';
import SectionAskUs from '../../components/Sections/SectionAskUs';

const Home = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • Home`;
    // window.scrollTo(0, 0);
  });

  return (
    <>
      <Section />
      <SectionBestLife />
      <SectionManageUncertainty />
      <SectionFirstProduct />
      <SectionDesignWithYouInMind />
      <SectionAskUs />
    </>
  );
};

export default Home;
