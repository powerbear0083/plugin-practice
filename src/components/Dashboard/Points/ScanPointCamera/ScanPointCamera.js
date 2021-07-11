import './ScanPointCamera.scss'
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
export default function ScanPointCamera() {

    useEffect(() => {
        addBodyClass()
        function addBodyClass() {
            let body = document.querySelector('body')
            body.classList.remove('is-scan-camera')
            body.classList.add('is-scan-camera')
        }
        function removeBodyClass() {
            let body = document.querySelector('body')
            body.classList.remove('is-scan-camera')
        }
        return () => {
            removeBodyClass()
        }
    }, [])

    const history = useHistory()
    function onClick() {
        history.push(`/ScanPoints`)
    }

    return (
        <div className="scan-point-camera__wrap">
            <div className="mt-4 mb-4 text-center">
                <p className="fz20-bold mb-2">掃描集點</p>
                <p>請對準QR code 進行掃描</p>
                <p className="text-center mt-3 event__desc">
                    <Link 
                        to="/ScanPoints"
                    >
                        活動說明
                    </Link>
                </p>
            </div>
            <div className="camera__box">
                <span />
                <span/>
                <span/>
                <span/>
            </div>
            <Button
                variant="outline-primary outline-primary-camera"
                className="col-12"
                onClick={onClick}
            >手動輸入條碼</Button>
            <p className="text-center mt-3 camera__qa">
                <Link 
                    to="/FailureReply"
                >
                    問題與協助
                </Link>
            </p>
        </div>
    )
}