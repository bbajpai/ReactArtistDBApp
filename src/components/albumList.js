import React from 'react';

const AlbumList = (props) =>{
    console.log(props);
    const showList =({albumListData}) => {
        if(albumListData){
            return albumListData.map((item,index)=>{
                return(
                    <img key={index} src={`/images/albums/${item.cover}.jpg`}/>
                )
            })
        }
    }
    return(
        <div className="album_list">
            {showList(props)}
        </div>
    )
}

export default AlbumList;