import * as S from './sources'

export default {
  video: 'Video',
  ai: 'AI',
  enterprise: 'Enterprise',
  company: 'Company',
  aiApp: 'AI Apply',
  entEffectiveness: 'Enterprise Effectiveness',
  cooperation: 'Cooperation',
  aboutUs: 'About us',
  TechDoc: 'Technical Documentation',
  address: 'Room 1213-2, Unit 1, Floor 12, Building 2, No. 87, Building Materials City West Road, Changping District, Beijing',
  whyChooseUs: {
    title: 'Why choose us?',
    items: [
      {
        icon: S.iconFunc,
        title: 'Has powerful functions',
        desc: 'Accurate identification, reliable transmission, support for multi-platform operation;'
      },
      {
        icon: S.iconTeam,
        title: 'trusted team',
        desc: 'The company has more than 50 back-end developers, fully supported;'
      },
      {
        icon: S.iconService,
        title: 'Rest assured after-sales',
        desc: 'If you encounter any intractable problems, we will try our best to solve them as soon as possible, so that you have no worries;'
      }
    ]
  },
  businessIntroduction: {
    title: 'Business introduction',
    items: [
      {
        icon: S.iconVideoEnhancement,
        background: S.businessIntroductionItemBg1,
        title: 'Video enhancement',
        desc: 'It can quickly improve the video quality. The main function of the beauty module is to help remove spots, acne, pores, blackheads and other blemishes on the face in the video;<br><br>Make the skin appear smooth, smooth, rosy, fair and other textured. Effect.'
      },
      {
        icon: S.iconAiApp,
        image: S.imgAiApp,
        background: S.businessIntroductionItemBg2,
        title: 'AI application',
        desc: 'Improve our daily work efficiency through AI technology, such as: automatic recognition and classification of images/videos, audio and video enhancement, natural language understanding, text robots, etc.;<br><br>And support all platforms, Zhongji Xintuo brings you intelligence and convenience services;'
      },
      {
        icon: S.iconEntEffectiveness,
        image: S.imgEntEffectiveness,
        background: S.businessIntroductionItemBg3,
        title: 'Enterprise effectiveness',
        desc: 'In order to ensure the realization of enterprise goals, Zhongji Xintuo can improve project management solutions, Internet customer service solutions and sales management solutions for you;<br><br>More clearly and efficiently to empower the development of enterprises.'
      }
    ]
  }
}
