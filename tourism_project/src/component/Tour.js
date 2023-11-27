import Card from "./Card";

function Tour({tour,removetour}) {
    return ( 
        <div className="container ">
            <div >
                <h2 className="title">Plan With Love</h2>
            </div>
<div className="cards">
{
    tour.map((item)=>(
        <Card {...item} removetour={removetour} ></Card>
    ))
}
</div>
        </div>
     );
}

export default Tour;