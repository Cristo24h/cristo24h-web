'use client'
import { useEffect, useState } from 'react';
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Testimonies from '@/components/testimonies';
import { NavbarSections } from '@/components/types';
import Footer from '@/components/footer';

type VisibleSections = {
  [key in NavbarSections]: any;
};

const sections: VisibleSections = {
  [NavbarSections.TESTIMONIES]: <Testimonies />
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<NavbarSections>(NavbarSections.TESTIMONIES);

  return (
    <main>
      <Header />
      <Navbar
        activeSection={activeSection}
        onChange={(selectedItem: NavbarSections) => setActiveSection(selectedItem)}
      />

      {sections[activeSection]}

      <Footer />
    </main>
  );
}
