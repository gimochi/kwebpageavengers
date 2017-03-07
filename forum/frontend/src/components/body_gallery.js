import React from 'react';
import { Link } from 'react-router';
import Galley_Category from './body_gallery_category';
import Galley_Previews from './body_gallery_previews';
import GalleryDetail from './body_gallery_detail';

var BodyGallery = React.createClass ({
    getInitialState() {
        return {
        };
     },
    render: function () {
        return(
            <div id="body_gallery" className="container">
                <div className="body_gallery_main row">
                    {/* 왼쪽 사이드 바*/}
                        <Galley_Category />
                    {/* 메인 내용
                        1. 메인에선 사진들만 보이게
                        2. 사진누르면 그 사진에 대한 포스팅
                     */}
                    {/* 1 . <Galley_Previews /> */}
                        <GalleryDetail />
                    {/* 2 . <GalleryDetail /> */}

                </div>
            </div>
        );
    }
});

export default BodyGallery;