const Services = () => {
    return(
        <div className="grid lg:grid-cols-4 lg:grid-rows-1
                              md:grid-cols-2 md:grid-rows-2
                              sm:grid-cols-2 sm:grid-rows-2
                              xs:grid-cols-2 xs:grid-rows-2
                              gap-4 text-center mt-5 p-5">
            <div>
                <img src="images/services/1.png" className="rounded transition transform
                 hover:scale-105 duration-300 cursor-pointer"/>
            </div>
            <div>
                <img src="images/services/2.png" className="rounded transition transform
                 hover:scale-105 duration-300 cursor-pointer"/>
            </div>
            <div>
                <img src="images/services/3.png" className="rounded transition transform
                 hover:scale-105 duration-300 cursor-pointer"/>
            </div>
            <div>
                <img src="images/services/4.png" className="rounded transition transform
                 hover:scale-105 duration-300 cursor-pointer"/>
            </div>
        </div>
    )
}

export default Services