import Button from "../component/Button.jsx";
import Header from "../component/Header.jsx";

const Home = () => {

    return (
        <div>
            <Header title={"Home"}
                    leftChild={<Button
                        type="positive"
                        text={'긍정 버튼'}
                        onClick={() => {
                            alert('positive button')
                        }}
                    />
                    }
                    rightChild={<Button
                        type="negative"
                        text={'부정 버튼'}
                        onClick={() => {
                            alert('negative button')
                        }}
                    />
                    }/>
        </div>
    )
}

export default Home