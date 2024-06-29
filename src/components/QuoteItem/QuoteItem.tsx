import React from 'react';
import { Post } from '../../types';
import { Link } from 'react-router-dom';
import axiosApi from '../../axios-api';
import './QuoteItem.css';

interface Props {
    quote: Post;
    onDelete: (id: string) => void;
}

const QuoteItem: React.FC<Props> = ({ quote, onDelete }) => {
    const handleDelete = async () => {
        if (quote.id) {
            await axiosApi.delete(`/quotes/${quote.id}.json`);
            onDelete(quote.id);
        }
    };

    return (
        <div className="card my-3">
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p className="quote-text">"{quote.text}"</p>
                    <footer className="blockquote-footer quote-author">- {quote.author}</footer>
                </blockquote>
                <div className="quote-buttons">
                    <Link to={`/quotes/${quote.id}/edit`} className="btn btn-primary mr-2">Edit</Link>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default QuoteItem;
