import React, { useEffect } from 'react';
import './styles.scss';

// Components
import Section from '../../components/Section';
import SectionBestLife from '../../components/SectionBestLife';
import SectionManageUncertainty from '../../components/SectionManageUncertainty';
import SectionFirstProduct from '../../components/SectionFirstProduct';

const Home = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • Home`;
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Section />
      <SectionBestLife />
      <SectionManageUncertainty />
      <SectionFirstProduct />
    </>
  );
};

export default Home;
