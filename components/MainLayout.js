import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto px-8'>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
