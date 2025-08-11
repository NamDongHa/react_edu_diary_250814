import {useNavigate, useParams} from "react-router-dom";
import useDiary from "../hooks/useDiary.js";
import Button from "../component/Button.jsx";
import Header from "../component/Header.jsx";
import {useContext} from "react";
import {DiaryDispatchContext} from "../App.jsx";
import Editor from "../component/Editor.jsx";

const Edit = () => {
    const {id} = useParams();
    const data = useDiary(id)
    const navigate = useNavigate()
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext)

    const goBack = () => {
        navigate(-1)
    }

    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
            onDelete(id)
            navigate('/', {replace: true})
        }
    }

    const onSubmit = (data) => {
        const {date, content, emotionId} = data
        console.log(data)
        onUpdate(id, date, content, emotionId)
        navigate('/', {replace: true})
    }

    if (!data) {
        return <div>일기를 불러오고 있습니다...</div>
    }

    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={<Button text={'< 뒤로 가기'} onClick={goBack}/>}
                rightChild={<Button text={'삭제하기'} type={'negative'} onClick={onClickDelete}/>}
            />
            <Editor initData={data} onSubmit={onSubmit}/>
        </div>
    )
}

export default Edit