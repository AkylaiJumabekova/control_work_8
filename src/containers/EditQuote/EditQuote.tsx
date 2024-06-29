import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosApi from '../../axios-api';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import { Post } from '../../types';

const EditQuote: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState<Post | null>(null);

    useEffect(() => {
        const fetchQuote = async () => {
            const response = await axiosApi.get(`/quotes/${id}.json`);
            setInitialData(response.data);
        };
        fetchQuote();
    }, [id]);

    const handleEdit = async (data: { author: string; text: string; category: string }) => {
        await axiosApi.put(`/quotes/${id}.json`, data);
        navigate('/');
    };

    if (!initialData) {
        return <div>Loading...</div>;
    }

    return <QuoteForm initialData={initialData} onSubmit={handleEdit} />;
};

export default EditQuote;
