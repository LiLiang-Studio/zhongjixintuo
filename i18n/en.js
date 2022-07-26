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
  },
  navMenu: [
    {
      label: 'Video',
      link: '/video'
    },
    {
      label: 'AI',
      link: '/ai'
    },
    {
      label: 'Enterprise',
      children: [
        {
          label: 'Internet customer service solutions',
          link: '/'
        },
        {
          label: 'Project Management Solutions',
          link: '/'
        },
        {
          label: 'Sales Management Solutions',
          link: '/'
        }
      ]
    },
    {
      label: 'About Us',
      link: '/'
    }
  ],
  partner: {
    title: 'Partner',
    items: []
  },
  videoPage: {
    bannerTitle: 'What can we<br>do?',
    portraitBeauty: {
      title: 'Portrait beauty',
      subTitle: 'Medical Beauty Portrait Retouching',
      desc: 'Through this technology, based on face detection, 68 feature points in key positions such as eyes, eyebrows, and corners of the mouth are accurately detected. Smooth, etc.;<br><br>Allows each part of the face to be finely adjusted, and the effect of applying makeup quickly can be achieved through beauty adjustment;'
    },
    videoFilter: {
      title: 'Video filter',
      items: [
        'real-time rendering', 
        'self-adjusting', 
        'Diverse templates', 
        'background isolated', 
        'scene replacement', 
        'multiple effects'
      ]
    },
    faceEffect: {
      title: 'Face effect',
      desc: 'Through the tracking of the face and head position;<br><br>Through interactive sticker rendering, video special effects such as animation face change, scene change, spoofing and ugliness are realized.'
    },
    cartoonDriver: {
      title: '3D cartoon driver',
      desc: 'Use high-precision face key points and facial expressions to drive cartoon faces in real time; customize cartoon images; <br><br>Provide intimate and easy-to-use cartoon customization tools.'
    },
    faceDetectionAlignment: {
      title: 'Face detection alignment',
      desc: 'Adopt self-designed stack supervised reduction function alignment algorithm to achieve high-precision and high-efficiency standard 68-point face alignment;<br><br>Use self-labeled data for training, which can achieve the fastest single face detection of 1ms, 4ms The high speed of key point alignment can achieve real-time detection of about 8 people at the same time, and the speed has never been so fast.'
    },
    faceRecognition: {
      title: 'Video face recognition',
      desc: 'Provide efficient and accurate face information in images or videos, return the size, location, etc. of the face;<br><br>Accurately determine the identity and other information of the person according to the characteristics of the face, and security has never been so easy.'
    },
    virtualBackground: {
      title: 'Video virtual background',
      desc: 'Separate the human agent from the background image through edge recognition, and replace it with optional background. <br><br>Background refers to something that is still in the scene.'
    },
    fullPlatformSupport: {
      title: 'Full platform support',
      desc: 'Zhongji Xintuo\'s advanced technology supports multiple platforms Windows/Android/ios/Linux<br><br>so you don\'t need to worry about the incompatibility of the device.'
    },
    qualityMms: {
      title: '5G Video Quality Monitoring Management System',
      desc: 'Build a video quality assessment framework to monitor video quality in real time, and analyze and diagnose faulty images such as blurry screens, black screens, abnormal color blocks, freezes, delays, and frame rate drops that may occur during video calls;<br><br> Simultaneously generate visual performance metrics statistics.'
    },
    smartVideoCss: {
      title: '<span style="color:#1161EF;">5G</span> Smart Video Customer Service System',
      desc: 'When the human customer service has a real-time video call with the customer, the screen style of the customer service video is improved by calling the filter SDK, and the YUV image data collected by the camera is passed in through the data input interfaceof the SDK;<br><br> Then set the filter style parameters through the filter style setting interface, and the SDK will process the filter algorithm. After processing, it will be converted into YUV data and output to the caller, and then encoded and transmitted to the customer. <br><br>Filters support a variety of color styles, suitable for scenes with different tonal environments.'
    },
    conferenceSystem: {
      title: 'HD video conference system',
      desc: 'It has high-definition and stable audio and video effects and clear and smooth data sharing and collaboration. Support mobile phone, computer, tablet, smart large screen, third-party conference terminal and other terminal access;<br><br>Provide customers with cloud conference solutions with full scene coverage, easy to use, rapid deployment, and integration of software and hardware .'
    },
    useCase: {
      title: 'Use Cases',
      items: [
        {
          img: S.imgVideoUseCase1,
          title: 'Beauty software',
          desc: 'Equipped with a variety of beautifying and microdermabrasion techniques on the market, background replacement, and adding special effects templates, etc.'
        },
        {
          img: S.imgVideoUseCase2,
          title: 'Internet customer service',
          desc: '5G video call service, customer service and customer video calls run smoothly, and can also beautify and replace the background.'
        },
        {
          img: S.imgVideoUseCase3,
          title: 'Live platform',
          desc: 'In addition to the most basic beauty effects, you can also replace the live broadcast background wall in real time and add various atmospheric effects.'
        }
      ]
    },
    qualityImprovement: {
      title: 'Video quality improvement',
      subTitle: 'blur to clear',
      desc: 'Perform image quality repair and color enhancement on old videos with poor quality, <br>improve video resolution and clarity, and allow you to keep memorable videos forever;'
    }
  },
  aiPage: {
    mediaClassification: {
      title: 'Image video classification',
      desc: '"Image classification is an image processing method that distinguishes different types of objects according to the different characteristics reflected in the image information; <br><br>It uses a computer to quantitatively analyze the image, and classify the image or the image in the image. Each pixel or area is classified into one of several categories to replace human visual interpretation."'
    },
    AudioAndVideoEnhancement: {
      title: 'Audio and video enhancement',
      desc: 'Real-time video calls bring spatial audio technology. With the help of multiple microphones and internal audio processing algorithms, video calls have a more realistic sound field effect. Although the screen is separated, the distance between people will be closer;< br><br>Audio and video technology has become an important means of interpersonal communication. The development of audio and video technology not only benefits from the industrial application of 5G, AI and other technologies, but also relies on rigid market demand.'
    }
  }
}
