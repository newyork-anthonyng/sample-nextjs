// @flow

import Layout from '../components/Layout';
import ItemGridCard from '../components/ItemGridCard';
import ItemGrid from '../components/ItemGrid';

const items = [
  { id: `${parseInt(Math.random() * 1000)}`, imageSrc: 'https://images.close5.com/v1/items/590d3ebdc726d2906dc298af/image?number=0&width=480&height=480', price: 60, description: 'Nice patio set' },
  { id: `${parseInt(Math.random() * 1000)}`, imageSrc: 'https://images.close5.com/v1/items/590d3ebdc726d2906dc298af/image?number=0&width=480&height=480', price: 60, description: 'Nice patio set' },
  { id: `${parseInt(Math.random() * 1000)}`, imageSrc: 'https://images.close5.com/v1/items/590d3ebdc726d2906dc298af/image?number=0&width=480&height=480', price: 60, description: 'Nice patio set' },
  { id: `${parseInt(Math.random() * 1000)}`, imageSrc: 'https://images.close5.com/v1/items/590d3ebdc726d2906dc298af/image?number=0&width=480&height=480', price: 60, description: 'Nice patio set' },
];

const HomePage = () => (
  <Layout>
    <h1>Home Page</h1>
    <ItemGrid>
      {items.map((item, i) => (
        <ItemGridCard
          key={i}
          {...item}
        />
      ))}
    </ItemGrid>
  </Layout>
);

export default HomePage;
