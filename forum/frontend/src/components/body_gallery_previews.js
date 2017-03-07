/**
 * Created by JongWoo on 2017-02-28.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Gallery_thumb from './gallery_thumb';

var Galley_Previews = React.createClass({
    render: function(){
        var thumbnails = [{title:"첫번째",url:"../static/data/gallery_temp/1.jpg"},
            {title:"두번째",url:"../static/data/gallery_temp/2.jpg"},
            {title:"세번째",url:"../static/data/gallery_temp/3.jpg"},
            {title:"네번째",url:"../static/data/gallery_temp/5.jpg"},
            {title:"다섯번째",url:"../static/data/gallery_temp/1.jpg"},
            {title:"여섯번째",url:"../static/data/gallery_temp/2.jpg"},
            {title:"일곱번째",url:"../static/data/gallery_temp/1.jpg"},
            {title:"여덟번째",url:"../static/data/gallery_temp/5.jpg"}
        ];
        return (
            <div id="body_gallery_content" className="col-sm-9 container">
                <div id="body_gallery_name" className="gallery_title row ">
                    <p className="text-center">사진첩</p>
                </div>
                <div className="gallery row">
                    {thumbnails.map((item,i) => {
                        return(
                            <Gallery_thumb content={item} />
                        );
                    })}
                </div>
            </div>
        );
    }
});


export default Galley_Previews;