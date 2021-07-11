import {useState} from "react";
import { useHistory } from 'react-router-dom'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import RoundCard from "../../common/RoundCard/RoundCard.js";
import LogoBlock from "../../common/LogoBlock/LogoBlock.js";

export default function Verification() {
    const [enabledValidated, setEnabledValidated] = useState(false)
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidated = e.currentTarget.checkValidity()
        setEnabledValidated(true)
        if (isValidated) {
            console.log('true', isValidated)
            history.push(`/VerifiedSuccess`)
        } else {
            console.log('false', isValidated)
        }
    }

    const [validValue, setValidValue] = useState('')
    function onChangeValid({ currentTarget:{ value }}) {
        setValidValue(value)
    }
    const [showValidLabel, setValidLabel] = useState(true)
    function onFocusValid() {
        setValidLabel(false)
    }
    function onBlurValid() {
        setValidLabel(true)
    }
    return (
        <div className="verification__box">
            <LogoBlock>
                <div className="fz20-bold">請輸入簡訊驗證碼</div>
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
                    <p className="mb-3 font-tips">
                        <span>驗證碼將於</span>
                        <span className="font-primary pl-1 pr-1">3</span>
                        <span>分</span>
                        <span className="font-primary pl-1 pr-1">00</span>
                        <span>秒後失效</span>
                    </p>
                    <Form.Group
                        className={'form-customize'}    
                        controlId="validNumber"
                    >
                        
                        {
                            showValidLabel && validValue === ''
                                ? (
                                    <Form.Label>
                                        <span className="fz16">請輸入五位數驗證碼</span>
                                    </Form.Label>
                                )
                                : null
                        }
                        <Form.Control
                            required
                            type="number"
                            value={validValue}
                            onFocus={onFocusValid}
                            onBlur={onBlurValid}
                            onChange={onChangeValid}
                        />
                        <Form.Control.Feedback 
                            type="invalid"
                        >驗證碼輸入錯誤，請重新輸入</Form.Control.Feedback>
                    </Form.Group>
                    <p className="text-right mb-0">
                        <a className="font-primary font-link" href="" title="重新發送驗證碼">重新發送驗證碼</a>
                    </p>
                </RoundCard>
                <Button
                    variant={validValue === '' ? 'secondary' : 'primary'}
                    className="col-12"
                    type="submit"
                >確認</Button>
            </Form>
        </div>
    )
}