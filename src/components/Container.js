import React from 'react'


const Container = ({ infoList }) => {
    const infoItems =
        infoList.map(info => {
            return (
                <div className="info" key={info.id}>
                    {info.icon === "folder" ? <div className="name"><i className="fas fa-folder"></i> <span>{info.name}</span></div> :<div className="name"><i className="far fa-file-alt"></i> {info.name}</div>}
                  
                    <div className="description">{info.description}</div>
                    <div className="time">{info.time}</div>
                </div>

            )
        })
    return (
        <div className="container">

            {infoItems}

        </div>




    )
}



export default Container