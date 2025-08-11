import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App.jsx";
import {useNavigate} from "react-router-dom";

const useDiary = id => {
    const data = useContext(DiaryStateContext)
    const [diary, setDiary] = useState()
    const navigate = useNavigate()

    // useEffect를 이용해 id나 data의 값이 변경될 때마다
    // 일기 데이터에서 매개변수 id와 일치하는 일기르 찾아 State 값 diary를 업데이트
    useEffect(() => {
        const matchDiary = data.find(it => String(it.id) === String(id))
        if (matchDiary) {
            setDiary(matchDiary)
        } else {
            alert('해당 일기가 존재하지 않습니다.')
            navigate('/', {replace: true})
        }
    }, [id])

    return diary
}

export default useDiary