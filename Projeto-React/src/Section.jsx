function Section({title, children}){
    return(
        <div className="card">

        <h1>{title}</h1>

        <p>{children}</p>
    
        </div>
    )
}

export default Section