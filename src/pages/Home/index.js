import React, { useEffect } from 'react';
import './styles.scss';

// Components
import Section from '../../components/Sections/SectionHero/SectionHero';
import SectionBestLife from '../../components/Sections/SectionTwoColumns/SectionBestLife';
import SectionManageUncertainty from '../../components/Sections/SectionTwoColumns/SectionManageUncertainty';
import SectionFirstProduct from '../../components/Sections/SectionOneColumn/SectionFirstProduct';
import SectionDesignWithYouInMind from '../../components/Sections/SectionTwoColumns/SectionDesignWithYouInMind';
import SectionAskUs from '../../components/Sections/SectionTwoColumns';

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
