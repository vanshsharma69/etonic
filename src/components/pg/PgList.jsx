import React from 'react';
import PgCard from './PgCard';

const pgData = [
  {
    title: 'Sunshine PG for Girls',
    location: 'Noida Sector 62',
    price: '₹5,000/mo',
    image: 'https://imgs.search.brave.com/mSa003y9KeA5Kmxpyc7QmTWg0FhkTpz-6KbrIJIEkZc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yb29r/Lmd1bWxldC5pby91/cGxvYWRzL2NlbnRl/ci9jb3Zlcl9waG90/by81YmE4ZTUxOTY2/YTJmNjIxOTVmNzE4/ZjYvanBlZ19vcHRp/bWl6ZXJfNl9fXzIw/MjRfMDdfMDlUMTY0/MDU0LjQ4Mi5qcGc_/Y29tcHJlc3M9dHJ1/ZSZmb3JtYXQ9YXV0/byZxdWFsaXR5PTc1/JmRwcj1hdXRvJmg9/YXV0byZ3PTEwMCUm/YXI9MQ',
  },
  {
    title: 'Elite Boys PG',
    location: 'Bangalore Indiranagar',
    price: '₹7,000/mo',
    image: 'https://imgs.search.brave.com/EFB-poTS1xRbUnvPGr-vqV4mqmYOcLSLjPeAtkMAwVA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDIx/L1NlcC8yMy9QaG90/b19oNDAwX3c1NDAv/R1IyLTIzNjcwMy0x/MTE2MTAzXzQwMF81/NDAuanBn',
  },
  {
    title: 'Comfort Stay PG',
    location: 'Pune Hinjewadi',
    price: '₹6,500/mo',
    image: 'https://imgs.search.brave.com/qO3ULvrabHZAcsaMwIv7-N1OYFgfoQ-AGFH1vnRPTvU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDIx/L1NlcC8yMy9QaG90/b19oNDAwX3c1NDAv/R1IyLTIzNjcwNy0x/MTE2MTIzXzQwMF81/NDAuanBn',
  },
];

const PgList = () => {
  return (
    <section className="py-14 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Browse Popular PGs</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {pgData.map((pg, index) => (
          <PgCard key={index} {...pg} />
        ))}
      </div>
    </section>
  );
};

export default PgList;
