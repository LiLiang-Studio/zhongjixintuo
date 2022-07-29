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
      link: '/'
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
  }
}
