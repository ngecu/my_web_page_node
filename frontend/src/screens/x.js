import React, {useState, useEffect, useRef,useMemo,useCallback  } from 'react'


const XScreen = ({ location, history }) => {
    return (

 <div>
 <div className="container" style={{paddingRight: '15px !important', paddingLeft: '15px !important', marginRight: 'auto !important', marginLeft: 'auto !important'}}>
   <div className="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0  position-relative">
     <div className="h-100 tofront">
       <div className="row justify-content-between">
         <div className="col-md-6 pt-6 pb-6 pr-6 align-self-center">
           <p className="text-uppercase font-weight-bold">
             <a className="text-danger" href="#">Stories 
             </a>
           </p>
           <div className="d-flex align-items-center">
             <img className="rounded-circle" src="<?php echo BASE_URL . 'uploads/profileimages/'.$post['published'];  ?>" style={{width: '40px', height: '40px'}} />
             <small className="ml-2">{/*?php echo $post['author']; ?*/} <span className="text-muted d-block">A few hours ago · {/*?php echo getReadTime(html_entity_decode($post['body'])) ?*/} read</span>
             </small>
           </div>
           <h1 className="display-4 secondfont mb-3 font-weight-bold">{/*?php echo $post['title']; ?*/}</h1>
         </div>
         <div className="col-md-6 pr-0">
           <img src="<?php echo BASE_URL . '/uploads/posts/' . $post['image']; ?>" style={{height: '100%'}} />
         </div>
       </div>
     </div>
   </div>
 </div>
 {/* End Header */}
 {/*------------------------------------
MAIN
-------------------------------------*/}
 <div className="container pt-4 pb-4 ">
   <div className="row justify-content-center">
     <div className="col-lg-2 pr-4 mb-4 col-md-12">
       <div className="sticky-top text-center">
         <div className="text-muted">
           Share this
         </div>
         {/*<span class="likebtn-wrapper" data-ef_voting="buzz" data-identifier="item_1"></span>*/}
         <div className="share d-inline-block">
           AddToAny BEGIN 
           <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
             <a className="a2a_dd" href="https://www.addtoany.com/share" />
             <a className="a2a_button_facebook" />
             <a className="a2a_button_twitter" />
           </div>
           AddToAny END 
         </div>
       </div>
     </div>
     <div className="col-md-12 col-lg-8">
       <article className="article-post p-4">
         {/*?php echo html_entity_decode($post['body']); ?*/}
       </article></div>
   </div>
 </div>
 <div className="container" id="comment_section">
   <p className="mb-3">
     Jambo.Thank you for taking your time to read through this post.Take part in the discussions
   </p>
   {/*?php if (isset($_SESSION['user']['username'])) { ?*/}
   <form action="single_post.php?post-slug=<?php echo $post  ?>" method="POST" id="commentForm">
     <div className="form-group">
       <input type="text" className="form-control" name="comment_text" placeholder="Enter your comment here..." requiired />
       <input type="hidden" className="form-control" name="post_slug" defaultValue="<?php echo $_GET['post-slug']  ?>" />
     </div>
     <button type="submit" name="comment" className="submit action-button btn btn-primary">Post </button>
   </form>
   <ul className="posts">
     <div className="bg-white rounded-3 shadow-sm p-4">
       <h4 className="mb-4">{/*?php echo count($counts) ?*/} Comment(s)</h4>
       {/* Comment #1 //*/}
       <div className>
         <div className="py-3">
           {/*?php foreach ($postComments as $comment): ?*/}
           <div className="d-flex comment">
             <img className="rounded-circle comment-img" src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=A" />
             <div className="flex-grow-1 ms-3">
               <div className="mb-1"><a href="#" className="fw-bold link-dark me-1">{/*?php echo $comment['name'] ?*/}</a> 
                 {/*<span class="text-muted text-nowrap">2 days ago</span>*/}
               </div>
               <div className="mb-2">{/*?php echo $comment['message'] ?*/}</div>
             </div>
           </div>
           {/*?php endforeach ?*/}
         </div>
       </div>
     </div>
   </ul>
   {/*?php }else{?*/}
   <div className="alert alert-danger" role="alert">
     Sign in To Comment
   </div>
   {/*?php } ?*/}
 </div>
 <div className="container pt-4 pb-4">
   <h5 className="font-weight-bold spanborder"><span>Read next</span></h5>
   <div className="row">
     <div className="col-lg-6">
       <div className="card border-0 mb-4 box-shadow h-xl-300">
         <div style={{backgroundImage: 'url(<?php echo BASE_URL . "/uploads/posts/" . $randomX["image"]', height: '150px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
         </div>
         <div className="card-body px-0 pb-0 d-flex flex-column align-items-start p-4">
           <h2 className="h4 font-weight-bold">
             <a className="text-dark" href="single_post.php?post-slug=<?php echo $randomX['slug']; ?>">{/*?php echo $randomX['title']; ?*/}
             </a></h2><a className="text-dark" href="single_post.php?post-slug=<?php echo $randomX['slug']; ?>">
           </a><div><a className="text-dark" href="single_post.php?post-slug=<?php echo $randomX['slug']; ?>">
               <small className="d-block" /></a><small className="d-block"><a className="text-muted" href="./author.html">Favid Rick</a></small>
             <small className="text-muted">{/*?php echo timeago($post["created_at"]) ?*/} ·</small>
           </div>
         </div>
       </div>
     </div>
     <div className="col-lg-6">
       <div className="flex-md-row mb-4 box-shadow h-xl-300">
         {/*?php foreach ($randomPosts as $post): ?*/}
         <div className="mb-3 d-flex align-items-center">
           <img src="<?php echo BASE_URL . 'uploads/posts/' . $post['image']; ?>" height={80} />
           <div className="pl-3">
             <h2 className="mb-2 h6 font-weight-bold">
               <a className="text-dark" href="single_post.php?post-slug=<?php echo $post['slug']; ?>">{/*?php echo substr($post['title'],0,60); ?*/}</a>
             </h2>
             <div className="card-text text-muted small">
               {/*?php echo $post['author']; ?*/}
             </div>
             <small className="text-muted">{/*?php echo timeago($post["created_at"]) ?*/} ·</small>
           </div>
         </div>
         {/*?php endforeach ?*/}
       </div>
     </div>
   </div>
 </div>
</div>

)
}

export default XScreen
