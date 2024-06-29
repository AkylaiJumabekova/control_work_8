import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosApi from '../../axios-api';
import { Post } from '../../types';
import QuoteList from '../../components/QuoteList/QuoteList';

const CategoryQuotes: React.FC = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const [quotes, setQuotes] = useState<Post[]>([]);

    useEffect(() => {
        const fetchQuotes = async () => {
            const response = await axiosApi.get(`/quotes.json?orderBy="category"&equalTo="${categoryId}"`);
            const quotesData = response.data ? Object.keys(response.data).map(id => ({ id, ...response.data[id] })) : [];
            setQuotes(quotesData);
        };
        fetchQuotes();
    }, [categoryId]);

    const handleDelete = (id: string) => {
        setQuotes(quotes.filter((quote) => quote.id !== id));
    };

    return <QuoteList quotes={quotes} onDelete={handleDelete} />;
};

export default CategoryQuotes;
