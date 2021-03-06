import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Skills from '../sections/Skills';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Skills />
    <Projects />
    <Footer />
  </Layout>
);

export default IndexPage;
