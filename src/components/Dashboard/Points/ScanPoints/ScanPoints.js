import './ScanPoints.scss'
import {Link, useHistory } from "react-router-dom";
import {useState} from "react";
import iconScan from '../../../../assets/images/icon-scanner.svg'
import RoundCard from "../../../../common/RoundCard/RoundCard.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ScanPoints() {
    const [validated, setValidated] = useState(false);
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidated = e.currentTarget.checkValidity()
        setValidated(true)
        if (isValidated) {
            console.log('true', isValidated)
            history.push(`/ScanPointSuccess`)
        } else {
            console.log('false', isValidated)
        }
    }
    
    const [validNumber, setValidNumber] = useState('')
    function onChange({ currentTarget:{ value }}) {
        setValidNumber(value)
    }

    return (
        <div className="scan-points__wrap">
            <div className="mt-4 mb-4 text-center">
                <p className="fz20-bold mb-2">掃描集點</p>
            </div>
            <div className="scan__tooltip mb-4">
                <Link to={`/ScanPointCamera`}>
                    <img src={iconScan} alt="掃描集點"/>
                </Link>
            </div>
            <Form
                noValidate
                validated={validated}
                className={`form__wrap--scan`}
                onSubmit={handleSubmit}
            >
                <RoundCard
                    className="mb-4"
                >
                    <Form.Group controlId="verificationNumber">
                        <Form.Label>
                            <span className="fz12 font-tips">手動輸入</span>
                        </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="請輸入 8 碼英文數字混合的序號"
                            value={validNumber}
                            onChange={onChange}
                        />
                        <Form.Control.Feedback type="invalid">請輸入混合的序號</Form.Control.Feedback>
                    </Form.Group>
                </RoundCard>
                <Button
                    variant={validNumber === '' ? 'secondary': 'primary'}
                    className="col-12"
                    type="submit"
                >確認</Button>
            </Form>
            <p className="text-center mt-3 scan__qa">
                <Link
                    to="/FailureReply"
                >
                    問題與協助
                </Link>
            </p>
            <div className="scan__trams">
                <p className="fz14-bold">活動說明</p>
                <ul className={`ml-0 pl-4`}>
                    <li className={`mb-1`}>掃描：使用相機鏡頭掃描瓶身貼紙Qrcode。</li>
                    <li className={`mb-1`}>輸入序號：手動輸入瓶身貼紙Qrcode下方英數混合序號。
                    </li>
                    <li className={`mb-1`}>問題與協助：若集點有任何問題上傳詳細資料，客服人員會儘速處理 。</li>
                </ul>
            </div>
        </div>
    )
}