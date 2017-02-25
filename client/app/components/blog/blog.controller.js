import _ from 'lodash';

class BlogController {
  constructor() {
    this.message = 'Have a look at our posts!';
    this.posts = _.times(5, i => {
      return {
        title: `Post title ${i}`,
        author: `Post author ${i}`
      }
    });
  }
}

export {BlogController}