import React from 'react';
import ReactDOM from 'react-dom';


var DatgulLoginCheck = React.createClass ({
    render: function () {
        if(this.props.STATE=="1"){  {/* 로그인 안됨 */}
            return(
                <div className="datgul_box">
                    로그인을 하셔야 댓글을 다실 수 있습니다!
                </div>  
            );
        }
        else if(this.props.STATE=="2"){ {/* 로그인 됨 */}
            return(
                <div className="datgul_box">
                    <table id="datgul_reg_table">
                        <tbody>
                            <tr>
                            <td id="datgul_reg_td1">
                                <textarea placeholder="댓글을 입력하세요" id="datgul_reg_content"></textarea>   
                            </td>
                            <td id="datgul_reg_td2">
                                <button id="datgul_reg_button">등록</button>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }
});

export default DatgulLoginCheck;