import {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import RoundCard from "../../../../common/RoundCard/RoundCard.js";
import Form from "react-bootstrap/Form";

export default function ScanPointSuccess() {
    const [enabledValidated, setEnabledValidated] = useState(false);
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidated = e.currentTarget.checkValidity()
        setEnabledValidated(true)
        if (isValidated) {
            console.log('true', isValidated)
            history.push(`/ScanPoints`)
        } else {
            console.log('false', isValidated)
        }
    }

    const [shopValue, setShopValue] = useState('')
    function onChangeShop({ currentTarget:{ value }}) {
        setShopValue(value)
    }
    const [showShopLabel, setShopLabel] = useState(true)
    function onFocusShop() {
        setShopLabel(false)
    }
    function onBlurShop() {
        setShopLabel(true)
    }
    return (
        <div className="scan-point-success__wrap">
            <div className="mt-4 mb-4 text-center">
                <p className="fz20-bold mb-2">恭喜您集點成功！</p>
            </div>
            <div className="product-info__box text-center">
                <p className="mb-0">Auchentoshan</p>
                <p className="mb-0">American Oak</p>
                <div className="product-info-point__box">
                    <span className={`fz30-bold font-primary`}>1</span>
                    <span>點</span>
                </div>
                <p>動動手指幫助我們了解您的購買偏好：）</p>
            </div>

            <Form
                noValidate
                validated={enabledValidated}
                onSubmit={handleSubmit}
            >
                <RoundCard
                    className={`mb-4`}
                >
                    <Form.Group controlId="area">
                        <Form.Label>
                            <span className={`font-tips`}>區域</span>
                        </Form.Label>
                        <Form.Control as="select">
                            <option>請選擇購買區域</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="area">
                        <Form.Label>
                            <span className={`font-tips`}>通路</span>
                        </Form.Label>
                        <Form.Control as="select">
                            <option>請選擇購買通路</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group
                        className={`form-customize`}    
                        controlId="shopName"
                    >
                        {
                            showShopLabel && shopValue === ''
                                ? (
                                    <Form.Label>
                                        <span className={`fz16`}>購買店家名稱</span>
                                    </Form.Label>
                                )
                                : null
                        }
                        
                        <Form.Control
                            type="text"
                            value={shopValue}
                            onFocus={onFocusShop}
                            onBlur={onBlurShop}
                            onChange={onChangeShop}
                        />
                    </Form.Group>
                </RoundCard>
                <Button
                    variant="primary"
                    className={`col-12 mb-3`}
                    type="submit"
                >
                    繼續集點
                </Button>
                <Button
                    href={``}
                    variant="outline-primary"
                    className={`col-12`}
                >
                    返回威士忌愛好會
                </Button>
            </Form>
        </div>
    )
}