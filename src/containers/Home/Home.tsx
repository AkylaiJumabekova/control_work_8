import React, { useEffect, useState } from 'react';
import axiosApi from '../../axios-api';
import { Post } from '../../types';
import QuoteList from '../../components/QuoteList/QuoteList';

const Home: React.FC = () => {
  const [quotes, setQuotes] = useState<Post[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await axiosApi.get('/quotes.json');
      const quotesData = response.data ? Object.keys(response.data).map(id => ({ id, ...response.data[id] })) : [];
      setQuotes(quotesData);
    };
    fetchQuotes();
  }, []);

  const handleDelete = (id: string) => {
    setQuotes(quotes.filter((quote) => quote.id !== id));
  };

  return <QuoteList quotes={quotes} onDelete={handleDelete} />;
};

export default Home;
