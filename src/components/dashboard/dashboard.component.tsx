import React, { Component } from 'react';
import { UISref } from '@uirouter/react';
import Entries from '../entries/entries.component';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className='bg-dreme'>
                    <header>Zzz</header>
                    <UISref to='journal'>
                        <a>Journal</a>
                    </UISref>
                </div>
                <Entries />
            </div>
        );
    }
}

export default Dashboard;
