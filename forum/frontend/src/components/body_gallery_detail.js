/**
 * Created by JongWoo on 2017-03-07.
 */
import React from 'react';
import { Link } from 'react-router';
import Datgul from './datgul.js';

var GalleryDetail = React.createClass ({
    getInitialState() {
        return {
        };
    },
    render: function () {
        var contents = {title:"첫번째",
                            url:"../static/data/gallery_temp/1.jpg"};
        /*위 카테고리에 추가해서 쓰면됨.*/
        return(
            <div id="body_gallery_content" className="col-sm-9 container">
                <div id="body_gallery_name" className="gallery_title row ">
                    <p className="text-center">{contents['title']}</p>
                </div>
                <div className="gallery_info">
                    <p className="gallery_info_uploader pull-left">올린사람 : <strong>이름이이름</strong></p>
                    <p className="gallery_info_date pull-right"><i>2017-03-06</i></p>
                </div>
                <div className="gallery_viewPicBox row" style={{"marginBottom":"20px"}}>
                    <img src={contents['url']} alt="wrong" className="img img-responsive full-width" />
                </div>
                <Datgul />
            </div>
        );
    }
});
export default GalleryDetail;