import * as S from './sources'

export default {
  video: '视频',
  ai: 'AI',
  enterprise: '企业',
  company: '公司',
  aiApp: 'AI应用',
  entEffectiveness: '企业效能',
  cooperation: '合作',
  aboutUs: '关于我们',
  TechDoc: '技术文档',
  address: '北京市昌平区建材城西路87号2号楼12层1单元1213-2室',
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
        desc: '公司共有50多名的后端开发人员，全力支撑；'
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
        title: '视频增强',
        desc: '可迅速提升视频质量，美颜模块的主要功能是实现帮助视频中去除人脸上的斑、痘、毛孔、黑头等瑕疵;<br><br>使皮肤呈现出平整、光滑、红润、白皙等有质感的效果。'
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
  navMenu: [
    {
      label: '视频',
      link: '/video'
    },
    {
      label: 'AI',
      link: '/ai'
    },
    {
      label: '企业',
      link: '/enterprise'
      // children: [
      //   {
      //     label: '互联网客服解决方案',
      //     link: '/'
      //   },
      //   {
      //     label: '项目管理解决方案',
      //     link: '/'
      //   },
      //   {
      //     label: '销售管理解决方案',
      //     link: '/'
      //   }
      // ]
    },
    {
      label: '关于我们',
      link: '/'
    }
  ],
  partner: {
    title: '合作伙伴',
    items: []
  },
  videoPage: {
    bannerTitle: '我们能<br>做些什么？',
    portraitBeauty: {
      title: '人像美颜',
      subTitle: '医美级人像精修',
      desc: '通过此项技术是基于人脸检测针对人脸的眼睛、眉毛、嘴角等关键位置68个特征点进行精准检测美白、磨皮技术手段让人看起来更美，包括：皮肤细腻、白皙、红润、光滑等;<br><br>使脸部各个器官可以进行细致的调整，通过美妆调节可以达到快速上妆的效果；'
    },
    videoFilter: {
      title: '视频滤镜',
      items: [
        '实时渲染', 
        '自行调节', 
        '多样模板', 
        '背景分离', 
        '场景替换', 
        '多种特效'
      ]
    },
    faceEffect: {
      title: '人脸特效',
      desc: '通过对人脸和头部位置的跟踪;<br><br>通过交互式贴纸渲染，实现动画换脸、场景变换、恶搞扮丑等视频特效。'
    },
    cartoonDriver: {
      title: '3D卡通驱动',
      desc: '利用高精度人脸关键点与人脸表情实时驱动卡通人脸；可供定制化设计卡通形象；<br><br>提供贴心易用的卡通定制工具。'
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
      desc: '通过边缘识别将人工座席人员从背景画面分离出来，并可选背景进行替换。<br><br>背景指在场景中静止不动的景物。'
    },
    fullPlatformSupport: {
      title: '全平台支持',
      desc: '中玑信拓的先进技术支持多个平台 Windows/Android/ios/Linux<br><br>让您无需为设备设备不兼容而烦恼。'
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
      title: '使用案例',
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
        }
      ]
    },
    qualityImprovement: {
      title: '视频质量提升',
      subTitle: '模糊变清晰',
      desc: '对画质较差的老视频进行画质修复和色彩增强, <br>提高视频分辨率和清晰度, 让您永久留存具有纪念意义的视频;'
    }
  },
  aiPage: {
    imageVideoClassification: {
      title: '图像视频分类',
      desc: '“图像分类，根据各自在图像信息中所反映的不同特征，把不同类别的目标区分开来的图像处理方法；<br><br>它利用计算机对图像进行定量分析，把图像或图像中的每个像元或区域划归为若干个类别中的某一种，以代替人的视觉判读。”'
    },
    AudioAndVideoEnhancement: {
      title: '音视频增强',
      desc: '实时视频通话带来空间音频技术，借助多个麦克风及内部音频处理算法，使得在视频通话时具有更加真实的声场效果，尽管隔着屏幕，但人与人之间的距离将会更近；<br><br>音视频技术已经成为了人际交流的重要手段。音视频技术的发展不仅得益于5G、AI等技术的行业应用，更依托于刚性的市场需求。'
    },
    imageVideoRecognition: {
      title: '图像视频识别',
      subTitle: '生活从未如此便捷',
      items: ['图像搜索', '智能生活', '信息采集']
    },
    naturalLanguageUnderstanding: {
      title: '自然语言理解',
      desc: '自然语言语音理解系统，人和计算机之间用自然语言口语语音对话的通信系统;<br><br>所引用的领域包括机器翻译、机器客服、智能音响、车载语音等等。',
      items: [
        {
          icon: S.iconAiTranslation,
          title: '机器翻译'
        },
        {
          icon: S.iconAiService,
          title: '机器客服'
        },
        {
          icon: S.iconAiSpeaker,
          title: '智能音响'
        }
      ]
    },
    textRobot: {
      title: '文本机器人',
      desc: '满足企业售前获客、售中咨询、售后服务等多种业务场景，提高服务和营销效率，留住每一条商机;<br><br>机器人解决重复性问题，人工客服处理复杂性问题，通过人机协同，提升问题处理效率。',
      items: [
        {
          icon: S.iconAi24Hours,
          title: '人机协作'
        },
        {
          icon: S.iconAiPersons,
          title: '机器人值守'
        },
        {
          icon: S.iconAiPos,
          title: '精准理解'
        }
      ]
    },
    useCase: {
      title: '使用案例',
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
        }
      ]
    }
  },
  enterprisePage: {
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
    intelligentPlatformServiceValue: {
      title: '智能化平台服务价值',
      items: [
        {
          img: S.imgEntRobot,
          title: '机器人导航节省人力成本',
          desc: '企业80%重复、相似的问题可以通过智能机器人解决，剩余的人力可做更精细化的价值服务。'
        },
        {
          img: S.imgEntIntelligentQuality,
          title: '智能质检建立统一标准',
          desc: '智能质检，建立通过标准的质检模型，减少人工质检因质检人员不同，疲劳程度不同而造成的误差。'
        },
        {
          img: S.imgEntHotPoint,
          title: '热点价值分析',
          desc: '企业80%重复、相似的问题可以通过智能机器人解决，剩余的人力可做更精细化的价值服务。'
        }
      ]
    },
    bigDataAppSystem: {
      title: '大数据应用系统',
      items: [
        '高性能',
        '加速数据洞察',
        '读写分离',
        '运维成本低'
      ]
    },
    callCenter: {
      title: '智能呼叫中心',
      desc: '运行稳定安全可靠，帮助企业快速搭建集电话、在线交流、音视频通话为一体的客户联络平台。<br><br>为企业业务提供坚实稳定、融合统一的通信基座，致力于提升企业服务与营销的数智化竞争力。'
    },
    gaeBms: {
      title: '政企业务管理系统',
      desc: '能够提供实时、相关、准确、完整的数据，为管理者提供决策依据的一种软件。'
    },
    customerManage: {
      title: '让企业更好的管理客户  提升企业效能',
      items: [
        {
          icon: S.iconEntContact,
          title: '联络管理中心',
          desc: '多媒体联络信息，来电弹屏'
        },
        {
          icon: S.iconEntCustomer,
          title: '客户资料中心',
          desc: '客户资料收集，绑定，客户服务历史信息'
        },
        {
          icon: S.iconEntWorkorder,
          title: '工单中心',
          desc: '工单创建，工单处理流转'
        },
        {
          icon: S.iconEntSms,
          title: '短信发送管理',
          desc: '实时跟踪，高效便捷，保证服务时效性'
        },
        {
          icon: S.iconEntSettings,
          title: '配置中心',
          desc: '规范业务管理，实现工单模板，客户模板，报表可配置化处理，快速自定义新业务'
        },
        {
          icon: S.iconEntOutcall,
          title: '预览外呼中心',
          desc: '外呼场景，任务，名单，再联络管理'
        },
        {
          icon: S.iconEntPermission,
          title: '用户权限',
          desc: '对菜单进行权限设置，企业用户分类管理'
        },
        {
          icon: S.iconEntKnowledge,
          title: '知识中心',
          desc: '知识库管理，查询'
        }
      ]
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
    supportService: {
      title: '提供全方位多应用系统支撑服务',
      items: [
        {
          icon: S.iconEntBusinessSupport,
          title: '业务支撑系统',
          desc: '面向市场营销和客户服务等企业前端的应用支撑平台，业务和财务等内部运营的重要环节。'
        },
        {
          icon: S.iconEntManagementSupport,
          title: '管理支撑系统',
          desc: '面向不同用户和角色，提供统一接入和一站式使用体验。'
        },
        '',
        {
          icon: S.iconEntDataApply,
          title: '企业数据应用',
          desc: '面向企业数据的应用、以支撑数据共享和分析为目标的支撑系统域。主要包括运营数据存储。'
        },
        {
          icon: S.iconEntOperationSupport,
          title: '运营支撑系统',
          desc: '实现对产品和销售品的全网、统一、共享、高效管理。'
        },
        {
          icon: S.iconEntItGovernance,
          title: 'IT管控系统',
          desc: '针对业务流转的关键环节实现业务交付过程的实时监控。'
        }
      ]
    },
    advantage: {
      title: '我们的核心优势',
      items: [
        {
          title: '① 一站式',
          desc: '全面满足多种角色的不同需求'
        },
        {
          title: '② 安全可信',
          desc: '据表、字段、数据记录、服务等不同层级的安全保障'
        },
        {
          title: '③ 可扩展',
          desc: '可对接各种PASS层服务、各种数据资源、可扩展数据作业流程、标准体系及知识库等'
        },
        {
          title: '④ 应用丰富',
          desc: '云搜、综合查询、电子档案、布控预警、标签系统、关系图谱分析、大数据自助分析平台'
        }
      ]
    },
    ems: {
      title: '企业管理系统',
      desc: '是指能够体现企业管理的大部分职能（包括决策、计划、组织、领导、监控、分析等等），能够提供实时、相关、准确、完整的数据，为管理者提供决策依据的一种软件。'
    },
    advantagesOfTechnicalSolutions: {
      title: '中玑信拓|技术方案优势',
      items: [
        {
          title: '优势一',
          desc: '基于成熟原型的快速定制化开发，原型案例丰富，开发方法先进，100%贴合用户需求'
        },
        {
          title: '优势二',
          desc: '极致敏捷化开发过程、开发节奏轻快，输出物明确，快速反馈、交付；快速试错，快速变更'
        },
        {
          title: '优势三',
          desc: '最新的互联网开发技术栈，主流前后端技术，运用主流数据库、中间件'
        },
        {
          title: '优势四',
          desc: '拥抱主流、成熟的技术标准，架构层次合理，系统结构清晰，扩展性强'
        },
        {
          title: '优势五',
          desc: '善于以用户视角思考，追求用户体验、前端技术高超，产品体验上佳'
        },
        {
          title: '优势六',
          desc: '开源风格的开发组织，代码质量高，100%源代码交付'
        }
      ]
    }
  }
}
