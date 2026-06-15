export type RobotCategory = 'welding' | 'palletizing' | 'spraying' | 'inspection';

export interface RobotProduct {
  id: string;
  name: string;
  category: RobotCategory;
  categoryName: string;
  model: string;
  image: string;
  description: string;
  features: string[];
  specifications: {
    payload: string;
    reach: string;
    repeatability: string;
    axisSpeed?: string;
    weight: string;
    installation: string;
    protection: string;
    maxSpeed?: string;
    axisCount?: string;
    driveSystem?: string;
    [key: string]: string | undefined;
  };
  applications: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  client: string;
  image: string;
  problem: string;
  challenges: string[];
  solution: {
    robots: string[];
    system: string;
    implementation: string;
  };
  results: {
    before: {
      efficiency: number;
      cost: number;
      yieldRate: number;
      [key: string]: number;
    };
    after: {
      efficiency: number;
      cost: number;
      yieldRate: number;
      [key: string]: number;
    };
    roi: string;
  };
}

export interface CategoryInfo {
  id: RobotCategory;
  name: string;
  icon: string;
  description: string;
  shortDesc: string;
}

export interface ConsultFormData {
  company: string;
  contact: string;
  phone: string;
  email: string;
  industry: string;
  requirement: string;
}
