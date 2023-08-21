import FirstMiddle from './FirstMiddle';
import FirstSection from './FirstSection';
import Footer from './Footer';
import LastSection from './LastSection';
import MixContainer from './MixContainer';
import Navbar from './Navbar';
import SecondMiddle from './SecondMiddle';
import Version1 from '../Third-Page/Version1-Page3';

function FirstVersion() {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <FirstMiddle />
      <SecondMiddle />
      <MixContainer />
      <LastSection />
      <Footer />
      <Version1 />
    </div>
  );
}

export default FirstVersion;
