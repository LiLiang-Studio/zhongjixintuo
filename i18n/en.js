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
      link: '/enterprise'
      // children: [
      //   {
      //     label: 'Internet customer service solutions',
      //     link: '/'
      //   },
      //   {
      //     label: 'Project Management Solutions',
      //     link: '/'
      //   },
      //   {
      //     label: 'Sales Management Solutions',
      //     link: '/'
      //   }
      // ]
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
    imageVideoClassification: {
      title: 'Image video classification',
      desc: '"Image classification is an image processing method that distinguishes different types of objects according to the different characteristics reflected in the image information; <br><br>It uses a computer to quantitatively analyze the image, and classify the image or the image in the image. Each pixel or area is classified into one of several categories to replace human visual interpretation."'
    },
    AudioAndVideoEnhancement: {
      title: 'Audio and video enhancement',
      desc: 'Real-time video calls bring spatial audio technology. With the help of multiple microphones and internal audio processing algorithms, video calls have a more realistic sound field effect. Although the screen is separated, the distance between people will be closer;<br><br>Audio and video technology has become an important means of interpersonal communication. The development of audio and video technology not only benefits from the industrial application of 5G, AI and other technologies, but also relies on rigid market demand.'
    },
    imageVideoRecognition: {
      title: 'Image video recognition',
      subTitle: 'Life has never been easier',
      items: ['image search', 'smart life', 'Information Collection']
    },
    naturalLanguageUnderstanding: {
      title: 'natural language understanding',
      desc: 'Natural language speech understanding system, a communication system between people and computers using natural language spoken voice dialogue;<br><br>The fields cited include machine translation, machine customer service, intelligent audio, vehicle voice and so on.',
      items: [
        {
          icon: S.iconAiTranslation,
          title: 'machine translation'
        },
        {
          icon: S.iconAiService,
          title: 'Machine customer service'
        },
        {
          icon: S.iconAiSpeaker,
          title: 'smart speaker'
        }
      ]
    },
    textRobot: {
      title: 'text robot',
      desc: 'Satisfy various business scenarios such as pre-sale customer acquisition, in-sale consultation, after-sale service, etc., improve service and marketing efficiency, and retain every business opportunity;<br><br>Robots solve repetitive problems, manual customer service handles complex problems, Improve problem handling efficiency through human-machine collaboration.',
      items: [
        {
          icon: S.iconAi24Hours,
          title: 'Human-machine collaboration'
        },
        {
          icon: S.iconAiPersons,
          title: 'Robot on duty'
        },
        {
          icon: S.iconAiPos,
          title: 'Accurate understanding'
        }
      ]
    },
    useCase: {
      title: 'Use Cases',
      items: [
        {
          img: S.imgAiUseCase1,
          title: 'intelligent communication',
          desc: 'Introduce artificial intelligence into all levels of the wireless communication system to realize the organic integration of wireless communication and artificial intelligence technology.'
        },
        {
          img: S.imgAiUseCase2,
          title: 'medical',
          desc: 'Using machine learning, the device can perform self-diagnosis and simple physical index checks, thereby reducing the work pressure of doctors and nurses.'
        },
        {
          img: S.imgAiUseCase3,
          title: 'retail',
          desc: 'Advances in technologies such as image recognition, machine learning, and natural language processing have enabled intelligent service robots to easily greet and communicate with customers, predict orders, and provide guidance.'
        }
      ]
    }
  },
  enterprisePage: {
    banner: {
      title: 'Call Center',
      desc: 'Fully meet the needs of corporate communication, <br>help companies to provide customers with better services.'
    },
    serviceCenter: {
      title: 'A new generation of customer service system platform',
      items: [
        {
          icon: S.iconEntConnect,
          title: 'Unified access',
          desc: 'Telecom network, enterprise network and Internet access to three networks, unify enterprise service brand awareness, and establish enterprise brand image.'
        },
        {
          icon: S.iconEntMedia,
          title: 'all media',
          desc: 'Convenient media expansion: through simple expansion, it can support access to various media channels such as voice | video | WeChat | Webchat.'
        },
        {
          icon: S.iconEntSeat,
          title: 'Agent phone',
          desc: 'The system can support access to hard phones, PC softphones, web phones, conventional mobile phone numbers, and landline numbers as terminal phones for agents.'
        },
        {
          icon: S.iconEntIntelligent,
          title: 'Intelligent',
          desc: 'Intelligent application integration capabilities: including TTS, ASR, human-machine dialogue system, intelligent IVR system, etc.'
        },
        {
          icon: S.iconEntCloud,
          title: 'Deployment capability',
          desc: 'Cloud deployment capability: The system processing capability can be expanded and contracted by simply increasing or decreasing the virtualized configuration of CPU and memory.'
        },
        {
          icon: S.iconEntExtend,
          title: 'system scalability',
          desc: 'The system reserves the expansion capability of 5G video customer service, and reserves the expansion capability of intelligent outbound calls (for marketing, return visits, surveys, etc.).'
        },
        {
          icon: S.iconEntUpdate,
          title: 'product iterable',
          desc: 'CRM products are configurable to a certain extent, and new work orders and work order processing processes can be quickly defined within the system.'
        },
        {
          icon: S.iconEntSafety,
          title: 'High reliability',
          desc: 'Disaster recovery capability: Support remote dual-machine hot backup technology to prevent single point of failure.'
        }
      ]
    },
    intelligentPlatformServiceValue: {
      title: 'Intelligent platform service value',
      items: [
        {
          img: S.imgEntRobot,
          title: 'Robotic Navigation Saves Labor Costs',
          desc: '80% of the repetitive and similar problems of enterprises can be solved by intelligent robots, and the remaining manpower can be used for more refined value services.'
        },
        {
          img: S.imgEntIntelligentQuality,
          title: 'Intelligent quality inspection establishes a unified standard',
          desc: 'Intelligent quality inspection, establish a quality inspection model that passes the standard, and reduce errors caused by manual quality inspection due to different quality inspectors and different degrees of fatigue.'
        },
        {
          img: S.imgEntHotPoint,
          title: 'Hot value analysis',
          desc: '80% of the repetitive and similar problems of enterprises can be solved by intelligent robots, and the remaining manpower can be used for more refined value services.'
        }
      ]
    },
    bigDataAppSystem: {
      title: 'big data application system',
      items: [
        'high performance',
        'Accelerate data insights',
        'read-write separation',
        'Low operation and maintenance cost'
      ]
    },
    callCenter: {
      title: 'Smart Call Center',
      desc: 'The operation is stable, safe and reliable, helping enterprises to quickly build a customer contact platform that integrates telephone, online communication, and audio and video calls. <br><br>Provide a solid, stable, integrated and unified communication base for enterprise business, and is committed to improving the digital and intelligent competitiveness of enterprise services and marketing.'
    },
    gaeBms: {
      title: 'Government and Enterprise Business Management System',
      desc: 'A software that can provide real-time, relevant, accurate and complete data for managers to make decisions.'
    },
    customerManage: {
      title: 'Let enterprises better manage customers and improve enterprise efficiency',
      items: [
        {
          icon: S.iconEntContact,
          title: 'Contact Management Center',
          desc: 'Multimedia contact information, pop-up screen for incoming calls'
        },
        {
          icon: S.iconEntCustomer,
          title: 'Customer Data Center',
          desc: 'Customer data collection, binding, customer service history information'
        },
        {
          icon: S.iconEntWorkorder,
          title: 'Work Order Center',
          desc: 'Work order creation, work order processing flow'
        },
        {
          icon: S.iconEntSms,
          title: 'SMS sending management',
          desc: 'Real-time tracking, efficient and convenient, to ensure service timeliness'
        },
        {
          icon: S.iconEntSettings,
          title: 'Configuration Center',
          desc: 'Standardize business management, realize work order template, customer template, report configurable processing, and quickly customize new business'
        },
        {
          icon: S.iconEntOutcall,
          title: 'Preview outbound call center',
          desc: 'Outbound call scenarios, tasks, lists, and then contact management'
        },
        {
          icon: S.iconEntPermission,
          title: 'User rights',
          desc: 'Permission settings for menus, enterprise user classification management'
        },
        {
          icon: S.iconEntKnowledge,
          title: 'Knowledge Center',
          desc: 'Knowledge base management, query'
        }
      ]
    },
    dataAnalysis: {
      title: 'One-stop platform that empowers companies to improve lead conversion rates',
      items: [
        {
          img: S.imgEntSpeechAnalysis,
          title: 'speech analysis',
          desc: 'Silent Model - "Customer Service Unfamiliar with Business/Speech Speed Model -" Customer Service Disrespecting Customers/Speaking Model - "Customer Service Impatient/Emotion Model -" Irritating Customers'
        },
        {
          img: S.imgEntIncomingCall,
          title: 'Classification of call reasons',
          desc: 'Classify call recordings, query, handle business, complaints and dozens of sub-categories, analyze massive recordings, and discover potential business problems'
        },
        {
          img: S.imgEntHotPointAnalysis,
          title: 'Hot Trend Analysis',
          desc: 'Display hot words worthy of attention in massive calls, and tap business opportunities or crises'
        },
        {
          img: S.imgEntInformation,
          title: 'Information extraction',
          desc: 'Perform structured analysis and extract structured information from long-form corporate documents'
        },
        {
          img: S.imgEntCommentAnalysis,
          title: 'Comment analysis',
          desc: 'Analyze user reviews of businesses or products'
        },
        {
          img: S.imgEntRootClustering,
          title: 'root clustering',
          desc: 'Similar content clustering for the content of massive texts, sorting out common problems'
        }
      ]
    }
  }
}
