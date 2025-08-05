import {useParams} from "react-router-dom";

const Diary = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>{id}번 일기</h1>
            <h1>Diary 페이지입니다.</h1>
        </div>
    )
}
export default Diary