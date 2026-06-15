import type { RobotProduct, CategoryInfo } from '@/types';

export const categories: CategoryInfo[] = [
  {
    id: 'welding',
    name: '焊接机器人',
    icon: 'Wand2',
    description: '高精度六轴焊接机器人，支持弧焊、点焊、激光焊等多种工艺，适用于汽车、工程机械、钢结构等行业',
    shortDesc: '弧焊 / 点焊 / 激光焊'
  },
  {
    id: 'palletizing',
    name: '码垛机器人',
    icon: 'Package',
    description: '大负载高速码垛机器人，配合视觉系统可实现多品种混线码垛，广泛应用于食品、医药、化工等行业',
    shortDesc: '搬运 / 码垛 / 上下料'
  },
  {
    id: 'spraying',
    name: '喷涂机器人',
    icon: 'Paintbrush',
    description: '防爆型喷涂机器人，轨迹精度高，漆膜均匀，适用于汽车零部件、家电、家具等表面喷涂作业',
    shortDesc: '喷涂 / 涂胶 / 表面处理'
  },
  {
    id: 'inspection',
    name: '检测机器人',
    icon: 'Search',
    description: '搭载AI视觉和多传感器的检测机器人，可进行尺寸测量、外观缺陷检测、焊缝探伤等质量检测',
    shortDesc: '视觉检测 / 尺寸测量 / 缺陷检测'
  }
];

export const products: RobotProduct[] = [
  {
    id: 'welding-1',
    name: 'RH-1450 弧焊机器人',
    category: 'welding',
    categoryName: '焊接机器人',
    model: 'RH-1450',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=industrial%20robotic%20arm%20welding%20machine%20on%20dark%20background%20studio%20shot%20professional%20product%20photography&image_size=square_hd',
    description: 'RH-1450 是一款专为弧焊应用设计的六轴工业机器人，采用高精度减速器和伺服电机，确保焊接轨迹的精准控制。搭配专业焊接电源和送丝系统，可实现高质量的MIG/MAG/TIG焊接。',
    features: [
      '六轴联动，工作范围广，姿态灵活',
      '重复定位精度达±0.05mm，焊缝质量稳定',
      '支持多种焊接工艺参数存储与调用',
      '内置防碰撞检测，保护机器人和工件',
      '可搭配焊接变位机实现协调焊接',
      '支持离线编程，缩短调试周期'
    ],
    specifications: {
      payload: '6 kg',
      reach: '1450 mm',
      repeatability: '±0.05 mm',
      axisCount: '6轴',
      maxSpeed: '210°/s (J1)',
      axisSpeed: 'J1: 210°/s, J2: 180°/s, J3: 220°/s',
      weight: '175 kg',
      installation: '地面安装 / 倒挂安装 / 侧挂安装',
      protection: 'IP67 (手腕), IP54 (本体)',
      driveSystem: '交流伺服电机',
      workingTemp: '0°C ~ 45°C',
      powerSupply: '3相 AC380V ±10% 50/60Hz'
    },
    applications: ['汽车零部件焊接', '工程机械结构件', '农业机械', '钢结构', '五金家具', '压力容器']
  },
  {
    id: 'welding-2',
    name: 'RH-2000 点焊机器人',
    category: 'welding',
    categoryName: '焊接机器人',
    model: 'RH-2000',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=heavy%20duty%20industrial%20spot%20welding%20robot%20arm%20dark%20studio%20product%20photo&image_size=square_hd',
    description: 'RH-2000 点焊机器人专为汽车白车身焊接设计，大负载能力可搭载中型点焊钳。高加速性能确保高效率生产，是汽车制造生产线的理想选择。',
    features: [
      '大负载设计，支持重型点焊钳',
      '高速度、高加速度，节拍时间短',
      '内置点焊时序控制，焊点质量稳定',
      '紧凑设计，适合密集工位布局',
      '支持多机器人协调作业',
      '维护成本低，运行寿命长'
    ],
    specifications: {
      payload: '200 kg',
      reach: '2000 mm',
      repeatability: '±0.2 mm',
      axisCount: '6轴',
      maxSpeed: '150°/s (J1)',
      axisSpeed: 'J1: 150°/s, J2: 120°/s, J3: 160°/s',
      weight: '580 kg',
      installation: '地面安装 / 倒挂安装',
      protection: 'IP65 (手腕), IP54 (本体)',
      driveSystem: '交流伺服电机 + 高精度RV减速器',
      workingTemp: '0°C ~ 45°C',
      powerSupply: '3相 AC380V ±10% 50/60Hz'
    },
    applications: ['汽车白车身焊接', '底盘部件焊接', '车身总成焊装', '摩托车车架', '五金卫浴']
  },
  {
    id: 'palletizing-1',
    name: 'RM-180 码垛机器人',
    category: 'palletizing',
    categoryName: '码垛机器人',
    model: 'RM-180',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=industrial%20palletizing%20robotic%20arm%20stacking%20boxes%20factory%20background%20professional&image_size=square_hd',
    description: 'RM-180 是一款专业码垛机器人，四轴设计专为搬运和码垛应用优化。大工作半径和高负载能力，可满足大多数生产线的码垛需求。',
    features: [
      '四轴专用设计，码垛效率更高',
      '负载能力强，可搬运重型货物',
      '运动速度快，节拍可达1200次/小时',
      '示教简单，多种码垛模式可选',
      '可搭配视觉系统实现无序抓取',
      '可靠性高，维护成本低'
    ],
    specifications: {
      payload: '180 kg',
      reach: '3100 mm',
      repeatability: '±0.2 mm',
      axisCount: '4轴',
      maxSpeed: '1200 次/小时',
      axisSpeed: 'J1: 100°/s, J2: 90°/s, J3: 100°/s, J4: 360°/s',
      weight: '980 kg',
      installation: '地面安装',
      protection: 'IP65',
      driveSystem: '交流伺服电机',
      workingTemp: '0°C ~ 45°C',
      powerSupply: '3相 AC380V ±10% 50/60Hz'
    },
    applications: ['食品饮料码垛', '医药化工码垛', '物流仓储', '家电制造', '建材行业', '快递分拣']
  },
  {
    id: 'palletizing-2',
    name: 'RM-50 高速搬运机器人',
    category: 'palletizing',
    categoryName: '码垛机器人',
    model: 'RM-50',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=high%20speed%20industrial%20pick%20and%20place%20robot%20arm%20clean%20factory%20product%20photo&image_size=square_hd',
    description: 'RM-50 高速搬运机器人专为轻载高速应用设计，适用于电子产品、食品包装等行业的快速搬运和上下料作业。',
    features: [
      '轻量化设计，运动速度快',
      '节拍时间短，生产效率高',
      '重复定位精度高，适合精密装配',
      '能耗低，运行成本低',
      '结构紧凑，节省安装空间',
      '可多台组线，实现柔性生产'
    ],
    specifications: {
      payload: '50 kg',
      reach: '2000 mm',
      repeatability: '±0.1 mm',
      axisCount: '4轴',
      maxSpeed: '1800 次/小时',
      axisSpeed: 'J1: 180°/s, J2: 160°/s, J3: 180°/s, J4: 540°/s',
      weight: '320 kg',
      installation: '地面安装 / 倒挂安装',
      protection: 'IP65',
      driveSystem: '交流伺服电机',
      workingTemp: '0°C ~ 45°C',
      powerSupply: '3相 AC220V ±10% 50/60Hz'
    },
    applications: ['电子装配', '食品包装', '医药生产', '日化用品', '3C产品', '注塑机上下料']
  },
  {
    id: 'spraying-1',
    name: 'RS-110 防爆喷涂机器人',
    category: 'spraying',
    categoryName: '喷涂机器人',
    model: 'RS-110',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=explosion%20proof%20industrial%20spray%20painting%20robot%20arm%20paint%20booth%20professional%20photo&image_size=square_hd',
    description: 'RS-110 防爆喷涂机器人通过严格的防爆认证，可在易燃易爆的喷涂环境中安全运行。轨迹精度高，漆膜厚度均匀，帮助企业提升喷涂质量、减少涂料浪费。',
    features: [
      '整机防爆认证，安全可靠',
      '六轴联动，复杂工件无死角喷涂',
      '轨迹精度高，漆膜均匀性好',
      '涂料利用率高，节省材料成本',
      '可离线编程，调试不影响生产',
      '适合多品种小批量柔性生产'
    ],
    specifications: {
      payload: '10 kg',
      reach: '1100 mm',
      repeatability: '±0.15 mm',
      axisCount: '6轴',
      maxSpeed: '3000 mm/s',
      axisSpeed: 'J1: 180°/s, J2: 150°/s, J3: 200°/s',
      weight: '150 kg',
      installation: '地面安装 / 倒挂安装 / 侧挂安装',
      protection: 'Ex d IIB T4 防爆等级',
      driveSystem: '防爆伺服电机',
      workingTemp: '5°C ~ 45°C',
      powerSupply: '3相 AC380V ±10% 50/60Hz'
    },
    applications: ['汽车零部件喷涂', '家电外壳喷涂', '家具喷涂', '五金表面处理', '塑胶件喷涂', '工程机械涂装']
  },
  {
    id: 'spraying-2',
    name: 'RS-210 长臂喷涂机器人',
    category: 'spraying',
    categoryName: '喷涂机器人',
    model: 'RS-210',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=long%20arm%20industrial%20spraying%20robot%20large%20workpiece%20painting%20professional%20industrial&image_size=square_hd',
    description: 'RS-210 长臂喷涂机器人拥有更大的工作范围，适用于大型工件的喷涂作业。配合第七轴行走机构，可覆盖更长的生产线。',
    features: [
      '长臂设计，工作范围大',
      '可搭载多种喷涂设备',
      '支持静电喷涂，涂料利用率高',
      '可配置多台协同作业',
      '支持多种喷涂轨迹规划',
      '维护方便，运行稳定'
    ],
    specifications: {
      payload: '15 kg',
      reach: '2100 mm',
      repeatability: '±0.2 mm',
      axisCount: '6轴',
      maxSpeed: '2500 mm/s',
      axisSpeed: 'J1: 120°/s, J2: 110°/s, J3: 130°/s',
      weight: '380 kg',
      installation: '地面安装 / 倒挂安装 / 侧挂安装',
      protection: 'Ex d IIB T4 防爆等级',
      driveSystem: '防爆伺服电机',
      workingTemp: '5°C ~ 45°C',
      powerSupply: '3相 AC380V ±10% 50/60Hz'
    },
    applications: ['客车整车喷涂', '大型工程机械', '风电叶片', '船舶零部件', '轨道车辆', '集装箱']
  },
  {
    id: 'inspection-1',
    name: 'RI-900 视觉检测机器人',
    category: 'inspection',
    categoryName: '检测机器人',
    model: 'RI-900',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=industrial%20vision%20inspection%20robot%20arm%20with%20camera%20quality%20control%20factory%20photo&image_size=square_hd',
    description: 'RI-900 视觉检测机器人集成高精度工业相机和AI视觉算法，可对产品进行外观缺陷检测、尺寸测量、字符识别等质量检测，替代人工目检，提升检测效率和一致性。',
    features: [
      '搭载2000万像素工业相机',
      'AI深度学习算法，检测准确率高',
      '六轴机器人灵活定位，检测无盲区',
      '支持多种检测任务切换',
      '检测数据自动记录和统计',
      '可对接MES系统，实现质量追溯'
    ],
    specifications: {
      payload: '5 kg',
      reach: '900 mm',
      repeatability: '±0.02 mm',
      axisCount: '6轴',
      maxSpeed: '2000 mm/s',
      axisSpeed: 'J1: 250°/s, J2: 220°/s, J3: 280°/s',
      weight: '120 kg',
      installation: '地面安装 / 倒挂安装',
      protection: 'IP65',
      driveSystem: '交流伺服电机',
      cameraResolution: '2000万像素',
      detectionAccuracy: '±0.01 mm'
    },
    applications: ['3C产品外观检测', '汽车零部件检测', '医疗器件检测', '五金件尺寸测量', '印刷品缺陷检测', '包装完整性检测']
  },
  {
    id: 'inspection-2',
    name: 'RI-1500 三维扫描检测机器人',
    category: 'inspection',
    categoryName: '检测机器人',
    model: 'RI-1500',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=industrial%203d%20scanning%20inspection%20robot%20arm%20laser%20measurement%20metrology%20lab&image_size=square_hd',
    description: 'RI-1500 三维扫描检测机器人配备激光三维扫描仪，可对复杂工件进行高精度三维尺寸检测和逆向工程。适用于汽车、航空航天等对尺寸精度要求高的行业。',
    features: [
      '激光三维扫描，快速获取点云数据',
      '扫描精度达±0.03mm',
      '自动生成检测报告',
      '支持与CAD数模对比分析',
      '可实现全自动化检测',
      '数据可追溯，便于质量分析'
    ],
    specifications: {
      payload: '10 kg',
      reach: '1500 mm',
      repeatability: '±0.03 mm',
      axisCount: '6轴',
      maxSpeed: '1500 mm/s',
      axisSpeed: 'J1: 180°/s, J2: 150°/s, J3: 200°/s',
      weight: '220 kg',
      installation: '地面安装',
      protection: 'IP54',
      driveSystem: '交流伺服电机',
      scanAccuracy: '±0.03 mm',
      scanSpeed: '480,000 点/秒'
    },
    applications: ['汽车零部件尺寸检测', '航空航天构件检测', '模具检测', '铸件检测', '逆向工程', '工装夹具检测']
  }
];

export const getProductsByCategory = (category: string): RobotProduct[] => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string): RobotProduct | undefined => {
  return products.find(p => p.id === id);
};

export const getCategoryInfo = (categoryId: string): CategoryInfo | undefined => {
  return categories.find(c => c.id === categoryId);
};
