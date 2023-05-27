import { helpers } from 'vuelidate/lib/validators'
const contains = param =>
  helpers.withParams(
    { type: 'contains', value: param },
    value => !helpers.req(value) || value.indexOf(param) === 0
  )

export default {
  validator: {
    linkedIn: { re: contains('https://www.linkedin.com/in') },
    gitHub: { re: contains('https://github.com') },
    gitLab: { re: contains('https://gitlab.com') },
    behance: { re: contains('https://www.behance.net') },
    dribbble: { re: contains('https://dribbble.com') },
    facebook: { re: contains('https://www.facebook.com') },
    twitter: { re: contains('https://twitter.com') }
  },

  behance: {
    label: 'behance',
    placeholder: 'https://www.behance.net/your-profile',
    img: 'behance',
    model: 'behance'
  },
  dribbble: {
    label: 'dribbble',
    placeholder: 'https://dribbble.com/your-profile',
    img: 'dribbble',
    model: 'dribbble'
  },
  linkedIn: {
    label: 'linkedIn',
    placeholder: 'https://www.linkedin.com/in/your-profile',
    img: 'linkedin',
    model: 'linkedIn'
  },
  github: {
    label: 'github',
    placeholder: 'https://github.com/your-profile',
    img: 'githubicon',
    model: 'gitHub'
  },
  gitlab: {
    label: 'gitlab',
    placeholder: 'https://gitlab.com/your-profile',
    img: 'gitlub',
    model: 'gitLab'
  },
  facebook: {
    label: 'facebook',
    placeholder: 'https://www.facebook.com/your-profile',
    img: 'facebookIco',
    model: 'facebook'
  },
  twitter: {
    label: 'twitter',
    placeholder: 'https://twitter.com/your-profile',
    img: 'twitterIco',
    model: 'twitter'
  }
}
