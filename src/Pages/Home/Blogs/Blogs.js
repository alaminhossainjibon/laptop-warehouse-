import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container my-blogs mt-5'>
            <div className='container md-text-2xl'>
                <h2 className='text-center text-light'>My blogs!!!</h2>
                <hr className='text-light' />
                <h2 className='text-light'>Question #1.</h2>
                <h3 className='text-light'>What is the difference between javascript and nodejs ?</h3>
                <h4 className='text-light'><u>Answer:</u></h4>
                <h5 className='text-light'><u>JavaScript:</u></h5>
                <p className='text-light'>
                    JavaScript is a programming language. It runs on any web browser with a proper browser engine.
                    <br />
                    JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).
                </p>
                <h5 className='text-light'><u>Node JS</u></h5>
                <p className='text-light'>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</p>
                <hr className='text-light' />
                <h2 className='text-light'>Question #2.</h2>
                <h3 className='text-light'>What is the differences between sql and nosql databases?</h3>
                <h4 className='text-light'><u>Answer:</u></h4>
                <h5 className='text-light'><u>SQL:</u></h5>
                <p className='text-light'>
                    *SQL databases are relational
                    <br />
                    *SQL databases use structured query language and have a predefined schema.
                    <br />
                    *SQL databases are vertically scalable,
                    <br />
                    *SQL databases are table-based,
                    <br />
                    *SQL databases are better for multi-row transactions
                </p>
                <h5 className='text-light'><u>NOSQL:</u></h5>
                <p className='text-light'>
                    *NoSQL databases are non-relational.
                    <br />
                    *NoSQL databases have dynamic schemas for unstructured data.
                    <br />
                    * while NoSQL databases are horizontally scalable.
                    <br />
                    *while NoSQL databases are document, key-value, graph, or wide-column stores
                    <br />
                    *while NoSQL is better for unstructured data like documents or JSON.
                </p>
                <hr className='text-light' />
                <h2 className='text-light'>Question #3.</h2>
                <h3 className='text-light'>What is the purpose of JWT and how does it work?</h3>
                <h4 className='text-light'><u>Answer:</u></h4>
                <h5 className='text-light'><u>JWT:</u></h5>
                <p className='text-light'>
                    JWT, or JSON Web Token, is an open value that is used to share security information between two parties - a client and a server. Each JWT contains an encoded JSON object, which contains a set of claims. JWTs are signed using a cryptographic algorithm to ensure that claims cannot be changed after the token is issued
                </p>
            </div>
        </div>
    );
};

export default Blogs;