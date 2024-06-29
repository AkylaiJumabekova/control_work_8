import React from 'react';
import { useNavigate } from 'react-router-dom';
import axiosApi from '../../axios-api';
import QuoteForm from '../../components/QuoteForm/QuoteForm';

const SubmitQuote: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = async (data: { author: string; text: string; category: string }) => {
        await axiosApi.post('/quotes.json', data);
        navigate('/');
    };

    return <QuoteForm onSubmit={handleSubmit} />;
};

export default SubmitQuote;
