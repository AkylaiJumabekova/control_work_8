import React from 'react';
import { Post } from '../../types';
import QuoteItem from '../QuoteItem/QuoteItem';

interface Props {
    quotes: Post[];
    onDelete: (id: string) => void;
}

const QuoteList: React.FC<Props> = ({ quotes, onDelete }) => {
    return (
        <div>
            {quotes.map((quote) => (
                <QuoteItem key={quote.id} quote={quote} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default QuoteList;
