import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosApi from '../../axios-api';
import { Post } from '../../types';

const EditQuote: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [quote, setQuote] = useState<Post | null>(null);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchQuote = async () => {
            const response = await axiosApi.get(`/quotes/${id}.json`);
            const data = response.data;
            setQuote(data);
            setAuthor(data.author);
            setText(data.text);
            setCategory(data.category);
        };

        fetchQuote();
    }, [id]);

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        await axiosApi.put(`/quotes/${id}.json`, { author, text, category });
        navigate('/');
    };

    if (!quote) {
        return <div>Loading...</div>;
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select className="form-select" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="star-wars">Star Wars</option>
                    <option value="famous-people">Famous People</option>
                    <option value="saying">Saying</option>
                    <option value="humour">Humour</option>
                    <option value="motivational">Motivational</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input
                    type="text"
                    className="form-control"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Quote text</label>
                <textarea
                    className="form-control"
                    id="text"
                    rows={3}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Quote text"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    );
};

export default EditQuote;
