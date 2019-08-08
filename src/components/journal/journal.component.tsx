import React, { Component } from 'react';
import { UISref } from '@uirouter/react';

class Journal extends Component {
    render() {
        return (
            <div className='bg-red'>
                <header>Journal</header>
                <UISref to='dashboard'>
                    <a>Dashboard</a>
                </UISref>
            </div>
        );
    }
}

export default Journal;
