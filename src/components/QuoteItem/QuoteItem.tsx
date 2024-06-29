import React from 'react';
import { Post } from '../../types';
import axiosApi from '../../axios-api';

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
                    <p>"{quote.text}"</p>
                    <footer className="blockquote-footer">- {quote.author}</footer>
                </blockquote>
                <button className="btn btn-primary mr-2">Edit</button>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default QuoteItem;
