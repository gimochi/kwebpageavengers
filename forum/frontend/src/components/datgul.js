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
                    "내용1"],
                    ["../static/data/gallery_temp/2.jpg",
                    "채호경", "(은수저)", "2017-02-23 18:10:13",
                    "내용2"]
                    ]
        };
    },
    render: function () {
        return(
            <div>
                <DatgulLoginCheck STATE="2" />    {/* 1은 로그인안됨, 2는 됨 */}
                {this.state.dbdata.map((data, i) => {
                    return(
                        <DatgulList content={data} />
                    );
                })}
            </div>
        );
    }
});

export default Datgul;