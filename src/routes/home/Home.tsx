import styles from './home.module.css'
import Banner from '../../components/banner/Banner'
import Filter from '../../components/filter/Filter'
import ExtraInfoBanner from '../../components/extraInfoBanner/ExtraInfoBanner'
import ProductCard from '../../components/productCard/ProductCard'
import Box from '@mui/material/Box'
import data from '../../data/data'
import { useState } from 'react'

const Home: React.FC = () => {
  const [filter, setFilter] = useState<string[]>(['Todas']);

  const filteredProducts = data.filter(product => {
    if (filter.includes('Todas') || filter.length === 0) return true;
    if (filter.includes('otros') && product.type !== 'pollo' && product.type !== 'cerdo' && product.type !== 'res' && product.type !== 'charcuteria') return true;
    return filter.includes(product.type);
  });

  return (
    <Box className={styles.homeContainer}>
      <Box className={styles.bannerBox}>
        <Banner />
      </Box>
      <Box className={styles.extraInfoBox}>
        <ExtraInfoBanner />
      </Box>
      <Box className={styles.filterBox}>
        <Filter setFilter={setFilter} />
      </Box>
      <Box className={styles.cardGrid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Box>
    </Box>
  )
}

export default Home;