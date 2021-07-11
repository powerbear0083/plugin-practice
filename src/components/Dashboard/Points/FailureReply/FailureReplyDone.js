import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function FailureReplyDone() {
    const history = useHistory()
    function onGoToDashboard() {
        history.push(`/Dashboard`)
    }

    return (
        <div className="failure-reply-done__wrap">
            <div 
                className="fz14 text-center"
                style={
                    {
                        marginTop: '50%',
                        marginBottom: '50%'
                    }
                }
            >
                <p className={`mb-0`}> 已收到你回報的資料，客服人員會再以</p>
                <p>Email的方式通知結果</p>
            </div>
            <Button
                href={''}
                variant="primary"
                className="col-12 mb-3"
                onClick={onGoToDashboard}
            >瀏覽我的會員資料</Button>
            <Button
                href={''}
                variant="outline-primary"
                className="col-12"
            >返回威士忌愛好會</Button>
        </div>
    )
} 