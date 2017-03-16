/**
 * Created by JongWoo on 2017-02-28.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Gallery_thumb from './gallery_thumb';
import { setGalleryState } from '../actions';
import { connect } from 'react-redux';

var Gallery_Previews = React.createClass({
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
                            <div onClick={this.props.state_change}>
                                <Gallery_thumb onClick={this.props.state_change.bind(this,1)} content={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
});

let mapDispatchToProps = (dispatch) => {
  return{
    state_change: (value) => dispatch(setGalleryState(value)) //2번째 변수는 글번호, 첫번째는 게시판 state
  }
}

Gallery_Previews = connect(undefined, mapDispatchToProps)(Gallery_Previews);

export default Gallery_Previews;