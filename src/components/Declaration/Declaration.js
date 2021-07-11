import './Declaration.scss'
import { useState } from "react";
import { useHistory } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"; 
import RoundCard from "../../common/RoundCard/RoundCard.js";
import LogoBlock from "../../common/LogoBlock/LogoBlock.js";

export default function Declaration() {
    const [isAgreeTerms, setIsAgreeTerms] = useState(false)
    const history = useHistory()
    function onClick() {
        if(isAgreeTerms) {
            history.push(`/Registered`)
        }
    }

    return (
        <div className="declaration__wrap">
            <LogoBlock>
                <div className="fz20-bold mb-2">申請LINE個人化服務</div>
                <p className="mb-0">服務供 Beam Suntory 威士忌愛好會消費</p>
                <p className="mb-0">本並留存個人資料之顧客申請使用</p>
                <p className="mb-0">請下滑閱讀完須知，打勾確認再送出</p>
            </LogoBlock>
            <div className="fz16-bold mb-2">權益與聲明</div>
            <RoundCard>
                <p>參加者於首次登錄活動集點序號時需註冊成為Beam Suntory威士忌愛好會會員，會員帳號為手機號碼，參加者輸入時請務必留意，帳號一旦設定完成，恕無法修改。</p>
                <p>※主辦單位保有最終修改、變更、活動解釋及取消本活動之權利，若有相關異動將會公告於網站， 恕不另行通知。</p>
                <p>※本活動僅限已滿18歲，並設籍於台灣、金門、澎湖、馬祖地區者參加。</p>
            </RoundCard>
            <Form.Group 
                className="mt-3 text-center fz14" 
                controlId="agreeTerms"
            >
                <Form.Check 
                    type="checkbox" 
                    label="我已詳閱並同意相關使用須知"
                    checked={isAgreeTerms}
                    onChange={() => setIsAgreeTerms(!isAgreeTerms)}
                />
            </Form.Group>
            <div className="declaration__foot">
                <Button
                    variant={ isAgreeTerms ? 'primary' : 'secondary'}
                    className="col-12"
                    onClick={onClick}
                >送出</Button>
            </div>
        </div>
    )
}