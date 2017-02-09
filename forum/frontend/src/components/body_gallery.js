import React from 'react';

var BodyGallery = React.createClass ({
    getInitialState() {
        return {
        };
     },
    render: function () {
        var categoryData = [{name:"뒷풀이",num:12},
                            {name:"테스트",num:1},
                            {name:"Wallpaper",num:2},
                            {name:"스터디",num:3},
                            {name:"일상",num:4},
                            {name:"2009겨울MT",num:7},
                            {name:"회의",num:3},
                            {name:"2010봄MT",num:2},
                            {name:"그냥",num:2},
                            {name:"먹는거",num:3},
                            {name:"여행",num:1},
                            {name:"야유회",num:6},
                            {name:"2011겨울MT",num:53},
                            {name:"2011봄MT",num:23},
                            {name:"2012겨울MT",num:21},
                            {name:"2012봄MT",num:11},
                            {name:"종강총회",num:5},
                            {name:"2013겨울MT",num:8},
                            {name:"2013여름MT",num:2},
                            {name:"2013년고학번MT",num:5},
                            {name:"2014년 KWEB봄소풍",num:24},
                            {name:"2014년 화합의날",num:21}];
        /*위 카테고리에 추가해서 쓰면됨.*/

        return(
            <div>
                <div id="body_gallery_category">
                    <ul>
                        <li className="postreport"><a href="#">Total</a></li>
                    </ul>
                    <ul>
                        {categoryData.map((category, i) => {
                            return(
                                <li className="postreport">
                                    <a href="#"> {category.name} <span>({category.num})</span></a>
                                </li>
                            );
                        })}
                    </ul>
                </div>  
                <div id="body_gallery_right_container">
                    <div id="body_gallery_name">
                        사진첩
                    </div>

                    {/*TODO : 아래 코드를 반복문으로 바꿔서 집어넣어야함.*/}
                    <div className="body_gallery_sajin">
                        사-진
                    </div>
                    <div className="body_gallery_sajin">
                        사-진
                    </div>
                    <div className="body_gallery_sajin">
                        사-진
                    </div>
                    <div className="body_gallery_sajin">
                        사-진
                    </div>
                    <div className="body_gallery_sajin">
                        사-진
                    </div>
                    <div className="body_gallery_sajin">
                        사-진
                    </div>
                </div>
            </div>
        );
    }
});

export default BodyGallery;