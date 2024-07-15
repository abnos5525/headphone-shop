import {useEffect} from "react";

const Page500 = ({error,reset}) => {

    useEffect(() => {
        console.error(error)
    }, [error])

    return(
        <div className="relative w-4/5 h-auto mx-auto my-20">
            <div className="h-auto mx-auto p-10 text-center box" style={{width:"70%"}}>
                <h1 className="text-3xl mb-8">500</h1>
                <p className="mb-5 text-xl">مشکلی پیش آمده است</p>
                <p>&#58;&#40;</p>
                <p>
                    <a className="border-b" href="/">
                        تلاش مجدد
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Page500