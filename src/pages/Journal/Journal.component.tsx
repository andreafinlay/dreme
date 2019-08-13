import React from 'react';
import { UISref } from '@uirouter/react';

const Journal: React.FC<any> = () => {
    return (
        <div className='bg-red'>
            <header>Journal</header>
            <UISref to='dashboard'>
                <a>Dashboard</a>
            </UISref>
        </div>
    );
};

export { Journal };
