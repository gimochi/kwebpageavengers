import React from 'react';
import ReactDOM from 'react-dom';
import DatgulLoginCheck from './datgul_login_check';
import DatgulList from './datgul_list';

var Datgul = React.createClass ({
    getInitialState() {
        return {
            dbdata:[
                    ["../static/data/gallery_temp/2.jpg",
                    "채호경", "(은수저)", "2017-02-23 18:10:13",
                    "채호경은 채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다"],
                    ["../static/data/gallery_temp/2.jpg",
                    "유재효", "(은수저)", "2017-02-23 18:10:13",
                    "채호경하이채호경이다채호경이다채호경이다채호경이다" +
                    "채호경이다채호경이다채호경이다채호경이다채호경" +
                    "채호경이다채호경이다이다" +
                    "채호경이다채호경이다채호경이다채호경이다채호경이다"]
                    ]
        };
    },
    render: function () {
        return(
            <div>
                <div className="datgul_box">
                    {this.state.dbdata.length}개의 댓글이 달려 있습니다.
                </div> 

                <DatgulLoginCheck STATE="2" />    {/* 1은 로그인안됨, 2는 됨 */} 
                <div className="wrapper datgul-wrapper container">
                {this.state.dbdata.map((data, i) => {
                    return(
                        <DatgulList content={data} />
                    );
                })}
                </div>
            </div>
        );
    }
});

export default Datgul;