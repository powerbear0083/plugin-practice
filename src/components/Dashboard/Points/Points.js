import './Points.scss'
import { Fragment } from "react";
import RoundCard from "../../../common/RoundCard/RoundCard.js";

export default function Points() {
    return (
        <div className="points__wrap">
            <div className="mt-4 text-center">
                <p className="fz20-bold mb-2">集點資料</p>
                <p className={`mb-4`}>近20筆集點紀錄</p>
            </div>
            {
                true
                    ? (
                        <Fragment>
                            <RoundCard
                                className={`mb-4`}
                            >
                                <div className="point__box justify-content-center">
                                    <div>
                                        <span className={`font-primary fz16-bold mr-1`}>60</span>
                                        <span className={`fz14`}>點</span>
                                    </div>
                                </div>
                            </RoundCard>
                            <RoundCard
                                className={`mb-4`}
                            >
                                <ul className="point__list list-unstyled">
                                    <li>
                                        <div className="point__head">
                                            <p className="point__caption fz14-bold">抽獎券</p>
                                            <p className="point__number fz12-bold">-10</p>
                                        </div>
                                        <div className="point__foot font-tips">2021/04/29</div>
                                    </li>
                                    <li>
                                        <div className="point__head">
                                            <p className="point__caption fz14-bold">抽獎券</p>
                                            <p className="point__number fz12-bold">-10</p>
                                        </div>
                                        <div className="point__foot font-tips">2021/04/29</div>
                                    </li>
                                </ul>
                            </RoundCard>
                        </Fragment>
                    )
                    : (
                        <div className="point__empty text-center">
                            <p className="fz14-bold mb-0">您尚未獲得點數</p>
                        </div>
                    )
            }
            
        </div>
    )
}