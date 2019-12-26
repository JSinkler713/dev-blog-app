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
      </div>
    )
  }
}

export default BlogPreviews
