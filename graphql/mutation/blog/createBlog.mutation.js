import models from '../../../models/index.js';
import BlogType from '../../types/blog.type.js';
import AddBlogInput from "../../input/blog.input.js"

export default {
  type: BlogType,
  args: {
      input: {
          type: AddBlogInput,
      }
  },
  resolve (source, args) {
    return models.blog.create({
      title: args.blog.title,
      description: args.blog.description,
      imageUrl: args.blog.imageUrl,
      authorId:args.blog.authorId
    });
  }
}
