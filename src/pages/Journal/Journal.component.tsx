import React from 'react';
import { Link } from 'react-router-dom';
import { EntriesList } from '../../components/Entries/EntriesList';

const Journal: React.FC<any> = () => {
    return (
        <>
            <div className='bg-red'>
                <header>Journal</header>
            </div>
            <Link to='/'>Dashboard</Link>
            <EntriesList />
        </>
    );
};

export { Journal };
