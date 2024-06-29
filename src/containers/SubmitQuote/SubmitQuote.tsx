import { useState } from 'react';
import axiosApi from '../../axios-api';
import { useNavigate } from 'react-router-dom';

export const SubmitQuote = () => {
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
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="star-wars">Star Wars</option>
                <option value="famous-people">Famous People</option>
                <option value="saying">Saying</option>
                <option value="humour">Humour</option>
                <option value="motivational">Motivational</option>
            </select>
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
                required
            />
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Quote text"
                required
            />
            <button type="submit">Save</button>
        </form>
    );
};
