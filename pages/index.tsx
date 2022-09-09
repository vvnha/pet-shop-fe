import Hero from '@/components/home/hero';
import { MainLayout } from '@/components/layouts';
import { ProductsSection } from '@/components/product';
import { NextPageWithLayout } from '@/models';
import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Hero />
      <ProductsSection />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
