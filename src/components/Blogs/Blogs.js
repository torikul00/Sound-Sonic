import React from 'react';
import './Blogs.css'
const Blogs = () => {
  return (
    <div className='blogs'>
      <div className='blog'>
        <h1 className='blog-title'> What is context api in react ?</h1>
        <article>When we created many components for working purpose we need to send data Parent component to child component .
          It's called 'props-drilling'. But props drilling is wired when we need to send data to many child components . Then come <strong>Context Api</strong> to  avoid this wired thing . Context Api like global variable . We can easily pass data without via props . We have to store data in parent state then wrap the all child components with my Context api . then we are easily access the data from all child components .
        </article>
      </div>

      <div className='blog'>
        <h1 className='blog-title'> What is semantic tag ? </h1>
        <article>Semantic tag is basically meaningfull tags . suppose when we need to write 'quotes' we should use <strong>'blockquote'</strong> tag when we need to write paragraph in our html we use to <strong>'p'</strong> tag , for navbar we use <strong>'nav'</strong> tag . Semantic tags make website is more powerfull and meaningfull . Semantic is so important for understanding our Code and more readable . Browser also perform good if we use semantic tags in out HTML . We always try to use Semantic tags and write codes readable and understanding . 
        </article>
      </div>

    </div>
  );
};

export default Blogs;