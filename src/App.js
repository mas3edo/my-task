
import './App.css';
import Header from './header/Headr';
import Nav from './navbar/Nav';
import Section from './sectoin/Section';
import Categories from './categories/Categories';
import ProductsSection from './cards/Cards';
import TestimonialSection from './Comments/Comments';
import Footer from './footer/footer';


function App() {
  return (
    <>
      <Header />
      {/* ...existing app content... */}
      <Nav />
      <Section />
      <Categories />
      <ProductsSection />
      <TestimonialSection />
      <Footer />
    </>
  );
}

export default App;
