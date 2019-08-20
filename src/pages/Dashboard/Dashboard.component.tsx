import React from 'react';
import { UISref } from '@uirouter/react';
import { Users } from '../../components/Users';

const Dashboard: React.FC<any> = () => {
    return (
        <>
            <div className='bg-dreme flex'>
                <header>Zzz</header>
                <UISref to='journal'>
                    <a>Journal</a>
                </UISref>
            </div>
            <Users />
        </>
    );
};

export { Dashboard };
