import React from 'react';
import { Post } from '../../types';

interface Props {
    quote: Post;
}


export const QuoteItem: React.FC<Props> = ({ quote }) => {
    return (
        <div className="card my-3">
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>"{quote.text}"</p>
                    <footer className="blockquote-footer">- {quote.author}</footer>
                </blockquote>
                <button className="btn btn-primary mr-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
};