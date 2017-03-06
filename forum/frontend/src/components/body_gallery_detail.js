/**
 * Created by JongWoo on 2017-03-07.
 */
import React from 'react';
import { Link } from 'react-router';

var GalleryDetail = React.createClass ({
    getInitialState() {
        return {
        };
    },
    render: function () {
        var contents = {title:"첫번째",
                            url:["../static/data/gallery_temp/1.jpg","../static/data/gallery_temp/2.jpg","../static/data/gallery_temp/3.jpg","../static/data/gallery_temp/1.jpg"],
                            content:"글 하나에 사진이 여러장이 들어감..."};
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
                <div className="gallery_viewPicBox row">
                    <img src={contents['url'][0]} alt="wrong" className="img img-responsive full-width" />
                    {contents['content']}
                    <img src={contents['url'][1]} alt="wrong" className="img img-responsive full-width" />
                    {contents['content']}
                    <img src={contents['url'][2]} alt="wrong" className="img img-responsive full-width" />
                    {contents['content']}
                    <img src={contents['url'][3]} alt="wrong" className="img img-responsive full-width" />
                    {contents['content']}
                    {contents['content']}
                </div>
            </div>
        );
    }
});
export default GalleryDetail;