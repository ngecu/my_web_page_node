import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Markup } from 'interweave';
import {Img, Col,Row,Card} from "react-bootstrap";
import {getTagsAction} from "../actions/tagActions";
import '../screens/CSS/mediumish.css';


const Author = ({author,post} ) => {
        console.log("a",author?.name)
    return (


        <Row className=" post-top-meta">
            <Col md={6}>

            <div className="metafooter">
					<div className="wrapfooter">
						<span className="meta-footer-thumb">
						<Card.Img className="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal"/>
						</span>
						<span className="author-meta">
						<span className="post-name"><a href="author.html">{author?.name}</a></span><br/>
						<span className="post-date">{post.created_at}</span><span class="dot"></span><span class="post-read">6 min read</span>
						</span>
						<span class="post-read-more"><a href="post.html" title="Read Story"><svg class="svgIcon-use" width="25" height="25" viewbox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd"></path></svg></a></span>
					</div>
				</div>
            </Col>
            <Col md={6} className='d-flex'>
                    <div>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div>
                    <i class="fa-brands fa-facebook"></i>
                    </div>

                    <div>
                    <i class="fa-brands fa-linkedin"></i>
                    </div>
                   
                </Col>

        </Row>



    )
}

export default Author
