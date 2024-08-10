import './App.css';
import CaseStudies from './components/CaseStudies/CaseStudies';
import Community from './components/Community/Community';
import Domains from './components/Domains/Domains';
import Featured from './components/Featured/Featured';
import FloatingNavBar from './components/FloatingNavBar/FloatingNavBar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import JobHunters from './components/JobHunters/JobHunters';
import KickStart from './components/KickStart/KickStart';
import NavBar from './components/NavBar/NavBar';
import QuickStartGuide from './components/QuickStartGuide/QuickStartGuide';
import Recruiters from './components/Recruiters/Recruiters';
import Technology from './components/Technology/Technology';

function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <FloatingNavBar/>
      <KickStart/>
      <JobHunters/>
      <QuickStartGuide/>
      <Domains/>
      <CaseStudies/>
      <Recruiters/>
      <Featured/>
      <Community/>
      <Footer/>
    </div>
  );
}
export default App;