import { useParams } from "react-router-dom"


function MemberDetail() {
    // Router'da değişkenin ismini memnberId  olarak tanımalmıştık. BU yüzden burada da bu isimle kullanıyoruz
    const { memberId } = useParams();

    return (
        <div>MemberDetail {memberId}</div>
    )
}

export default MemberDetail