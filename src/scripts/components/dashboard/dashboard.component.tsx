import React, { Component } from 'react';
import { UISref } from '@uirouter/react';

class Dashboard extends Component {
    render() {
        return (
            <div className='bg-dreme'>
                <header>Zzz</header>
                <UISref to='journal'>
                    <a>Journal</a>
                </UISref>
            </div>
        );
    }
}

export default Dashboard;
