import React, { Component } from 'react'

class BlogPreviews extends Component {
  state = {
    blogPreviews: ''
  }


  render() {
    return(
      <div>
        <article>
          <h2>React Native</h2>
          <p>By J.Sinkler</p>
          <div>
            <p>
Use react components to make an app for a phone with ios or android. It is not html. It uses native components. You can't use div. You instead use things like View or Text.
            </p>
            <p>
It is not a webview.So no html but the classes look very similar. Just like we have npm or npx create-reaact-app for the web. There is a starter package on the React-web-site. You will still use javascript, then it compiles it down to java or swift. You can publish right to the App store from react-native.

So it's a chance for those of us comforatble with javascript to build phone-apps without having to learn swift or java. I'm hoping to try and re-create some of my webapps with react-native in order to have cross-platform developer skills.
            </p>
            <p>
Thanks for reading, check out the React site for an intro and get started with there step-by-step intro app today.
            </p>
          </div>
        </article>
        <article>
          <h2>Code Pen</h2>
          <p>By J.Sinkler</p>
          <div>
            <p>
            CodePen is a sandbox of sorts where you can test ideas, or fully develop a website. The benefit is in the layout where you can see html, css, and javascript side by side, while also looking at a preview of what your site would look like. I liked being able to make quick changes and see ti immediately while staying on the same page where I could see all my code.
            </p>
            <p>
            There are also a lot of things to learn on CodePen. People make all sorts of small components that you might want to borrow ideas from. I've seen an svg tool to help you build non-rectangular divs, to a cat that chases it's tail to represent a page-loading. There are tons of examples that people share, many of which the authors spend a good deal of time on.</p>
            <p>
            You should definately take a look at the examples people put up on CodePen to be inspired. I recently used it to practice some grid-layout with css. My webpage is built with React but instead of putting all that js in. I just used static containers, but could design with css. I then just copied the css code into a css document for that pages styling. Remember to change 'class' to 'className' and your set. Check it out, and share your success in the comments below.</p>
          </div>
        </article>
      </div>
    )
  }
}

export default BlogPreviews
