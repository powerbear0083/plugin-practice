import {useState} from "react";
import { useHistory } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import RoundCard from "../../common/RoundCard/RoundCard.js";
import LogoBlock from "../../common/LogoBlock/LogoBlock.js";

export default function Registered() {
    const [enabledValidated, setEnabledValidated] = useState(false);
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidated = e.currentTarget.checkValidity()
        setEnabledValidated(true)
        if (isValidated) {
            console.log('true', isValidated)
            history.push(`/Verification`)
        } else {
            console.log('false', isValidated)
        }
    }
    const [nameValue, setNameValue] = useState('')
    function onChangeName({ currentTarget:{ value }}) {
        setNameValue(value)
    }
    const [showNameLabel, setNameLabel] = useState(true)
    function onFocusName() {
        setNameLabel(false)
    }
    function onBlurName() {
        setNameLabel(true)
    }
    
    const [phoneValue, setPhoneValue] = useState('')
    function onChangePhone({ currentTarget:{ value }}) {
        setPhoneValue(value)
    }
    const [showPhoneLabel, setPhoneLabel] = useState(true)
    function onFocusPhone() {
        setPhoneLabel(false)
    }
    function onBlurPhone() {
        setPhoneLabel(true)
    }
    const [birthValue, setBirthValue] = useState('')
    function onChangeBirth({ currentTarget:{ value }}) {
        setBirthValue(value)
    }
    const [showBirthLabel, setBirthLabel] = useState(true)
    function onFocusBirth() {
        setBirthLabel(false)
    }
    function onBlurBirth() {
        setBirthLabel(true)
    }
    
    const [emailValue, setEmailValue] = useState('')
    function onChangeEmail({ currentTarget:{ value }}) {
        setEmailValue(value)
    }

    const [showEmailLabel, setEmailLabel] = useState(true)
    function onFocusEmail() {
        setEmailLabel(false)
    }
    function onBlurEmail() {
        setEmailLabel(true)
    }
    
    function enabledConfirm() {
        return (
            nameValue !== '' &&
            phoneValue !== '' &&
            birthValue !== '' &&
            emailValue !== ''    
        )
    }
    return (
        <div className="registered__wrap pb-3">
            <LogoBlock>
                <div className="fz20-bold mb-2">註冊並綁定會員</div>
                <p className="mb-0">請輸入個人資料以完成註冊及綁定</p>
            </LogoBlock>
            <Form 
                noValidate
                className="form__wrap--enter"
                validated={enabledValidated} 
                onSubmit={handleSubmit}
            >
                <RoundCard
                    className="mb-4"
                >
                    <Form.Group
                        className={'form-customize'}    
                        controlId="name"
                    >
                        {
                            showNameLabel && nameValue === ''
                                ? (
                                    <Form.Label>
                                        <span className="fz16">姓名</span>
                                        <span className="font-red">*</span>
                                    </Form.Label>
                                )
                                : null
                        }
                        <Form.Control
                            required
                            type="text"
                            value={nameValue}
                            onFocus={onFocusName}
                            onBlur={onBlurName}
                            onChange={onChangeName}
                        />
                        <Form.Control.Feedback type="invalid">請輸入姓名</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group 
                        controlId="phone"
                        className={'form-customize'}
                    >
                        {
                            showPhoneLabel && phoneValue === ''
                                ? (
                                    <Form.Label>
                                        <span className="fz16">行動電話</span>
                                        <span className="font-red">*</span>
                                    </Form.Label>
                                )
                                : null
                        }
                        <Form.Control
                            required
                            type="number"
                            value={phoneValue}
                            onFocus={onFocusPhone}
                            onBlur={onBlurPhone}
                            onChange={onChangePhone}
                        />
                        <Form.Control.Feedback type="invalid">請輸入行動電話</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group 
                        controlId="birth"
                        className={'form-customize'}
                    >
                       
                        {
                            showBirthLabel && birthValue === ''
                                ? (
                                    <Form.Label>
                                        <span className="fz16">生日  YYYY/MM/DD</span>
                                        <span className="font-red">*</span>
                                    </Form.Label>
                                )
                                : null
                        }
                        <Form.Control
                            required
                            type="number"
                            value={birthValue}
                            onFocus={onFocusBirth}
                            onBlur={onBlurBirth}
                            onChange={onChangeBirth}
                        />
                        <Form.Control.Feedback type="invalid">請輸入生日</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group 
                        controlId="email"
                        className={'form-customize'}
                    >
                        {
                            showEmailLabel && emailValue === ''
                                ? (
                                    <Form.Label>
                                        <span className="fz16">Email</span>
                                        <span className="font-red">*</span>
                                    </Form.Label>
                                )
                                : null
                        }
                        <Form.Control
                            required
                            type="number"
                            value={emailValue}
                            onFocus={onFocusEmail}
                            onBlur={onBlurEmail}
                            onChange={onChangeEmail}
                        />
                        <Form.Control.Feedback type="invalid">請輸入Email</Form.Control.Feedback>
                    </Form.Group>
                </RoundCard>
                <Button
                    variant={ enabledConfirm() ? 'primary' : 'secondary'}
                    className="col-12"
                    type="submit"
                >發送簡訊驗證碼</Button>
            </Form>
        </div>
    )
}