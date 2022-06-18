import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Card} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'

import Meta from '../components/Meta'
import { LinkContainer } from 'react-router-bootstrap'
import {listPosts} from '../actions/postActions'

import Post from "../components/Post";

const HomeScreen = ({history,match}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listPosts())

    },[dispatch] )

    const postlist = useSelector((state) => state.postList)

    const { loading, error, posts, page, pages } = postlist

    console.log("posts",posts)

    return (
        <>
         {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
            <div className="container">
                
            <section className="recent-posts">
                    <div className="section-title">
                        <h2><span>All Posts</span></h2>
                    </div>



                    <div className="card-columns listrecent row">
                        {posts.map((post) => (

                                <Post post={post}  />



                        ))}


                    </div>
                </section>




            </div>

      )}


        </>
    )
}

export default HomeScreen