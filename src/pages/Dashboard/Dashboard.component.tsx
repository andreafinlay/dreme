import React, { useContext } from 'react';
import { UISref } from '@uirouter/react';
import { RootContext } from '../..';
import { Entries } from '../../components/Entries';
import { Users } from '../../components/Users';

const Dashboard: React.FC<any> = () => {
    let { authBody } = useContext(RootContext);

    return (
        <div>
            <div className='bg-dreme flex'>
                <header>Zzz</header>
                {authBody && <div>{authBody.name}</div>}
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
