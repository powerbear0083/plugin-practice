import './VerifiedSuccess.scss'
import { useHistory } from 'react-router-dom'
import LogoBlock from "../../common/LogoBlock/LogoBlock.js";
import Button from "react-bootstrap/Button";

export default function VerifiedSuccess() {
    const history = useHistory()
    function onGoToDashboard() {
        history.push(`/Dashboard`)
    }

    return (
        <div className="verified-success__wrap">
            <LogoBlock>
                <div className="fz20-bold mb-4">成功開通LINE個人化服務</div>
                <p className="mb-0">歡迎您加入 Beam Suntory 威士忌愛好會 LINE </p>
                <p>個人化會員電子卡服務，您可以：</p>
            </LogoBlock>
            <ul className="list-unstyled">
                <li className={`mb-2`}>
                    <p className={`mb-0`}>隨時點擊選單頁面上之電子會員卡圖示</p>
                    <p className={`mb-0`}>瀏覽個人化介面</p>
                </li>
                <li className={`mb-2`}>
                    查詢您的會員資料及消費紀錄
                </li>
                <li>
                    <p className={`mb-0`}>不定期收到會員專屬活動訊息</p>
                    <p className={`mb-0`}>隨時掌握品牌最新動態</p>
                </li>
            </ul>
            <Button
                variant="primary"
                href="#"
                className={`col-12 mb-3`}
                onClick={onGoToDashboard}
            >
                瀏覽我的會員資料
            </Button>
            <Button
                variant="outline-primary"
                href="#"
                className={`col-12`}
            >
                返回威士忌愛好會
            </Button>
        </div>
    )
}