import type { CaseStudy } from '@/types';

export const cases: CaseStudy[] = [
  {
    id: 'case-1',
    title: '汽车零部件焊接产线自动化升级',
    industry: '汽车制造',
    client: '某知名汽车零部件公司',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=automotive%20welding%20production%20line%20industrial%20robots%20factory%20manufacturing&image_size=landscape_16_9',
    problem: '客户原有焊接产线依赖人工焊接，焊接质量不稳定，焊缝合格率仅85%，且工人劳动强度大，招工困难。产线节拍无法满足日益增长的订单需求，成为产能瓶颈。',
    challenges: [
      '人工焊接质量一致性差，焊缝合格率低',
      '生产效率低，单班产能仅800件',
      '工人劳动强度大，流动性高',
      '焊接车间环境恶劣，职业健康风险高'
    ],
    solution: {
      robots: ['RH-1450 弧焊机器人 x 6台', '焊接变位机 x 3台'],
      system: '采用双工位焊接工作站，机器人与变位机协调运动，实现工件一次装夹完成全部焊接工序。配套焊接烟尘净化系统，改善车间环境。',
      implementation: '项目实施周期8周，其中设计3周，制造安装2周，调试培训3周。'
    },
    results: {
      before: {
        efficiency: 800,
        cost: 45,
        yieldRate: 85
      },
      after: {
        efficiency: 2400,
        cost: 18,
        yieldRate: 99.2
      },
      roi: '14个月'
    }
  },
  {
    id: 'case-2',
    title: '食品饮料码垛线智能改造',
    industry: '食品饮料',
    client: '某大型食品集团',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=food%20beverage%20factory%20palletizing%20robot%20production%20line%20automation&image_size=landscape_16_9',
    problem: '客户成品码垛工位采用人工码垛，每班次需要6名工人，人力成本高且码垛速度跟不上包装线速度。产品规格多，人工码垛容易出错，且存在工伤风险。',
    challenges: [
      '人力成本高，每班次需6名码垛工人',
      '码垛速度跟不上包装线节拍',
      '产品规格多达20余种，换型麻烦',
      '人工码垛易出错，存在工伤风险'
    ],
    solution: {
      robots: ['RM-180 码垛机器人 x 2台', '视觉定位系统 x 2套'],
      system: '采用机器人码垛工作站，配合3D视觉系统实现多品种产品的自动识别和码垛。码垛程序支持快速切换，适应20余种产品规格。配套自动供栈和AGV输送系统。',
      implementation: '项目实施周期6周，边生产边改造，最大限度减少停产损失。'
    },
    results: {
      before: {
        efficiency: 600,
        cost: 6,
        yieldRate: 97
      },
      after: {
        efficiency: 1200,
        cost: 1,
        yieldRate: 99.9
      },
      roi: '10个月'
    }
  },
  {
    id: 'case-3',
    title: '家电外壳喷涂线转型升级',
    industry: '家电制造',
    client: '某知名家电品牌',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=home%20appliance%20spray%20painting%20robot%20production%20line%20paint%20booth%20factory&image_size=landscape_16_9',
    problem: '客户原有手工喷涂线漆膜质量不稳定，涂料浪费严重，喷涂工招聘困难且人员流动大。随着环保要求提高，需要对喷涂线进行全面升级改造。',
    challenges: [
      '人工喷涂漆膜厚度不均匀，色差大',
      '涂料利用率仅35%，浪费严重',
      '喷涂工缺口大，人员流动率高',
      '环保排放不达标，面临整改压力'
    ],
    solution: {
      robots: ['RS-110 防爆喷涂机器人 x 4台', '静电旋杯喷枪 x 4套'],
      system: '采用"地轨+机器人"的喷涂方案，四台机器人协同作业，配合静电旋杯喷涂技术。配套喷漆室和废气处理系统，满足环保排放标准。采用离线编程系统，快速换型。',
      implementation: '项目实施周期12周，整线设计、制造、安装、调试一体化交付。'
    },
    results: {
      before: {
        efficiency: 500,
        cost: 35,
        yieldRate: 88
      },
      after: {
        efficiency: 1200,
        cost: 8,
        yieldRate: 98.5
      },
      roi: '18个月'
    }
  },
  {
    id: 'case-4',
    title: '3C产品外观检测全自动化',
    industry: '3C电子',
    client: '某大型消费电子代工厂',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=3c%20electronics%20visual%20inspection%20robot%20quality%20control%20factory%20automation&image_size=landscape_16_9',
    problem: '客户手机外壳外观检测采用人工目检方式，检测标准不统一，漏检率高，且检测速度跟不上产线节拍。随着产品外观要求提高，人工检测已无法满足质量要求。',
    challenges: [
      '人工检测标准不一致，主观性强',
      '漏检率高达3%，客户投诉多',
      '检测速度慢，每条线需12名检测员',
      '长时间检测对工人视力伤害大'
    ],
    solution: {
      robots: ['RI-900 视觉检测机器人 x 8台', 'AI视觉检测系统 x 8套'],
      system: '采用机器人+AI视觉的检测方案，机器人带动相机对产品进行多角度拍摄，AI算法实时分析缺陷。支持划痕、压伤、色差、毛边等多种缺陷类型检测。检测数据自动上传MES系统。',
      implementation: '项目实施周期10周，分两阶段上线，逐步替代人工检测。'
    },
    results: {
      before: {
        efficiency: 1800,
        cost: 12,
        yieldRate: 97
      },
      after: {
        efficiency: 3600,
        cost: 2,
        yieldRate: 99.8
      },
      roi: '12个月'
    }
  }
];

export const getCaseById = (id: string): CaseStudy | undefined => {
  return cases.find(c => c.id === id);
};

export const getFeaturedCases = (): CaseStudy[] => {
  return cases.slice(0, 3);
};
