import React, { Component } from 'react'
import TableUserList from './TableUserList'
import UserProfile from './UserProfile'

export default class BTFormSV extends Component {
    render() {
        return (
            <div className="container">
                <UserProfile />
                <TableUserList />
            </div>
        )
    }
}
