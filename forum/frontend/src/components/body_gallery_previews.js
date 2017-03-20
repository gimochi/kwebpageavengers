/**
 * Created by JongWoo on 2017-02-28.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Gallery_thumb from './gallery_thumb';
import { setGalleryState, set2Gallery } from '../actions';
import { connect } from 'react-redux';

var Gallery_Previews = React.createClass({
    sajin_click: function(num){    //num:사진첩 사진 SQ 번호
        window.history.pushState({STATE: 1, snum: num, cnum:this.props.cnum },null,"/gallery");  // cnum은 카테고리 번호
        this.props.state_change(num);
    },
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
                            <div onClick={this.sajin_click.bind(this,120)} key={i}>
                                <Gallery_thumb content={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
});

let mapStateToProps = (state) => {
  return{
    cnum: state.GalleryState.category
  };
}

let mapDispatchToProps = (dispatch) => {
  return{
    state_change: (value) => dispatch(set2Gallery(1,value)) //게시판 state=1, 사진 번호, 카테고리 번호
  }
}

Gallery_Previews = connect(mapStateToProps, mapDispatchToProps)(Gallery_Previews);

export default Gallery_Previews;