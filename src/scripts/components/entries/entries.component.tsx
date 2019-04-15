import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export const GET_POSTS = gql`
    query GetPosts {
        posts {
            id
            author
            body
        }
    }
`;

class Entries extends Component {
    render() {
        return (
            <Query query={GET_POSTS}>
                {({ loading, data }) =>
                    !loading && (
                        <table>
                            <thead>
                                <tr>
                                    <th>Author</th>
                                    <th>Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.posts.map(post => (
                                    <tr key={post.id}>
                                        <td>{post.author}</td>
                                        <td>{post.body}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                }
            </Query>
        );
    }
}

export default Entries;