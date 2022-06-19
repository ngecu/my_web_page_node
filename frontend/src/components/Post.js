import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import '../screens/CSS/mediumish.css';
import { Markup } from 'interweave';
import  readingTime  from 'reading-time';

const Post = ({ post }) => {
  const x = post.body;


const stats = readingTime(x);
  return (
    
    <Card className="col-md-2 col-lg-3 col-12">
    <Link to={`/post/${post._id}`}>
  <Card.Img variant='top' src={post.image} style={{height:"200px"}} />
  </Link>
  <Card.Body>
    <Card.Title>{post.title.substring(0,50)}...</Card.Title>
    <Card.Text>
    <Markup content={x.substring(0,20 )} />
     
    </Card.Text>
    <div className="metafooter">
					<div className="wrapfooter">
						<span className="meta-footer-thumb">
						<Card.Img className="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal"/>
						</span>
						<span className="author-meta">
						<span className="post-name">{post.user.name}</span><br/>
						<span className="post-date">{post.created_at}</span><span class="dot"></span><span class="post-read">{ Math.ceil(stats.minutes)} minutes read</span>
						</span>
						<span class="post-read-more"><a href="post.html" title="Read Story"><svg class="svgIcon-use" width="25" height="25" viewbox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd"></path></svg></a></span>
					</div>
				</div>
  </Card.Body>
</Card>

  )
}

export default Post
