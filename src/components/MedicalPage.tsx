import React from 'react';
import MedicalServices from './MedicalServices';

const MedicalPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MedicalServices />
    </>
  );
};

export default MedicalPage;