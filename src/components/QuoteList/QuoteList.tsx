import React from 'react';
import { Post } from '../../types';
import { QuoteItem } from '../QuoteItem/QuoteItem';

interface Props {
    quotes: Post[];
}

export const QuoteList: React.FC<Props> = ({ quotes }) => {
    return (
        <div>
            {quotes.map((quote) => (
                <QuoteItem key={quote.id} quote={quote} />
            ))}
        </div>
    );
};