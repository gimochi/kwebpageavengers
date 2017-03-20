import React from 'react';
import ReactDOM from 'react-dom';
import DatgulLoginCheck from './datgul_login_check';
import DatgulList from './datgul_list';

var Datgul = React.createClass ({
    getInitialState() {
        return {
            dbdata:[
                    ["../static/data/gallery_temp/2.jpg",
                    "채호경", "흙수저", "2017-02-23 18:10:13",
                    "채호경은 채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다"],
                    ["../static/data/gallery_temp/2.jpg",
                    "유재효", "은수저", "2017-02-23 18:10:13",
                    "채호경하이채호경이다채호경이다채호경이다채호경이다" +
                    "채호경이다채호경이다채호경이다채호경이다채호경" +
                    "채호경이다채호경이다이다" +
                    "채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경" +
                    "이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다" +
                    "채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경" +
                    "이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경다" +
                    "채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채" +
                    "호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다다채호경이다채호경이다채호경이다" +
                    "채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호" +
                    "경이다채호경이다이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다채호경이다"],
                    ["../static/data/gallery_temp/2.jpg",
                    "김민섭", "금수저", "2017-02-23 18:10:13",
                    "야아 야근이다.야아 야근이다.야아 야근이다.야아 야근이다.야아 야근이다.야아 야근이다.야아 야근이다."],
                    ["../static/data/gallery_temp/2.jpg",
                    "윤현식", "은수저", "2017-02-23 18:10:13",
                    "킹갓엠페러제너럴충무공마제스티유니크언커먼슈퍼크레이지더마스터오브깃그랜드마스터 윤현식"]
                ]
        };
    },
    render: function () {
        return(
            <div className="datgul">
                <DatgulLoginCheck STATE="2" />    {/* 1은 로그인안됨, 2는 됨 */}
                <div className="datgul_box row datgul_stat">
                    <hr/>
                    <p><strong>전체 댓글 수 :&nbsp; <b className="text-danger">{this.state.dbdata.length}</b>&nbsp;&nbsp;개</strong></p>
                    <hr/>
                </div>
                <div className="datgul-wrapper row"> {/*container은 임시.*/}
                {this.state.dbdata.map((data, i) => {
                    return(
                        <DatgulList content={data} key={i} />
                    );
                })}
                </div>
            </div>
        );
    }
});

export default Datgul;