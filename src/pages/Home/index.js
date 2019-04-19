import React, { useEffect } from 'react';
import './styles.scss';

// Components
import Section from '../../components/Section';
import SectionBestLife from '../../components/SectionBestLife';
import ManageUncertainty from '../../components/ManageUncertainty';
import FirstProducts from '../../components/FirstProducts';

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
      <ManageUncertainty />
      <FirstProducts />
    </>
  );
};

export default Home;
