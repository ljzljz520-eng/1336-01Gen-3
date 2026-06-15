import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import type { ConsultFormData } from '@/types';

interface ContactFormProps {
  onSuccess?: () => void;
}

const industries = [
  '汽车制造',
  '3C电子',
  '食品饮料',
  '医药化工',
  '家电制造',
  '工程机械',
  '物流仓储',
  '其他行业',
];

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState<ConsultFormData>({
    company: '',
    contact: '',
    phone: '',
    email: '',
    industry: '',
    requirement: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ConsultFormData, string>> = {};

    if (!formData.company.trim()) {
      newErrors.company = '请输入公司名称';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = '请输入联系人姓名';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '请输入手机号码';
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入正确的手机号码';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入正确的邮箱地址';
    }

    if (!formData.industry) {
      newErrors.industry = '请选择所属行业';
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = '请简要描述您的需求';
    } else if (formData.requirement.trim().length < 10) {
      newErrors.requirement = '需求描述至少10个字';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ConsultFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    if (onSuccess) {
      onSuccess();
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-xl p-8 border border-steel-200 text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold text-steel-900 mb-3">提交成功！</h3>
        <p className="text-steel-500 mb-6">
          感谢您的咨询，我们的专业顾问将在
          <span className="text-industrial-orange-500 font-semibold"> 24小时内 </span>
          与您联系，为您提供免费的方案评估。
        </p>
        <div className="bg-steel-50 rounded-lg p-4 text-left">
          <p className="text-sm text-steel-600 mb-2">
            <span className="font-medium">提交的信息：</span>
          </p>
          <ul className="text-sm text-steel-500 space-y-1">
            <li>公司：{formData.company}</li>
            <li>联系人：{formData.contact}</li>
            <li>手机：{formData.phone}</li>
          </ul>
        </div>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              company: '',
              contact: '',
              phone: '',
              email: '',
              industry: '',
              requirement: '',
            });
          }}
          className="mt-6 text-industrial-orange-500 hover:text-industrial-orange-600 font-medium text-sm"
        >
          再次提交
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-steel-200 shadow-sm">
      <h3 className="text-xl font-bold text-steel-900 mb-2">预约免费方案评估</h3>
      <p className="text-steel-500 text-sm mb-6">
        填写以下信息，我们的自动化专家将为您提供一对一咨询服务
      </p>

      <div className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-steel-700 mb-2">
              公司名称 <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="请输入公司全称"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial-orange-500/20 transition-all ${
                errors.company ? 'border-rose-400 bg-rose-50' : 'border-steel-300 hover:border-steel-400'
              }`}
            />
            {errors.company && (
              <p className="mt-1 text-sm text-rose-500">{errors.company}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-steel-700 mb-2">
              联系人 <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="请输入您的姓名"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial-orange-500/20 transition-all ${
                errors.contact ? 'border-rose-400 bg-rose-50' : 'border-steel-300 hover:border-steel-400'
              }`}
            />
            {errors.contact && (
              <p className="mt-1 text-sm text-rose-500">{errors.contact}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-steel-700 mb-2">
              手机号码 <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="请输入11位手机号"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial-orange-500/20 transition-all ${
                errors.phone ? 'border-rose-400 bg-rose-50' : 'border-steel-300 hover:border-steel-400'
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-rose-500">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-steel-700 mb-2">
              电子邮箱
              <span className="text-steel-400 font-normal">（选填）</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="请输入邮箱地址"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial-orange-500/20 transition-all ${
                errors.email ? 'border-rose-400 bg-rose-50' : 'border-steel-300 hover:border-steel-400'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-rose-500">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-steel-700 mb-2">
            所属行业 <span className="text-rose-500">*</span>
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial-orange-500/20 transition-all appearance-none bg-white cursor-pointer ${
              errors.industry ? 'border-rose-400 bg-rose-50' : 'border-steel-300 hover:border-steel-400'
            }`}
          >
            <option value="">请选择行业</option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p className="mt-1 text-sm text-rose-500">{errors.industry}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-steel-700 mb-2">
            需求描述 <span className="text-rose-500">*</span>
          </label>
          <textarea
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            rows={4}
            placeholder="请简要描述您的产线情况、自动化需求或遇到的问题..."
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial-orange-500/20 transition-all resize-none ${
              errors.requirement ? 'border-rose-400 bg-rose-50' : 'border-steel-300 hover:border-steel-400'
            }`}
          />
          {errors.requirement && (
            <p className="mt-1 text-sm text-rose-500">{errors.requirement}</p>
          )}
          <p className="mt-1 text-xs text-steel-400 text-right">
            {formData.requirement.length} / 500 字
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary !py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              提交中...
            </>
          ) : (
            '立即提交预约'
          )}
        </button>

        <p className="text-xs text-steel-400 text-center">
          提交即表示您同意我们的
          <a href="#" className="text-industrial-orange-500 hover:underline">隐私政策</a>
          ，我们承诺保护您的信息安全
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
