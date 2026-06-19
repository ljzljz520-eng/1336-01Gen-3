import express from 'express';
import cors from 'cors';
import { createConsultation, getAllConsultations, updateConsultationStatus } from './db.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: '智擎机器人 API 服务正常运行' });
});

app.post('/api/consultations', (req, res) => {
  const { company, contact, phone, email, industry, requirement } = req.body;

  const errors = {};
  if (!company?.trim()) errors.company = '请输入公司名称';
  if (!contact?.trim()) errors.contact = '请输入联系人姓名';
  if (!phone?.trim()) {
    errors.phone = '请输入手机号码';
  } else if (!/^1[3-9]\d{9}$/.test(phone.trim())) {
    errors.phone = '请输入正确的手机号码';
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = '请输入正确的邮箱地址';
  }
  if (!industry?.trim()) errors.industry = '请选择所属行业';
  if (!requirement?.trim()) {
    errors.requirement = '请简要描述您的需求';
  } else if (requirement.trim().length < 10) {
    errors.requirement = '需求描述至少10个字';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: '表单验证失败',
      errors
    });
  }

  try {
    const consultation = createConsultation({
      company: company.trim(),
      contact: contact.trim(),
      phone: phone.trim(),
      email: email?.trim() || null,
      industry: industry.trim(),
      requirement: requirement.trim()
    });

    console.log(`[${new Date().toISOString()}] 新的预约咨询：ID=${consultation.id}, 公司=${consultation.company}, 联系人=${consultation.contact}`);

    res.status(201).json({
      success: true,
      message: '预约提交成功，我们将在24小时内与您联系',
      data: {
        id: consultation.id,
        company: consultation.company,
        contact: consultation.contact,
        phone: consultation.phone,
        createdAt: consultation.created_at
      }
    });
  } catch (error) {
    console.error('创建预约失败:', error);
    res.status(500).json({
      success: false,
      message: '服务器内部错误，请稍后重试'
    });
  }
});

app.get('/api/consultations', (req, res) => {
  const { status } = req.query;
  try {
    const consultations = getAllConsultations(status || null);
    res.json({
      success: true,
      data: consultations
    });
  } catch (error) {
    console.error('获取预约列表失败:', error);
    res.status(500).json({
      success: false,
      message: '服务器内部错误'
    });
  }
});

app.patch('/api/consultations/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({
      success: false,
      message: '状态不能为空'
    });
  }

  try {
    const updated = updateConsultationStatus(id, status);
    if (updated) {
      res.json({
        success: true,
        data: updated
      });
    } else {
      res.status(404).json({
        success: false,
        message: '预约记录不存在'
      });
    }
  } catch (error) {
    console.error('更新预约状态失败:', error);
    res.status(500).json({
      success: false,
      message: '服务器内部错误'
    });
  }
});

app.use((err, req, res, next) => {
  console.error('服务器错误:', err);
  res.status(500).json({
    success: false,
    message: '服务器内部错误'
  });
});

app.listen(PORT, () => {
  console.log(`
  🚀 智擎机器人 API 服务已启动
  📍 服务地址: http://localhost:${PORT}
  📊 健康检查: http://localhost:${PORT}/api/health
  📝 预约提交: POST http://localhost:${PORT}/api/consultations
  📋 预约列表: GET http://localhost:${PORT}/api/consultations
  `);
});
