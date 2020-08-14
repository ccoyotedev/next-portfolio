import {createClient} from 'contentful';
import BlogPanel from '../components/BlogPanel';
import moment from 'moment';

export class BlogApi {
  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE,
      accessToken: process.env.CONTENTFUL_TOKEN,
    });
  }

  async fetchWorkEntries() {
    return await this.client
      .getEntries({
        content_type: "work" // only fetch work entry
      })
      .then(entries => {
        if (entries && entries.items && entries.items.length > 0) {
          const work = entries.items.map(entry => this.convertWork(entry));
          return work;
        }
        return [];
      });
  }
  
  // async fetchBlogById(id) {
  //   return await this.client.getEntry(id).then(entry => {
  //     if (entry) {
  //       const post = this.convertPost(entry);
  //       return post;
  //     }
  //     return null;
  //   });
  // }

  convertImage = (rawImage) => {
    if (rawImage) {
      return {
        imageUrl: rawImage.file.url.replace('//', 'http://'), // may need to put null check as well here
        description: rawImage.description ? rawImage.description : "",
        title: rawImage.title,
      };
    }
    return null;
  };

  convertWork = (rawData) => {
    const rawPost = rawData.fields;
    const rawHeroImage = rawPost.featuredImage ? rawPost.featuredImage.fields : null;
    const rawLogo = rawPost.logo ? rawPost.logo.fields : null;

    return {
      id: rawData.sys.id,
      excerpt: rawPost.excerpt,
      date: moment(rawPost.date).format('DD MMM YYYY'),
      title: rawPost.title,
      heroImage: this.convertImage(rawHeroImage),
      logo: this.convertImage(rawLogo),
      logoWidth: rawPost.logoWidth,
      link: rawPost.link,
      color: rawPost.color
    };
  }
}