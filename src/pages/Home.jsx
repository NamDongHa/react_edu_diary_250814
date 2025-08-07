import Header from "../component/Header.jsx";
import Button from "../component/Button.jsx";
import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App.jsx";
import {getMonthRangeByDate} from "../util.js";
import DiaryList from "../component/DiaryList.jsx";

const Home = () => {
    const data = useContext(DiaryStateContext)
    const [pivotDate, setPivotDate] = useState(new Date());
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (data.length > 0) {
            const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate);
            setFilteredData(
                data.filter(it => beginTimeStamp <= it.date && it.date <= endTimeStamp)
            )
        } else {
            setFilteredData([])
        }
    }, [data, pivotDate]);

    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`

    /* pivotDate의 값을 한 달 뒤로 업데이트 */
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    }

    /* pivotDate의 값을 한 달 전으로 업데이트 */
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    }

    return (
        <div>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
                rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
            />
            <DiaryList data={filteredData} />
        </div>
    )
}

export default Home