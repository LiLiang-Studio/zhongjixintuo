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
      link: '/'
    },
    {
      label: 'AI',
      link: '/'
    },
    {
      label: '企业',
      children: [
        {
          label: '互联网客服解决方案',
          link: '/'
        },
        {
          label: '项目管理解决方案',
          link: '/'
        },
        {
          label: '销售管理解决方案',
          link: '/'
        }
      ]
    },
    {
      label: '关于我们',
      link: '/'
    }
  ],
  partner: {
    title: '合作伙伴',
    items: []
  }
}
