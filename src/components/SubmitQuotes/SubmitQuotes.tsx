import React, { useState } from 'react';
import axiosApi from '../../axios-api';
import { useNavigate } from 'react-router-dom';

const SubmitQuote: React.FC = () => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [category, setCategory] = useState('star-wars');
    const navigate = useNavigate();

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        await axiosApi.post('/quotes.json', { author, text, category });
        navigate('/');
    };

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

export default SubmitQuote;
