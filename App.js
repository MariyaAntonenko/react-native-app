import React from 'react';
import {Header} from './components/Header';
import {StyledSafeAreaView} from './components/styledComponents/Block';
import {ArticlesList} from './components/ArticlesList';
import {Footer} from './components/Footer';

const articlesData = [
  {
    id: 1,
    article: 'CG0934',
    color: 'White',
    size: 'XS',
    type: 'Longsleeve Women X',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 2,
    article: 'AC8435',
    color: 'White',
    size: 'S',
    type: 'Longsleeve Women Y',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 3,
    article: 'CG0934',
    color: 'White',
    size: 'Xl',
    type: 'Longsleeve Women Z',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 4,
    article: 'AC8435',
    color: 'White',
    size: 'S',
    type: 'Longsleeve Women Y',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 5,
    article: 'CG0934',
    color: 'White',
    size: 'Xl',
    type: 'Longsleeve Women Z',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 6,
    article: 'AC8435',
    color: 'White',
    size: 'S',
    type: 'Longsleeve Women Y',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 7,
    article: 'CG0934',
    color: 'White',
    size: 'Xl',
    type: 'Longsleeve Women Z',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 8,
    article: 'AC8435',
    color: 'White',
    size: 'S',
    type: 'Longsleeve Women Y',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
  {
    id: 9,
    article: 'CG0934',
    color: 'White',
    size: 'Xl',
    type: 'Longsleeve Women Z',
    img: './assets/images/articlesImg.png',
    amount: 3,
  },
];

const cartItemAmount = articlesData
  .map(el => el.amount)
  .reduce((el, acc) => el + acc);

const App = () => {
  return (
    <StyledSafeAreaView bg={'white'} flex={1}>
      <Header amount={cartItemAmount} />
      <ArticlesList articlesData={articlesData} />
      <Footer />
    </StyledSafeAreaView>
  );
};

export default App;
