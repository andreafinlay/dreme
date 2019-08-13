import React, { useContext } from 'react';
import { UISref } from '@uirouter/react';
import { Entries } from '../../components/Entries';
import { Users } from '../../components/Users';

const Dashboard: React.FC<any> = () => {
    return (
        <div>
            <div className='bg-dreme flex'>
                <header>Zzz</header>
                <UISref to='journal'>
                    <a>Journal</a>
                </UISref>
            </div>
            <Entries />
            <Users />
        </div>
    );
};

export { Dashboard };
