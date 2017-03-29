import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

var DatgulLoginCheck = React.createClass ({
    render: function () {
        if(this.props.STATE==0){  {/* 로그인 안됨 */}
            return(
                <div className="datgul_box row">
                    로그인을 하셔야 댓글을 다실 수 있습니다!
                </div>  
            );
        }
        else if(this.props.STATE==1){ {/* 로그인 됨 */}
            return(
                <div className="datgul_box row">
                    <div className="col-md-11 col-sm-11 col-xs-10 datgul_reg" id="datgul_reg_text">
                        <textarea className="form-control" rows="4" placeholder="댓글을 입력하세요" id="datgul_reg_content"></textarea>
                    </div>
                    <div className="col-md-1 col-sm-1 col-xs-2 datgul_reg" id="datgul_reg_btn">
                        <button className="btn btn-default" id="datgul_reg_button">등록</button>
                    </div>
                </div>
            );
        }
    }
});

let mapStateToProps = (state) => {
  return{
    STATE: state.Userinfo.lgcheck
  };
}

DatgulLoginCheck=connect(mapStateToProps)(DatgulLoginCheck);

export default DatgulLoginCheck;