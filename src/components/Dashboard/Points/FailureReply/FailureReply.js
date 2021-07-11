import './FailureReply.scss'
import {Fragment, useState} from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import RoundCard from "../../../../common/RoundCard/RoundCard.js";

export default function FailureReply() {
    const history = useHistory()
    const [upLoadImg, setUpLoadImg] = useState(false)
    const [enabledValidated, setEnabledValidated] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidated = e.currentTarget.checkValidity()
        setEnabledValidated(true)
        if (isValidated) {
            history.push(`/FailureReplyDone`)
            console.log('true', isValidated)
        } else {
            console.log('false', isValidated)
        }

    }

    function onCancel() {
        history.push(`/ScanPoints`)
    }

    const [serialNumberValue , setSerialNumberValue] = useState('')
    function onChangeSerialNumber({ currentTarget:{ value }}) {
        setSerialNumberValue(value)
    }
    const [showSerialNumberLabel, setSerialNumberLabel] = useState(true)
    function onFocusSerialNumber() {
        setSerialNumberLabel(false)
    }
    function onBlurSerialNumber() {
        setSerialNumberLabel(true)
    }
    return (
        <div className="failure-reply__wrap pb-3">
            <div className="mt-4 mb-4 text-center">
                <p className="fz20-bold mb-2">問題與協助</p>
                <p className={`mb-0`}>請上傳照片並輸入序號以完成回報</p>
            </div>
            <Form
                noValidate
                validated={enabledValidated}
                className={`form__wrap--scan`}
                onSubmit={handleSubmit}
            >
                <RoundCard
                    className="mb-4"
                >
                    <label htmlFor="file-upload" className="file-up__box">
                        <p className="mb-0">
                            <span className="fz16">點擊以選擇照片</span>
                            <span className="font-red">*</span>
                        </p>
                        <input id="file-upload" type="file"/>
                    </label>
                    {
                        upLoadImg
                            ? (
                                <Fragment>
                                    <div className="upload-done__box">
                                        <img src="http://placehold.jp/200x200.png"/>
                                    </div>
                                    <p className="text-center mt-1 mb-3 select__img">
                                        <a href="">
                                            重選照片
                                        </a>
                                    </p>
                                </Fragment>
                            )
                            : null
                    }

                    <Form.Group
                        className={'form-customize'}
                        controlId="verificationNumber"
                    >
                        {
                            serialNumberValue === '' && showSerialNumberLabel
                                ? (
                                    <Form.Label>
                                        <span className="fz16">填寫序號</span>
                                        <span className="font-red">*</span>
                                    </Form.Label>
                                )
                                : null
                        }
                        <Form.Control
                            required
                            type="text"
                            onFocus={onFocusSerialNumber}
                            onBlur={onBlurSerialNumber}
                            onChange={onChangeSerialNumber}
                        />
                        <Form.Control.Feedback type="invalid">請輸入序號</Form.Control.Feedback>
                    </Form.Group>
                </RoundCard>
                <Button
                    variant="primary"
                    className="col-12 mb-3"
                    type="submit"
                >確認</Button>
                <Button
                    variant="outline-primary"
                    className="col-12"
                    type="reset"
                    onClick={onCancel}
                >取消</Button>
            </Form>
        </div>
    )
}