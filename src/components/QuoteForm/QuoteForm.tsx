import React, { useState } from 'react';
import './QuoteForm.css';

interface QuoteFormProps {
    initialData?: {
        author: string;
        text: string;
        category: string;
    };
    onSubmit: (data: { author: string; text: string; category: string }) => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ initialData, onSubmit }) => {
    const [author, setAuthor] = useState(initialData?.author || '');
    const [text, setText] = useState(initialData?.text || '');
    const [category, setCategory] = useState(initialData?.category || 'star-wars');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit({ author, text, category });
    };

    return (
        <form className="quote-form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select
                    className="form-select"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
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

export default QuoteForm;
