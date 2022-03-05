import React from "react";
import "./Posts.css";
//const Posts = () => {
// const Posts = ({ post: { title, body,imgUrl, author }, index }) => {
const Posts = () => {
  const blogPosts = [
    {
      title: "Greatest Fit Ever",
      body: `The Tailor Thrift team's customer service is second to none!!!`,
      author: "#1 Customer",
    },
    {
      title: "Seemless Website",
      body: `Marc's styling helped me navigate this tasteful site with ease`,
      author: "New York Times Blog",
    },
    {
      title: "User Friendly",
      body: `Amazon needs to take notes from this website about UX/UI`,
      author: "Sir Bezos the 3rd",
    },
    {
      title: "Super Secure",
      body: `I sleep well at night knowing my information is safe with the Tailor Thrift Team and their secure database.`,
      author: "Bill Gates",
    },
  ];

  return (
    <div className="postsContainer row " >
      {blogPosts.map((post, index) => (
        <div className=" postCard col">
          <div class='' key={index} index={index}>
            <p class='postTitle'>{post.title}</p>
            <p class='postText'>{post.body}</p>
            <p class='postAuthor'>-{post.author}</p>
          </div>
        </div>

      ))}
    </div>
  );
};

// export default Posts;
//     <div className="post-container">
//       <h1 className="heading">{title}</h1>
//       {/* <img className="image" src={imgUrl} alt="post" /> */}
//       <p>{body}</p>
//       <div className="info">
//         <h4>Written by: {author}</h4>
//       </div>
//     </div>
//   )
// };

export default Posts;