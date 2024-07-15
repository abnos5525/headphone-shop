import { HashLoader } from "react-spinners";

const SpinnerPage = () => {
    return (
        <div className="w-screen flex justify-center items-center bg-blue-500" style={{height:"100vh"}}>
            <HashLoader size={100} color="#fff" />
        </div>
    )
}

export default SpinnerPage
