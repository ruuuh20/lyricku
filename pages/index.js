import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import { useState } from 'react'

import App from '../components/App';

const HomePage = ({songs}) => {
  return <App songs={songs} />;
};

// export const getServerSideProps = async () => {
//   // Fetch songs data from the server-side route or database
//   const response = await fetch(process.env.API_URL + '/api/recentSongs', {
//   cache: 'no-store',
// });
//   const songs = await response.json();

//   return {
//     props: {
//       songs,
//     },
//   };
// };

export const getServerSideProps = async () => {
  try {
    const response = await fetch(process.env.API_URL + '/api/recentSongs', {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const songs = await response.json();

    if (!songs.success) {
      throw new Error(songs.error || 'Unknown error occurred');
    }

    return {
      props: {
        songs: songs.data,
      },
    };
  } catch (error) {
    console.error('Error fetching recent songs:', error);
    return {
      props: {
        songs: [],
        error: error.message,
      },
    };
  }
};

export default HomePage;

