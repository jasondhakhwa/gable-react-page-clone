import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner';
import CategoryArea from './Components/CategoryArea';
import AccountArea from './Components/AccountArea';
import RecentJobs from './Components/RecentJobs';
import PortalArea from './Components/PortalArea';
import PopularCompanies from './Components/PopularCompanies';
import PopularArea from './Components/PopularArea';
import FeaturedProfile from './Components/FeaturedProfile';
import AppArea from './Components/AppArea';
import LatestBlog from './Components/LatestBlog';
import NewsLetter from './Components/NewsLetter';
import Footer from './Components/Footer';


function App() {

  return (

    <div className="App">
      {/* Navbar Hamburger Banauna baki cha */}
      <Navbar />
      {/* This is complete */}
      <Banner />
      {/* Jhimimili milauna baki cha */}
      <CategoryArea />
      {/* This is complete*/}
      <RecentJobs />
      {/* This is complete */}
      <AccountArea />
      <PortalArea />
      {/* This is complete */}
      <PopularCompanies />
      <PopularArea />
      <FeaturedProfile />
      {/* This is complete */}
      <AppArea />
      {/* This is complete */}
      <LatestBlog />
      <Footer />
    </div>
  );
}

export default App;
