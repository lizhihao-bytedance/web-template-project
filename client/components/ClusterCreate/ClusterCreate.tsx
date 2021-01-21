import React, { useState } from 'react';
import { Form } from "snowy/pro";
import { Button, Steps } from 'antd';
import style from './style.m.less'

const { Step } = Steps;
const { Field } = Form;

enum StepType {
  One,
  Two,
  Three
}

export default function ClusterCreate() {
  const [step, setStep] = useState<StepType>(StepType.One)
  const max = Math.max(...collectionNumber(Object.values(StepType)))
  const min = Math.min(...collectionNumber(Object.values(StepType)))

  console.info(max, min)

  const handleChangeStep = (skip: 1 | -1) => {
    setStep((v) => v + skip)
  }

  const renderSteps = () => {
    return (
      <Steps size="small" current={step} onChange={setStep} className={style.step}>
        <Step title="第一步" />
        <Step title="第二步" />
        <Step title="第三步" />
      </Steps>
    )
  }

  const renderStep1 = () => {
    return step === StepType.One ? (
      <>
        <Field
          required
          label="名称名称名称名称名称名称名称名称名称名称"
          name="name"
          component="input"
          labelTooltip="这是名称"
          tips="支持中文和特殊符号，长度限制 2-32 个字符。"
        />
        <Field
          label="描述"
          name="description"
          component="textArea"
          labelTooltip="这是备注"
          placeholder="请输入备注"
        />
        <Field 
          label='下拉框'
          name="下拉框"
          component="select"
          payload={{
            items: [{
              name: '选项一',
              value: 'option1',
            },{
              name: '选项二',
              value: 'option2',
            }],
          }}
        />
        <Field
          label="测试1"
          name="test1"
          component="textArea"
        />
        <Field
          label="测试2"
          name="test2"
          component="textArea"
        />
        <Field
          label="测试3"
          name="test3"
          component="textArea"
        />
      </>
    ) : null
  }

  const renderStep2 = () => {
    return step === StepType.Two ? (
      <>
        <Field
          required
          label="家庭住址"
          name="address"
          component="input"
          labelTooltip="家庭住址"
          tips="支持中文和特殊符号，长度限制 2-32 个字符。"
        />
        <Field
          label="邮编"
          name="phone"
          component="inputNumber"
          labelTooltip="这是邮编"
          placeholder="请输入邮编"
        />
      </>
    ) : null
  }

  const renderStep3 = () => {
    return step === StepType.Three ? (
      <Field
        label="测试3"
        name="test3"
        component="textArea"
      />
    ) : null
  }

  const renderForm = () => {
    return (
      <Form 
        affixButtons={false} 
        onSubmit={console.info}
        footer={null}
        >
        {renderStep1()}
        {renderStep2()}
        {renderStep3()}
        {renderFooter()}
      </Form>
    )
  }

  const renderFooter = () => {
    return (
      <div className={style.footer}>
        <Button htmlType="submit" type="primary">确定</Button>
        {step !== min && <Button onClick={() => handleChangeStep(-1)}>上一步</Button>}
        {step !== max &&<Button onClick={() => handleChangeStep(1)}>下一步</Button>}
        <Button>取消</Button>
      </div>
    )
  }
  
  return (
    <>
      {renderSteps()}
      {renderForm()}
    </>
  )
}

function collectionNumber(values: unknown[]) {
  return values.filter((v): v is number => isNumber(v))
}

function isNumber(v: unknown) {
  return typeof v === 'number'
}