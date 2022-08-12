import * as S from './sources'

const videoPage = {
  bannerTitle: '我们能<br>做些什么？',
  portraitBeauty: {
    title: '人像美颜',
    subTitle: '医美级人像精修',
    desc: '此项技术是基于人脸检测，针对人脸的眼睛、眉毛、嘴角等关键位置提取68个特征点进行精准检测、美白、磨皮等技术手段让人看起来更美；<br><br>可以对脸部各个器官进行细致的调整，进而通过美妆调节达到快速上妆的效果；'
  },
  videoFilter: {
    title: '视频滤镜',
    items: ['实时渲染',  '自行调节',  '多样模板',  '背景分离',  '场景替换',  '多种特效']
  },
  faceEffect: {
    title: '人脸特效',
    desc: '可以对人脸和头部位置进行跟踪;<br><br>通过交互式贴纸渲染，实现动画换脸、场景变换、恶搞扮丑等视频特效。'
  },
  cartoonDriver: {
    title: '3D卡通驱动',
    desc: '利用高精度人脸关键点检测人脸表情实时驱动卡通人脸，可供定制化设计卡通形象；<br><br>提供贴心易用的卡通定制工具。'
  },
  faceDetectionAlignment: {
    title: '人脸检测对齐',
    desc: '采用自行设计的叠层监督归约函数对齐算法实现高精度与高效率的标准68点人脸对齐；<br><br>采用自我标注数据进行训练，可实现最快单人脸1ms检测、4ms关键点对齐的高速度，可达到同时8人左右的实时检测，速度从未如此之快。'
  },
  faceRecognition: {
    title: '视频人脸识别',
    desc: '提供高效、准确的图像或视频中人脸信息，返回人脸的大小、位置等；<br><br>并根据人脸的特征准确判断人的身份等信息、安防从来没有如此轻松过。'
  },
  virtualBackground: {
    title: '视频虚拟背景',
    desc: '可根据客户需求，对视频背景进行自定义设置，实现多种虚拟背景灵活切换。'
  },
  fullPlatformSupport: {
    title: '全平台支持',
    desc: '中玑信拓的先进技术支持多个平台 Windows/Android/ios/Linux<br>让您无需为设备设备不兼容而烦恼。'
  },
  qualityMms: {
    title: '5G 视频质量监测管理系统',
    desc: '构建视频质量评估框架对视频质量进行实时监测，对视频通话中可能出现的花屏、黑屏、异常色块、卡顿、延时、帧率下降等故障画面情况进行分析诊断；<br><br>同时生成可视化的性能指标统计数据。'
  },
  smartVideoCss: {
    title: '<span style="color:#1161EF;">5G</span> 智能视频客服业务系统',
    desc: '在人工客服与客户进行实时视频通话时，通过调用滤镜SDK改善客服视频的画面风格，将摄像头采集到的YUV图像数据通过SDK的数据输入接口传入进来;<br><br>然后通过滤镜风格设置接口设置滤镜风格参数，由SDK进行滤镜算法处理，处理完后再转换为YUV数据输出给调用方，再经编码后传输给客户。<br><br>滤镜支持多种色彩风格，适用于不同色调环境下的场景。'
  },
  conferenceSystem: {
    title: '高清视频会议系统',
    desc: '拥有高清稳定的音视频效果及清晰流畅的数据共享协作。支持手机、电脑、平板、智慧大屏、第三方会议终端等各类终端接入；<br><br>为客户提供全场景覆盖、简单易用、快速部署、软硬一体的云会议解决方案。'
  },
  useCase: {
    title: '我们能做什么？',
    items: [
      {
        img: S.imgVideoUseCase1,
        title: '美颜软件',
        desc: '配备各种市面上美颜磨皮技术，背景替换，以及增加特效模板等。'
      },
      {
        img: S.imgVideoUseCase2,
        title: '互联网客服',
        desc: '5G视频通话服务，客服与客户视频通话中流畅运行，也可进行美颜，替换背景。'
      },
      {
        img: S.imgVideoUseCase3,
        title: '直播平台',
        desc: '除了最基础的美颜效果，还可以实时替换直播背景墙以及增加各种氛围特效。'
      },
      {
        img: S.imgVideoUseCase4,
        title: '定制开发',
        desc: '可针对客户业务需求，实现定制化的场景模型、功能算法等服务。'
      }
    ]
  },
  qualityImprovement: {
    title: '视频质量提升',
    subTitle: '模糊变清晰',
    desc: '对画质较差的老视频进行画质修复和色彩增强, <br>提高视频分辨率和清晰度, 让您永久留存具有纪念意义的视频;'
  }
}

const aiPage = {
  imageVideoClassification: {
    title: '图像视频分类',
    desc: '所谓图像分割是指根据灰度、彩色、空间纹理、几何形状等特征把图像划分成若干个互不相交的区域；<br><br>使得这些特征在同一区域内表现出一致性或相似性，而在不同区域间表现出明显的不同。'
  },
  AudioAndVideoEnhancement: {
    title: '音视频增强',
    desc: '实时视频通话带来空间音频技术，借助多个麦克风及内部音频处理算法，使得在视频通话时具有更加真实的声场效果，尽管隔着屏幕，但人与人之间的距离将会更近；<br><br>音视频技术已经成为了人际交流的重要手段。音视频技术的发展不仅得益于5G、AI等技术的行业应用，更依托于刚性的市场需求。'
  },
  imageVideoRecognition: {
    title: '图像视频识别',
    subTitle: '智能时代引领未来',
    items: ['图像搜索', '智能生活', '信息采集']
  },
  naturalLanguageUnderstanding: {
    title: '自然语言理解',
    desc: '自然语言语音理解系统，人和计算机之间用自然语言口语语音对话的通信系统;<br><br>所引用的领域包括机器翻译、机器客服、智能音响、车载语音等等。',
    items: [
      { icon: S.iconAiTranslation, title: '机器翻译' },
      { icon: S.iconAiService, title: '机器客服' },
      { icon: S.iconAiSpeaker, title: '智能音响' }
    ]
  },
  textRobot: {
    title: '文本机器人',
    desc: '满足企业售前获客、售中咨询、售后服务等多种业务场景，提高服务和营销效率，留住每一条商机;<br><br>机器人解决重复性问题，人工客服处理复杂性问题，通过人机协同，提升问题处理效率。',
    items: [
      { icon: S.iconAi24Hours, title: '人机协作' },
      { icon: S.iconAiPersons, title: '机器人值守' },
      { icon: S.iconAiPos, title: '精准理解' }
    ]
  },
  useCase: {
    title: '我们能做什么？',
    items: [
      {
        img: S.imgAiUseCase1,
        title: '智能通信',
        desc: '将人工智能引入无线通信系统的各个层面，实现无线通信与人工智能技术有机融合。'
      },
      {
        img: S.imgAiUseCase2,
        title: '医疗',
        desc: '使用机器学习，设备可以进行自主诊断做简单的体征指标检查，从而减轻医生和护士的工作压力。'
      },
      {
        img: S.imgAiUseCase3,
        title: '零售',
        desc: '图像识别、机器学习和自然语言处理等技术等发展使得智能服务机器人能够轻松与顾客打招呼、交流，可以预测订单，提供引导。'
      },
      {
        img: S.imgAiUseCase4,
        title: '定制开发',
        desc: '客户提出具体需求从而进行需求分析，进行后端开发、前端、ui、测试、实施落地项目等。'
      }
    ]
  }
}

const enterprisePage = {
  banner: {
    title: '呼叫中心',
    desc: '全面满足企业联络需求，<br>帮助企业为客户提供更优质的服务。'
  },
  serviceCenter: {
    title: '新一代客服系统平台',
    items: [
      {
        icon: S.iconEntConnect,
        title: '统一接入',
        desc: '电信网、企业网、互联网三网接入，统一企业服务品牌意识，树立企业品牌形象。'
      },
      {
        icon: S.iconEntMedia,
        title: '全媒体',
        desc: '媒体扩充方便：通过简单的扩展就能支持语音|视频|微信| Webchat等多种媒体渠道的接入。'
      },
      {
        icon: S.iconEntSeat,
        title: '坐席话机',
        desc: '系统可以支持接入硬话机、PC软件话机、web电话、常规手机号码、固话号码作为坐席的终端电话。'
      },
      {
        icon: S.iconEntIntelligent,
        title: '智能化',
        desc: '智能应用集成能力：包括TTS、ASR、人机对话系统、智能IVR系统等。'
      },
      {
        icon: S.iconEntCloud,
        title: '部署能力',
        desc: '云部署能力:系统处理能力可以通过简单的增减cpu、内存的虚拟化配置进行性能扩展和收缩。'
      },
      {
        icon: S.iconEntExtend,
        title: '系统扩展性',
        desc: '系统预留5G视频客服的扩展能力，预留智能外呼扩展能力（用于营销、回访、调查等业务）。'
      },
      {
        icon: S.iconEntUpdate,
        title: '产品可迭代',
        desc: 'CRM产品具有一定的可配置性，能够在系统内快速定义新的工单和工单处理流程。'
      },
      {
        icon: S.iconEntSafety,
        title: '高可靠',
        desc: '灾备能力：支持异地双机热备技术，防止单点故障。'
      }
    ]
  },
  bigDataAppSystem: {
    title: '大数据应用系统',
    items: ['高性能', '加速数据洞察', '读写分离', '运维成本低']
  },
  gaeBms: {
    title: '政企业务管理系统',
    desc: '能够提供实时、相关、准确、完整的数据，为管理者提供决策依据的一种软件。'
  },
  dataAnalysis: {
    title: '一站式平台，赋能企业提高线索转化率',
    items: [
      {
        img: S.imgEntSpeechAnalysis,
        title: '语音分析',
        desc: '静音模型 -》客服不熟悉业务/语速模型 -》客服不尊重客户/抢话模型 -》客服没有耐心/情绪模型 -》激怒客户'
      },
      {
        img: S.imgEntIncomingCall,
        title: '来电原因分类',
        desc: '对通话录音归类，查询、办理业务、投诉及数十种子分类，将海量录音分析后，挖掘业务潜在问题'
      },
      {
        img: S.imgEntHotPointAnalysis,
        title: '热点趋势分析',
        desc: '展示海量通话中值得关注的热点词，挖掘商机或危机'
      },
      {
        img: S.imgEntInformation,
        title: '信息提取',
        desc: '从企业机构长篇幅文件中，进行结构化分析，提取结构化信息'
      },
      {
        img: S.imgEntCommentAnalysis,
        title: '评论分析',
        desc: '对企业或产品的用户评论进行分析'
      },
      {
        img: S.imgEntRootClustering,
        title: '根源聚类',
        desc: '对海量文本的内容进行相似内容聚类，进行常见问题整理'
      }
    ]
  },
  objectManage: {
    title: '事半功倍、落实到位，政企工作更轻松！',
    items: [
      {
        title: '监控管理',
        desc: '客户、项目、合同、商机、财务、合作伙伴之间关联，可视化展示，异常情况预警；'
      },
      {
        title: '商机管理',
        desc: '多渠道商机信息采集，及时开展评估、跟进，商机挖潜最大化。'
      },
      {
        title: '客户管理',
        desc: '客户资源管理，针对客户类型开展客情维系、需求深挖、开拓业务。'
      },
      {
        title: '合同管理',
        desc: '关注过程管理，关键环节和费用计划与实际进度全程管理，对逾期、异常情况预警提醒。'
      },
      {
        title: '项目管理',
        desc: '及时更新项目动态，对项目实施过程的资源使用、运维等进行记录全面评估项目。'
      },
      {
        title: '资源管理',
        desc: '通过科学登记、管理，了解每个企业的优劣处，促进业务合作落地。'
      },
      {
        title: '系统管理',
        desc: '合理设置系统权限，分权限管理，自定义子模块的应用已经增删查改等功能。'
      },
      {
        title: '财务管理',
        desc: '政企业务收支以报表方式展示，全貌了解政企财务经营数据，统计业绩考核，预测收入。'
      }
    ]
  },
  unitedTechnologyInnovation: {
    title: '实现联合技术创新',
    subTitle: '以云计算、大数据、人工智能等技术为支撑。',
    appName: '大数据应用系统',
    desc: '构建大数据处理、服务、应用、标准规范、安全监控体系。<br><br>实现海量数据的处理、服务、查询检索以及分析挖掘，为数据价值的深化应用提供强有力的支撑。',
    items: [
      {
        icon: S.iconEntIcon1,
        title: '业务系统'
      },
      {
        icon: S.iconEntIcon2,
        title: '管理系统'
      },
      {
        icon: S.iconEntIcon3,
        title: '企业数据'
      },
      {
        icon: S.iconEntIcon4,
        title: '管控系统'
      },
      {
        icon: S.iconEntIcon5,
        title: '运营系统'
      }
    ]
  },
  iss: {
    title: '智能服务系统  提升企业效能',
    items: [
      '企业80%重复、相似的问题可以通过智能呼叫平台解决，剩余的人力可做更精细化的价值服务；',
      '智能质检，建立通过标准的质检模型，减少人工质检因质检人员不同，疲劳程度不同而造成的误差；',
      '系统为企业自动运算出热点咨询问题，客户重点关注等，做到资源再分配，提升服务整体效率；'
    ]
  },
  gaeSystemSummary: {
    title: '做到“事事有反馈，件件有落实”',
    items: [
      '中玑信拓专为企业打造协同办公平台，为企业提供统一入口、社交沟通、协同办公、业务协同等核心解决方案;',
      '帮助企业构建数智化的多端工作入口，提高协同办公效率，降低运营成本，赋能员工和团队，激发组织活力。'
    ]
  }
}

const aboutPage = {
  banner: {
    title: '关于我们',
    desc: '以技术为核心，为您提供高效、安全的数字化产品！'
  },
  about: {
    title: '北京中玑信拓有限公司',
    desc: `中玑信拓一直专注于“研发、建设、音视频、AI应用以及企业效能三大板块的技术，为企业提供高效安全的数字化产品；
      <br><br>视频包括（质量提升、场景替换、人像美颜、人像特效、人脸识别、客服视频技术）等；AI应用包括：（文本机器人、图像视频识别/分类、自然语言理解、音视频增强）等；企业效能包括（智能呼叫平台、大数据应用、政企管理系统）等；
      <br><br>并且这些所有技术能做到在全平台运行，目前已和多个领域的企业有这密切的合作，选择我们让您更加放心，安心；24小时的技术保障，第一时间解决您的疑难杂症！`
  }
}

const homePage = {
  whyChooseUs: {
    title: '为什么选择我们？',
    items: [
      {
        icon: S.iconFunc,
        title: '拥有强大的功能',
        desc: '精准识别，可靠传输，支持多平台操作；'
      },
      {
        icon: S.iconTeam,
        title: '值得信赖的团队',
        desc: '公司共有50余名开发人员，全力支撑；'
      },
      {
        icon: S.iconService,
        title: '让您放心的售后',
        desc: '遇到各位疑难杂症问题会第一时间全力解决，让您没有后顾之忧；'
      }
    ]
  },
  businessIntroduction: {
    title: '业务介绍',
    items: [
      {
        icon: S.iconVideoEnhancement,
        background: S.businessIntroductionItemBg1,
        video: S.videoEnhancement,
        title: '视频增强',
        desc: '中玑信拓视频技术可迅速提升视频质量、为视频添加美颜滤镜、3D卡通虚拟形象、视频人脸特效、视频虚拟背景替换等；<br><br>可实现视频画面实时捕捉跟踪、精准抠图、实时渲染、精确度较高，可根据需求进行定制开发；'
      },
      {
        icon: S.iconAiApp,
        image: S.imgAiApp,
        background: S.businessIntroductionItemBg2,
        title: 'AI 应用',
        desc: '通过AI技术提高我们的日常工作效率，如：图像/视频的自动识别分类、音视频增强、自然语言理解、文本机器人等；<br><br>并且全平台支持，中玑信拓为你带来智能便捷的服务；'
      },
      {
        icon: S.iconEntEffectiveness,
        image: S.imgEntEffectiveness,
        background: S.businessIntroductionItemBg3,
        title: '企业效能',
        desc: '为了保证企业目标的实现，中玑信拓可为您提高项目管理解决方案、互联网客服解决方案以及销售管理的解决方案；<br><br>更加明确高效的去赋能企业的发展。'
      }
    ]
  },
  partner: {
    title: '合作伙伴',
    items: []
  }
}

const menu = [
  { label: '视频', link: '/video' },
  { label: 'AI', link: '/ai' },
  { label: '企业', link: '/enterprise' },
  { label: '关于我们', link: '/about' }
]

const appHeader = { menu }

const appFooter = {
  menu,
  address: '北京市昌平区建材城西路87号2号楼12层1单元1213-2室'
}

export default {
  appHeader,
  appFooter,
  videoPage,
  aiPage,
  enterprisePage,
  aboutPage,
  homePage
}
