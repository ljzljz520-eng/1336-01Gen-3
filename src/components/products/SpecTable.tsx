import type { RobotProduct } from '@/types';

interface SpecTableProps {
  specifications: RobotProduct['specifications'];
  highlighted?: string[];
}

const specLabels: Record<string, string> = {
  payload: '负载能力',
  reach: '工作半径',
  repeatability: '重复定位精度',
  axisCount: '轴数',
  maxSpeed: '最大速度',
  axisSpeed: '各轴速度',
  weight: '本体重量',
  installation: '安装方式',
  protection: '防护等级',
  driveSystem: '驱动方式',
  workingTemp: '工作温度',
  powerSupply: '电源要求',
  cameraResolution: '相机分辨率',
  detectionAccuracy: '检测精度',
  scanAccuracy: '扫描精度',
  scanSpeed: '扫描速度',
};

const SpecTable = ({ specifications, highlighted = [] }: SpecTableProps) => {
  const entries = Object.entries(specifications).filter(
    ([, value]) => value !== undefined && value !== ''
  );

  const keySpecs = ['payload', 'reach', 'repeatability', 'axisCount'];
  const highlightSet = new Set([...keySpecs, ...highlighted]);

  return (
    <div className="overflow-x-auto rounded-lg border border-steel-200">
      <table className="spec-table min-w-full">
        <thead>
          <tr>
            <th className="w-1/3">参数名称</th>
            <th>参数值</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([key, value]) => (
            <tr key={key} className={highlightSet.has(key) ? 'bg-industrial-orange-50/50' : ''}>
              <td className="font-medium text-steel-700">
                <div className="flex items-center gap-2">
                  {highlightSet.has(key) && (
                    <span className="w-1.5 h-1.5 bg-industrial-orange-500 rounded-full" />
                  )}
                  {specLabels[key] || key}
                  {highlightSet.has(key) && (
                    <span className="text-xs text-industrial-orange-500 font-normal">
                      (核心参数)
                    </span>
                  )}
                </div>
              </td>
              <td className={highlightSet.has(key) ? 'text-industrial-orange-600 font-semibold font-mono' : 'text-steel-900 font-mono'}>
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecTable;
