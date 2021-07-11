import './Dashboard.scss'
import {Link} from "react-router-dom";
import iconPoint from '../../assets/images/icon-point.svg'
import iconTerms from '../../assets/images/icon-terms.svg'
import iconEdit from  '../../assets/images/icon-edit.svg'
import LogoBlock from "../../common/LogoBlock/LogoBlock.js";
import RoundCard from "../../common/RoundCard/RoundCard.js";

export default function Dashboard() {
    return (
        <div className="dashboard__wrap">
            <LogoBlock />
            <ul className="card__list list-unstyled m-0 p-0">
                <li>
                    <div className="card__box card__box--vvvip">
                        <p className="fz22-bold mb-2">VVVIP</p>
                        <p className={`fz20 mb-0`}>王大明</p>
                        <p className={`mt-auto mb-0`}>
                            <span>會員編號</span>
                            <span>：</span>
                            <span>3051121329141011</span>
                        </p>
                    </div>
                    <p className={`text-center mt-1 font-tipsh`}>有效日期：2021 / 12 / 31</p>
                </li>
            </ul>
            <RoundCard
                className={`mb-4`}
            >
                <Link 
                    to="/Points" 
                    className="point__box text-decoration-none"
                >
                    <div>點數：</div>
                    <div>
                        <span className={`font-primary fz16-bold mr-1`}>60</span>
                        <span className={`fz14`}>點</span>
                    </div>
                    <i className={`icon icon-arrow-right`} />
                </Link>
            </RoundCard>
            <ul className={`list-unstyled dashboard__info`}>
                <li className={`text-center`}>
                    <Link to="/ScanPoints">
                        <img className={`mb-1`} src={iconPoint} alt={`掃描集點`} />
                        <p className="fz14-bold mb-0">掃描集點</p>
                    </Link>
                </li>
                <li className={`text-center`}>
                    <Link to="/MemberSetting">
                        <img className={`mb-1`} src={iconTerms} alt={`修改資料`} />
                        <p className="fz14-bold mb-0">修改資料</p>
                    </Link>
                </li>
                <li className={`text-center`}>
                    <Link to="/Benefits">
                        <img className={`mb-1`} src={iconEdit} alt={`權益須知`} />
                        <p className="fz14-bold mb-0">權益須知</p>
                    </Link>
                </li>
            </ul>
        </div>   
    )
}