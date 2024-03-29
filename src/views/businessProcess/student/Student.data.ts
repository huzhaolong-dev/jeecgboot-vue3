import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '身份类型[1-身份证,2-护照]',
    align:"center",
    dataIndex: 'idType_dictText'
  },
  {
    title: '身份证号码',
    align:"center",
    dataIndex: 'idCard'
  },
  {
    title: '名称',
    align:"center",
    dataIndex: 'name'
  },
  {
    title: '拼音',
    align:"center",
    dataIndex: 'pinyin'
  },
  {
    title: '性别[1-男,2-女]',
    align:"center",
    dataIndex: 'sex_dictText'
  },
  {
    title: '头像Url地址',
    align:"center",
    dataIndex: 'avatarUrl',
    customRender:render.renderImage,
  },
  {
    title: '学业阶段[1-本科在读,2-专科在读,3-本科毕业,4-专科毕业,5-研究生在读,6-研究生毕业,7-普通高中在读,8-国际高中在读]',
    align:"center",
    dataIndex: 'studyStage_dictText'
  },
  {
    title: '出生日期',
    align:"center",
    dataIndex: 'birthday',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
  },
  {
    title: '户口地',
    align:"center",
    dataIndex: 'registrationAddr'
  },
  {
    title: '出生地',
    align:"center",
    dataIndex: 'birthplaceAddr'
  },
  {
    title: '家庭地址',
    align:"center",
    dataIndex: 'homeAddr'
  },
  {
    title: '手机',
    align:"center",
    dataIndex: 'telephone'
  },
  {
    title: '紧急联系人手机',
    align:"center",
    dataIndex: 'emergencyPhone'
  },
  {
    title: '电子邮件地址',
    align:"center",
    dataIndex: 'email'
  },
  {
    title: '描述',
    align:"center",
    dataIndex: 'description'
  },
  {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "名称",
    field: "name",
    component: 'Input',
    //colProps: {span: 6},
  },
];

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '身份类型[1-身份证,2-护照]',
    field: 'idType',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode:"id_type"
    },
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入身份类型[1-身份证,2-护照]!'},
      ];
     },
  },
  {
    label: '身份证号码',
    field: 'idCard',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入身份证号码!'},
      ];
     },
  },
  {
    label: '名称',
    field: 'name',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入名称!'},
      ];
     },
  },
  {
    label: '拼音',
    field: 'pinyin',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入拼音!'},
      ];
     },
  },
  {
    label: '性别[1-男,2-女]',
    field: 'sex',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode:"sex"
    },
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入性别[1-男,2-女]!'},
      ];
     },
  },
  {
    label: '头像Url地址',
    field: 'avatarUrl',
    component: 'JImageUpload',
    componentProps:{
    },
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入头像Url地址!'},
      ];
     },
  },
  {
    label: '学业阶段[1-本科在读,2-专科在读,3-本科毕业,4-专科毕业,5-研究生在读,6-研究生毕业,7-普通高中在读,8-国际高中在读]',
    field: 'studyStage',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode:"study_stage"
    },
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入学业阶段[1-本科在读,2-专科在读,3-本科毕业,4-专科毕业,5-研究生在读,6-研究生毕业,7-普通高中在读,8-国际高中在读]!'},
      ];
     },
  },
  {
    label: '出生日期',
    field: 'birthday',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入出生日期!'},
      ];
     },
  },
  {
    label: '户口地',
    field: 'registrationAddr',
    component: 'Input',
  },
  {
    label: '出生地',
    field: 'birthplaceAddr',
    component: 'Input',
  },
  {
    label: '家庭地址',
    field: 'homeAddr',
    component: 'Input',
  },
  {
    label: '手机',
    field: 'telephone',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入手机!'},
      ];
     },
  },
  {
    label: '紧急联系人手机',
    field: 'emergencyPhone',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入紧急联系人手机!'},
      ];
     },
  },
  {
    label: '电子邮件地址',
    field: 'email',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入电子邮件地址!'},
      ];
     },
  },
  {
    label: '描述',
    field: 'description',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
  // TODO 主键隐藏字段，目前写死为ID
  {
    label: '',
	field: 'id',
	component: 'Input',
	show: false
  },
];

//子表列表数据
export const studentGradeColumns: BasicColumn[] = [
  {
    title: '雅思成绩',
    align:"center",
    dataIndex: 'ielts'
  },
  {
    title: '托福成绩',
    align:"center",
    dataIndex: 'toefl'
  },
  {
    title: 'GRE成绩',
    align:"center",
    dataIndex: 'gre'
  },
  {
    title: 'GMAT成绩',
    align:"center",
    dataIndex: 'gmat'
  },
  {
    title: 'GPA成绩',
    align:"center",
    dataIndex: 'gpa'
  },
  {
    title: '均分',
    align:"center",
    dataIndex: 'wam'
  },
  {
    title: '描述',
    align:"center",
    dataIndex: 'description'
  },
  {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
  },
];
//子表表单数据
export const studentGradeFormSchema: FormSchema[] = [
  // TODO 子表隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false
  },
  {
    label: '雅思成绩',
    field: 'ielts',
    component: 'InputNumber',
  },
  {
    label: '托福成绩',
    field: 'toefl',
    component: 'InputNumber',
  },
  {
    label: 'GRE成绩',
    field: 'gre',
    component: 'InputNumber',
  },
  {
    label: 'GMAT成绩',
    field: 'gmat',
    component: 'InputNumber',
  },
  {
    label: 'GPA成绩',
    field: 'gpa',
    component: 'InputNumber',
  },
  {
    label: '均分',
    field: 'wam',
    component: 'InputNumber',
  },
  {
    label: '描述',
    field: 'description',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
];
//子表列表数据
export const studentEduBackgroundColumns: BasicColumn[] = [
  {
    title: '名称',
    align:"center",
    dataIndex: 'name'
  },
  {
    title: '开始时间',
    align:"center",
    dataIndex: 'startDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
  },
  {
    title: '结束时间',
    align:"center",
    dataIndex: 'endDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
  },
  {
    title: '在读年级[first-一年级,second-二年级,third-三年级,forth-四年级,finish-已毕业]',
    align:"center",
    dataIndex: 'grade_dictText'
  },
  {
    title: '中国大学编码',
    align:"center",
    dataIndex: 'chUniversityCode_dictText'
  },
  {
    title: '中国专业分类编码',
    align:"center",
    dataIndex: 'chMajorCategoryCode_dictText'
  },
  {
    title: '中国专业编码',
    align:"center",
    dataIndex: 'chMajorCode_dictText'
  },
  {
    title: '描述',
    align:"center",
    dataIndex: 'description'
  },
  {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
  },
];
//子表表单数据
export const studentEduBackgroundFormSchema: FormSchema[] = [
  // TODO 子表隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false
  },
  {
    label: '名称',
    field: 'name',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入名称!'},
      ];
    },
  },
  {
    label: '开始时间',
    field: 'startDate',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入开始时间!'},
      ];
    },
  },
  {
    label: '结束时间',
    field: 'endDate',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入结束时间!'},
      ];
    },
  },
  {
    label: '在读年级[first-一年级,second-二年级,third-三年级,forth-四年级,finish-已毕业]',
    field: 'grade',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode:"grade"
    },
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入在读年级[first-一年级,second-二年级,third-三年级,forth-四年级,finish-已毕业]!'},
      ];
    },
  },
  {
    label: '内容',
    field: 'content',
    component: 'InputTextArea',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入内容!'},
      ];
    },
  },
  {
    label: '成果',
    field: 'results',
    component: 'InputTextArea',
  },
  {
    label: '中国大学编码',
    field: 'chUniversityCode',
    component: 'JSearchSelect',
    componentProps:{
      dict:"ch_university,ch_name,code"
    },
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入中国大学编码!'},
      ];
    },
  },
  {
    label: '中国专业分类编码',
    field: 'chMajorCategoryCode',
    component: 'JSearchSelect',
    componentProps:{
      dict:"ch_major_category,name,code"
    },
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入中国专业分类编码!'},
      ];
    },
  },
  {
    label: '中国专业编码',
    field: 'chMajorCode',
    component: 'JSearchSelect',
    componentProps:{
      dict:"ch_major_category,name,code"
    },
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入中国专业编码!'},
      ];
    },
  },
  {
    label: '描述',
    field: 'description',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
];
//子表列表数据
export const studentWorkExperienceColumns: BasicColumn[] = [
  {
    title: '名称',
    align:"center",
    dataIndex: 'name'
  },
  {
    title: '开始时间',
    align:"center",
    dataIndex: 'startDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
  },
  {
    title: '结束时间',
    align:"center",
    dataIndex: 'endDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
  },
  {
    title: '公司名称',
    align:"center",
    dataIndex: 'companyName'
  },
  {
    title: '描述',
    align:"center",
    dataIndex: 'description'
  },
  {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
  },
];
//子表表单数据
export const studentWorkExperienceFormSchema: FormSchema[] = [
  // TODO 子表隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false
  },
  {
    label: '名称',
    field: 'name',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入名称!'},
      ];
    },
  },
  {
    label: '开始时间',
    field: 'startDate',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入开始时间!'},
      ];
    },
  },
  {
    label: '结束时间',
    field: 'endDate',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入结束时间!'},
      ];
    },
  },
  {
    label: '公司名称',
    field: 'companyName',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入公司名称!'},
      ];
    },
  },
  {
    label: '内容',
    field: 'content',
    component: 'InputTextArea',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入内容!'},
      ];
    },
  },
  {
    label: '成果',
    field: 'results',
    component: 'InputTextArea',
  },
  {
    label: '描述',
    field: 'description',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
];
//子表列表数据
export const studentMaterialColumns: BasicColumn[] = [
  {
    title: '名称',
    align:"center",
    dataIndex: 'name'
  },
  {
    title: '材料Url地址',
    align:"center",
    dataIndex: 'materiaUrl',
  },
  {
    title: '材料类型[1-身份证明材料,2-学科成绩证明材料,3-语言证明材料,4-学校活动证明材料,5-资金证明材料]',
    align:"center",
    dataIndex: 'materialType_dictText'
  },
  {
    title: '材料后缀',
    align:"center",
    dataIndex: 'materialSuffix'
  },
  {
    title: '大小，单位：字节',
    align:"center",
    dataIndex: 'size'
  },
  {
    title: '审核状态[wait-待审核,pass-通过,fail-未通过]',
    align:"center",
    dataIndex: 'auditStatus_dictText'
  },
  {
    title: '描述',
    align:"center",
    dataIndex: 'description'
  },
  {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
  },
];
//子表表单数据
export const studentMaterialFormSchema: FormSchema[] = [
  // TODO 子表隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false
  },
  {
    label: '名称',
    field: 'name',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入名称!'},
      ];
    },
  },
  {
    label: '材料Url地址',
    field: 'materiaUrl',
    component: 'JUpload',
    componentProps:{
     },
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入材料Url地址!'},
      ];
    },
  },
  {
    label: '材料类型[1-身份证明材料,2-学科成绩证明材料,3-语言证明材料,4-学校活动证明材料,5-资金证明材料]',
    field: 'materialType',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode:"material_type"
    },
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入材料类型[1-身份证明材料,2-学科成绩证明材料,3-语言证明材料,4-学校活动证明材料,5-资金证明材料]!'},
      ];
    },
  },
  {
    label: '材料后缀',
    field: 'materialSuffix',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入材料后缀!'},
      ];
    },
  },
  {
    label: '大小，单位：字节',
    field: 'size',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入大小，单位：字节!'},
      ];
    },
    dynamicDisabled:true,
  },
  {
    label: '审核状态[wait-待审核,pass-通过,fail-未通过]',
    field: 'auditStatus',
    defaultValue: "wait",
    component: 'JDictSelectTag',
    componentProps:{
      dictCode:"audit_status"
    },
    dynamicRules: ({model,schema}) => {
      return [
        { required: true, message: '请输入审核状态[wait-待审核,pass-通过,fail-未通过]!'},
      ];
    },
  },
  {
    label: '描述',
    field: 'description',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
];

// 高级查询数据
export const superQuerySchema = {
  idType: {title: '身份类型[1-身份证,2-护照]',order: 0,view: 'list', type: 'string',dictCode: 'id_type',},
  idCard: {title: '身份证号码',order: 1,view: 'text', type: 'string',},
  name: {title: '名称',order: 2,view: 'text', type: 'string',},
  pinyin: {title: '拼音',order: 3,view: 'text', type: 'string',},
  sex: {title: '性别[1-男,2-女]',order: 4,view: 'radio', type: 'string',},
  avatarUrl: {title: '头像Url地址',order: 5,view: 'image', type: 'string',},
  studyStage: {title: '学业阶段[1-本科在读,2-专科在读,3-本科毕业,4-专科毕业,5-研究生在读,6-研究生毕业,7-普通高中在读,8-国际高中在读]',order: 6,view: 'list', type: 'string',dictCode: 'study_stage',},
  birthday: {title: '出生日期',order: 7,view: 'date', type: 'string',},
  registrationAddr: {title: '户口地',order: 8,view: 'text', type: 'string',},
  birthplaceAddr: {title: '出生地',order: 9,view: 'text', type: 'string',},
  homeAddr: {title: '家庭地址',order: 10,view: 'text', type: 'string',},
  telephone: {title: '手机',order: 11,view: 'text', type: 'string',},
  emergencyPhone: {title: '紧急联系人手机',order: 12,view: 'text', type: 'string',},
  email: {title: '电子邮件地址',order: 13,view: 'text', type: 'string',},
  description: {title: '描述',order: 14,view: 'text', type: 'string',},
  remark: {title: '备注',order: 15,view: 'text', type: 'string',},
};
