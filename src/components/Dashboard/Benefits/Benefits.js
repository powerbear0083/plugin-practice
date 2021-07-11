import LogoBlock from "../../../common/LogoBlock/LogoBlock.js";

export default function Benefits() {
    return (
        <div className="benefits__wrap">
            <LogoBlock>
                <p className={`fz20-bold`}>會員權益須知</p>
            </LogoBlock>
            <ul>
                <li className={`mb-1`}>參加者於首次登錄活動集點序號時需註冊成為Beam Suntory威士忌愛好會會員，會員帳號為手機號碼，參加者輸入時請務必留意，帳號一旦設定完成，恕無法修改。</li>
                <li className={`mb-1`}>主辦單位保有最終修改、變更、活動解釋及取消本活動之權利，若有相關異動將會公告於網站， 恕不另行通知。 </li>
                <li>本活動僅限已滿18歲，並設籍於台灣、金門、澎湖、馬祖地區者參加。</li>
            </ul>
        </div>
    )
}