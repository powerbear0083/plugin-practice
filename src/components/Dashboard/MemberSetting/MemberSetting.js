import './MemberSetting.scss'
import { useHistory } from 'react-router-dom'
import RoundCard from "../../../common/RoundCard/RoundCard.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useState} from "react";

export default function MemberSetting() {
    const [enabledValidated, setEnabledValidated] = useState(false);
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidated = e.currentTarget.checkValidity()
        setEnabledValidated(true)
        if (isValidated) {
            console.log('true', isValidated)
            backDashboard()
        } else {
            console.log('false', isValidated)
        }
    }
    const [nameValue, setNameValue] = useState('王大明')
    function onChangeName({ currentTarget:{ value }}) {
        setNameValue(value)
    }
    const [emailValue, setEmailValue] = useState('damin@migocorp.com')
    function onChangeEmail({ currentTarget:{ value }}) {
        setEmailValue(value)
    }
    
    function backDashboard() {
        history.push(`/Dashboard`)
    }
    return (
        <div className="member-setting__wrap">
            <div className="mt-4 text-center">
                <p className="fz20-bold mb-2">修改會員資料</p>
            </div>
            <Form
                noValidate
                validated={enabledValidated}
                onSubmit={handleSubmit}
            >
                <RoundCard
                    className={`mb-4`}
                >
                    <Form.Group 
                        controlId="name"
                    >
                        <Form.Label
                            className={`mb-0`}
                        >
                            <span className={`font-tips`}>姓名</span>
                        </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={nameValue}
                            onChange={onChangeName}
                        />
                        <Form.Control.Feedback type="invalid">請輸入姓名</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label
                            className={`mb-0`}
                        >
                            <span className={`font-tips`}>行動電話</span>
                        </Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={`0912345678`}
                            className={`form-control-read-only`}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label
                            className={`mb-0`}
                        >
                            <span className={`font-tips`}>生日</span>
                        </Form.Label>
                        <Form.Control
                            readOnly
                            type="text"
                            value={`1990/12/10`}
                            className={`form-control-read-only`}
                        />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label
                            className={`mb-0`}
                        >
                            <span className={`font-tips`}>Email</span>
                        </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={emailValue}
                            onChange={onChangeEmail}
                        />
                        <Form.Control.Feedback type="invalid">Email</Form.Control.Feedback>
                    </Form.Group>
                </RoundCard>
                <Button
                    variant="primary"
                    className={`col-12 mb-3`}
                    type="submit"
                >
                    確定
                </Button>
                <Button
                    variant="outline-primary"
                    className={`col-12`}
                    type="reset"
                    onClick={backDashboard}
                >
                    取消
                </Button>
            </Form>
        </div>
    )
}