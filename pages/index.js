// @flow

import Layout from '../components/Layout';
import Header from '../components/Header';
import ItemGridCard from '../components/ItemGridCard';
import ItemGrid from '../components/ItemGrid';

const items = [
  { id: '1', imageSrc: 'https://images.close5.com/v1/items/590d3ebdc726d2906dc298af/image?number=0&width=480&height=480', price: 60, description: 'Nice patio set' },
  { id: '2', imageSrc: 'https://images.close5.com/v1/items/590d3ebdc726d2906dc298af/image?number=0&width=480&height=480', price: 60, description: 'Nice patio set' },
  { id: '3', imageSrc: 'https://images.close5.com/v1/items/590d3ebdc726d2906dc298af/image?number=0&width=480&height=480', price: 60, description: 'Nice patio set' },
  { id: '4', imageSrc: 'https://images.close5.com/v1/items/590d3ebdc726d2906dc298af/image?number=0&width=480&height=480', price: 60, description: 'Nice patio set' },
  { id: '5', imageSrc: 'https://images.close5.com/v1/items/590d3ebdc726d2906dc298af/image?number=0&width=480&height=480', price: 60, description: 'Nice patio set' },
  { id: '6', imageSrc: 'https://images.close5.com/v1/items/590d3ebdc726d2906dc298af/image?number=0&width=480&height=480', price: 60, description: 'Nice patio set' },
  { id: '7', imageSrc: 'https://images.close5.com/v1/items/590d3ebdc726d2906dc298af/image?number=0&width=480&height=480', price: 60, description: 'Nice patio set' },
  { id: '8', imageSrc: 'https://images.close5.com/v1/items/590d3ebdc726d2906dc298af/image?number=0&width=480&height=480', price: 60, description: 'Nice patio set' },
  { id: '9', imageSrc: 'https://images.close5.com/v1/items/590d3ebdc726d2906dc298af/image?number=0&width=480&height=480', price: 60, description: 'Nice patio set' },
  { id: '10', imageSrc: 'https://images.close5.com/v1/items/590d3ebdc726d2906dc298af/image?number=0&width=480&height=480', price: 60, description: 'Nice patio set' },
  { id: '11', imageSrc: 'https://images.close5.com/v1/items/590d3ebdc726d2906dc298af/image?number=0&width=480&height=480', price: 60, description: 'Nice patio set' },
  { id: '12', imageSrc: 'https://images.close5.com/v1/items/590d3ebdc726d2906dc298af/image?number=0&width=480&height=480', price: 60, description: 'Nice patio set' },
];

const HomePage = () => (
  <Layout header={<Header />}>
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
