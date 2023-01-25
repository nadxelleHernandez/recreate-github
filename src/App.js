import NavigationBar from "./components/NavigationBar";
import "./App.css";
import SearchBar from "./components/SearchBar";
import LoginControls from "./components/LoginControls";
import HeroSection from "./components/HeroSection";
import NewsletterForm from "./components/NewsletterForm";
import StatsBar from "./components/StatsBar";

function App() {
  return (
    <main className="main">
      <header>
        <NavigationBar></NavigationBar>
        <SearchBar></SearchBar>
        <LoginControls></LoginControls>
        <HeroSection></HeroSection>
        <NewsletterForm></NewsletterForm>
        <StatsBar></StatsBar>
      </header>
    </main>
  );
}

export default App;
